import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  workspaceName: string;
  labelColor: string;
  creatorName: string;
}

const initialState: FormState = {
  workspaceName: "",
  labelColor: "bg-gray-500",
  creatorName: "User",
};

const formNewWorkspaceSlice = createSlice({
  name: "formNewWorkspace",
  initialState,
  reducers: {
    setWorkspaceName: (state, action: PayloadAction<string>) => {
      state.workspaceName = action.payload;
    },
    setLabelColor: (state, action: PayloadAction<string>) => {
      state.labelColor = action.payload;
    },
    setCreatorName: (state, action: PayloadAction<string>) => {
      state.creatorName = action.payload;
    },
  },
});

export const { setWorkspaceName, setLabelColor, setCreatorName } =
  formNewWorkspaceSlice.actions;

export default formNewWorkspaceSlice.reducer;
