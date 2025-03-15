import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;
