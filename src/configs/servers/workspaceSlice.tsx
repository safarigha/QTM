// src/store/workspacesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWorkspaces } from "../APIs/workspacesApi";
import { WorkspaceState } from "../interfaces";

export const fetchWorkspaces = createAsyncThunk(
  "workspaces/fetchWorkspaces",
  async () => {
    const response = await getWorkspaces();
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
  reducers: {},
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

export default workspacesSlice.reducer;
