import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    register(state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
    },
    logIn(state, { payload }) {
      state.user = { ...payload };
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.user = { ...authInitialState };
      state.isLoggedIn = false;
    },
  },
});

export const { register, logIn, logOut } = authSlice.actions;
