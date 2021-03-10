import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraImage: null,
    postImage: null,
    postId: null,
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    setPostImage: (state, action) => {
      state.postImage = action.payload;
    },
    resetCameraImage: (state, action) => {
      state.cameraImage = null;
    },
    resetPostImage: (state, action) => {
      state.postImage = null;
    },
    setPostId: (state, action) => {
      state.postId = action.payload;
    },
    resetPostId: (state, action) => {
      state.postId = null;
    },
  },
});

export const {
  setCameraImage,
  resetCameraImage,
  setPostImage,
  setPostId,
  resetPostId,
} = cameraSlice.actions;
export const selectImage = (state) => state.camera.cameraImage;
export const postImage = (state) => state.camera.postImage;
export const postId = (state) => state.camera.postId;
export default cameraSlice.reducer;
