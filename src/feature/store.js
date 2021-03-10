import { configureStore } from "@reduxjs/toolkit";
import cameraReducer from "./CamerSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    camera: cameraReducer,
    user: userReducer,
  },
});
