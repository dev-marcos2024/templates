import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeStice";
import alertSlice from "./slices/aletSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
