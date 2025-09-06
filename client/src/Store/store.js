import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/user.slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
