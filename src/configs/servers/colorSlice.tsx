import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorState {
  labelColor: string;
  labelColorName: string;
  themeColor: string;
}

const initialState: ColorState = {
  labelColor: "bg-gray-500",
  labelColorName: "پیش‌فرض",
  themeColor: "bg-brand-primary",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setLabelColor: (
      state,
      action: PayloadAction<{ colorClass: string; colorName: string }>
    ) => {
      state.labelColor = action.payload.colorClass;
      state.labelColorName = action.payload.colorName;
    },
    setThemeColor: (
      state,
      action: PayloadAction<{ colorClass: string; colorName: string }>
    ) => {
      state.themeColor = action.payload.colorClass;
    },
    resetThemeColor: (state) => {
      state.themeColor = "bg-brand-primary";
    },
  },
});

export const { setLabelColor, setThemeColor, resetThemeColor } =
  colorSlice.actions;
export default colorSlice.reducer;
