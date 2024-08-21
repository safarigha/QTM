import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectionState {
  selectedWorkspaceId: string | null;
  selectedProjectId: string | null;
}

const initialState: SelectionState = {
  selectedWorkspaceId: null,
  selectedProjectId: null,
};

const selectionsSlice = createSlice({
  name: "selections",
  initialState,
  reducers: {
    setSelectedWorkspaceId(state, action: PayloadAction<string | null>) {
      state.selectedWorkspaceId = action.payload;
    },
    setSelectedProjectId(state, action: PayloadAction<string | null>) {
      state.selectedProjectId = action.payload;
    },
  },
});

export const { setSelectedWorkspaceId, setSelectedProjectId } =
  selectionsSlice.actions;
export default selectionsSlice.reducer;
