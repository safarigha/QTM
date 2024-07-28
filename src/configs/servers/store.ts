import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { useDispatch } from "react-redux";
import workspacesReducer from "./workspaceSlice";
import projectsReducer from "./projectSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    workspaces: workspacesReducer,
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
