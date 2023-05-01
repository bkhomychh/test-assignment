import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoriteSlice = createSlice({
  name: 'favorite',
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
  key: 'favoriteItems',
  storage,
};

export const { addItem, deleteItem } = favoriteSlice.actions;
export const favoritePersistedReducer = persistReducer(persistConfig, favoriteSlice.reducer);
