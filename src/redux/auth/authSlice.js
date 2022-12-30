/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  postsId: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, { payload }) {
      state.userName = payload.user.username;
      state.postsId = payload.user.posts;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      state.userName = payload.user.username;
      state.postsId = payload.user.posts;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.userName = null;
      state.postsId = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    refresh: (state, { payload }) => {
      state.userName = payload.user.username;
      state.postsId = payload.user.posts;
      state.isLoggedIn = true;
    },
  },
});
export const { register, logIn, logOut, refresh } = authSlice.actions;
export default authSlice.reducer;
