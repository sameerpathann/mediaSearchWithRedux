import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Slices/searchSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
