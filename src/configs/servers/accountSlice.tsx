import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccountDetails } from "../APIs/accountApi";
import { getAccountDetailToken } from "../../helpers/authToken";

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const accountDetail = getAccountDetailToken();
    if (!accountDetail || !accountDetail.id)
      return new Error("Account Details not found");

    const response = await getAccountDetails(accountDetail.id);
    return response.data;
  }
);

const initialState = {
  data: null as any,
  status: "idle",
  error: null as string | null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccounts: (state) => {
      state.data = {};
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAccount.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { resetAccounts } = accountSlice.actions;

export default accountSlice.reducer;
