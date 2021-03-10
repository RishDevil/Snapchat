import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userauth",
  initialState: {
    userData: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.userData = {};
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const userdata = (state) => state.user.userData;

export default userSlice.reducer;
