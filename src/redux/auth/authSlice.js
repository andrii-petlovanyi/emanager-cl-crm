/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userId: null,
  note: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, { payload }) {
      state.userName = payload.user.name;
      state.userId = payload.user.id;
      state.note = payload.user.note;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      state.userName = payload.user.name;
      state.userId = payload.user.id;
      state.token = payload.token;
      state.note = payload.note;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.userName = null;
      state.userId = null;
      state.note = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    refresh: (state, { payload }) => {
      state.userName = payload.user.name;
      state.userId = payload.user.id;
      state.note = payload.user.note;
      state.isLoggedIn = true;
    },
  },
});
export const { register, logIn, logOut, refresh } = authSlice.actions;
export default authSlice.reducer;
