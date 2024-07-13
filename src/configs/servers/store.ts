import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// اضافه کردن reducer ها و middleware ها در اینجا

const store = configureStore({
  reducer: {}, // reducer های شما اینجا اضافه می‌شوند
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // برای اینکه Redux Toolkit پیام خطا برای ذخیره‌سازی غیر قابل سریالی‌سازی را نمایش ندهد
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
