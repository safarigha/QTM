import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  BoardName: string;
  labelColor: string;
  colorName: string;
  creatorName: string;
}

const initialState: FormState = {
  BoardName: "",
  labelColor: "gray",
  colorName: "پیش‌فرض",
  creatorName: "User",
};

const formNewBoardSlice = createSlice({
  name: "formNewBoard",
  initialState,
  reducers: {
    setBoardName: (state, action: PayloadAction<string>) => {
      state.BoardName = action.payload;
    },
    setLabelColor: (
      state,
      action: PayloadAction<{ colorClass: string; colorName: string }>
    ) => {
      state.labelColor = action.payload.colorClass;
      state.colorName = action.payload.colorName;
    },
    setCreatorName: (state, action: PayloadAction<string>) => {
      state.creatorName = action.payload;
    },
  },
});

export const { setBoardName, setLabelColor, setCreatorName } =
  formNewBoardSlice.actions;

export default formNewBoardSlice.reducer;
