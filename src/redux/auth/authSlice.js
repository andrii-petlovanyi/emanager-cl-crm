/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userId: null,
  notes: null,
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
      state.notes = payload.user.notes;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      console.log(payload);
      state.userName = payload.user.name;
      state.userId = payload.user.id;
      state.token = payload.token;
      state.notes = payload.notes;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.userName = null;
      state.userId = null;
      state.notes = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    refresh: (state, { payload }) => {
      console.log(payload);
      state.userName = payload.user.name;
      state.userId = payload.user.id;
      state.notes = payload.user.notes;
      state.isLoggedIn = true;
    },
  },
});
export const { register, logIn, logOut, refresh } = authSlice.actions;
export default authSlice.reducer;
