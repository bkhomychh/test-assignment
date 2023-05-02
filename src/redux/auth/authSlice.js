import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authInitialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    password: '',
  },
  isLoggedIn: false,
};

const authSlice = createSlice({
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

const persistConfig = {
  key: 'auth',
  storage,
};

export const { register, logIn, logOut } = authSlice.actions;
export const authPersistedReducer = persistReducer(persistConfig, authSlice.reducer);
