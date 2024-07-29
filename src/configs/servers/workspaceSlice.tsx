import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWorkspaces } from "../APIs/workspacesApi";
import { WorkspaceState } from "../interfaces";
import { getAccessToken } from "../../helpers/authToken";

export const fetchWorkspaces = createAsyncThunk(
  "workspaces/fetchWorkspaces",
  async () => {
    const token = getAccessToken();
    if (!token) {
      return new Error("Access token is missing");
    }
    const response = await getWorkspaces(token);
    return response.data;
  }
);

const initialState: WorkspaceState = {
  workspaces: [],
  status: "idle",
  error: null,
};

const workspacesSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    resetWorkspaces: (state) => {
      state.workspaces = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkspaces.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.workspaces = action.payload;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { resetWorkspaces } = workspacesSlice.actions;
export default workspacesSlice.reducer;
