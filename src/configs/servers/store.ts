import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlice from "./auth/authSlice";
import workspacesReducer from "./workspaceSlice";
import projectsReducer from "./projectSlice";
import accountReducer from "./accountSlice";
import formNewWorkspaceReducer from "./formNewWorkspaceSlice";
import colorReducer from "./colorSlice";
import selectionsReducer from "./selectionsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    workspaces: workspacesReducer,
    projects: projectsReducer,
    account: accountReducer,
    formNewWorkspace: formNewWorkspaceReducer,
    color: colorReducer,
    selections: selectionsReducer,
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
