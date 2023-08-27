import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";

import { rootReducer } from "./rootReducer";
import { reduxLogMiddleware, reduxLogMiddleware as m1 } from "./middleware";

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process?.env?.NODE_ENV === "development") {
      return getDefaultMiddleware()?.concat(reduxLogMiddleware);
    }
    return getDefaultMiddleware();
  },
});

export default rootStore;

export type RootStore = typeof rootStore;
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;
export type RootThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
