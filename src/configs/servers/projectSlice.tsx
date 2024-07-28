import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "../APIs/projectsApi";
import { ProjectsState } from "../interfaces";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (workspaceId: string) => {
    const response = await getProjects(workspaceId);
    return { workspaceId, projects: response.data };
  }
);

const initialState: ProjectsState = {
  projectsByWorkspace: {},
  status: "idle",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projectsByWorkspace[action.payload.workspaceId] =
          action.payload.projects;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default projectsSlice.reducer;
