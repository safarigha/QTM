import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoards } from "../APIs/boardsApi";
import { BoardState } from "../interfaces";

export const fetchBoard = createAsyncThunk("Board/fetchBoard", async () => {
  const response = await getBoard(workspaceId, projectId);
  return response.data;
});

const initialState: BoardState = {
  boards: [],
  currentBoardsId: null,
  status: "idle",
  error: null,
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    resetBoards: (state) => {
      state.boards = [];
      state.currentBoardsId = null;
      state.status = "idle";
      state.error = null;
    },
    setCurrentWorkspaceId: (state, action) => {
      state.currentBoardsId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoard.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBoard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.boards = action.payload;
      })
      .addCase(fetchBoard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { resetBoards, setCurrentWorkspaceId } = boardsSlice.actions;
export default boardsSlice.reducer;
