import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      state.items.push(payload);
    },
    deleteItem(state, { payload }) {
      const index = state.items.findIndex(({ id }) => id === payload);
      state.items.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage,
};

export const { addItem, deleteItem } = cartSlice.actions;
export const cartPersistedReducer = persistReducer(persistConfig, cartSlice.reducer);
