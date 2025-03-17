import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import complaint from "./complaints/complaintSlice";
import comment from "./comments/commentSlice";

export const store = configureStore({
  reducer: { auth, complaint, comment },
});
