import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces";
import {
  storeAccessToken,
  removeTokens,
  getAccessToken,
  getRefreshToken,
  setRefreshToken,
  getTokenExpiryTime,
} from "../../../helpers/authToken";
import { refreshAccessTokenAPI } from "../../APIs/accountApi";

let refreshTokenTimeout: NodeJS.Timeout | null = null;

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, { rejectWithValue }) => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return rejectWithValue("No refresh token available");

    try {
      const response = await refreshAccessTokenAPI();
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to refresh token");
    }
  }
);

const initialState: AuthState = {
  token: getAccessToken() || null,
  expiresIn: getTokenExpiryTime() || null,
};

const setRefreshTokenTimeout = (expiresIn: number) => {
  if (refreshTokenTimeout) clearTimeout(refreshTokenTimeout);
  refreshTokenTimeout = setTimeout(() => {
    refreshAccessToken();
  }, expiresIn * 1000);
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
      }>
    ) {
      state.token = action.payload.accessToken;
      state.expiresIn = action.payload.expiresIn;
      storeAccessToken(action.payload.accessToken);
      setRefreshToken(action.payload.refreshToken);
      setRefreshTokenTimeout(action.payload.expiresIn);
    },
    clearToken(state) {
      state.token = null;
      state.expiresIn = null;
      removeTokens();
      if (refreshTokenTimeout) clearTimeout(refreshTokenTimeout);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.access;
        state.expiresIn = action.payload.expires_in;
        storeAccessToken(action.payload.access);
        setRefreshToken(action.payload.refresh);
        setRefreshTokenTimeout(action.payload.expires_in);
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        console.error(action.payload);
      });
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
