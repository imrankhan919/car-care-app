import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import complaint from "./complaints/complaintSlice";

export const store = configureStore({
  reducer: { auth, complaint },
});
