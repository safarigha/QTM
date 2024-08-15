import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects } from "../APIs/projectsApi";
import { FetchProjectsPayload, ProjectsState } from "../interfaces";
import { getAccessToken } from "../../helpers/authToken";

export const fetchProjects = createAsyncThunk<FetchProjectsPayload, string>(
  "projects/fetchProjects",
  async (workspaceId: string, { rejectWithValue }) => {
    try {
      const token = getAccessToken();
      if (!token) {
        return rejectWithValue("Access token is missing");
      }
      const response = await getProjects(workspaceId, token);
      return { workspaceId, projects: response.data };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unexpected error occurred");
      }
    }
  }
);

const initialState: ProjectsState = {
  projectsByWorkspace: {},
  currentProject: null,
  status: "idle",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    resetProjects: (state) => {
      state.projectsByWorkspace = {};
      state.currentProject = null;
      state.status = "idle";
      state.error = null;
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        const payload = action.payload as FetchProjectsPayload;
        state.projectsByWorkspace[payload.workspaceId] = payload.projects;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { resetProjects, setCurrentProject } = projectsSlice.actions;

export default projectsSlice.reducer;
