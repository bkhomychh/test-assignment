import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const comparisonSlice = createSlice({
  name: 'comparison',
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
  key: 'comparedItems',
  storage,
};

export const { addItem, deleteItem } = comparisonSlice.actions;
export const comparisonPersistedReducer = persistReducer(persistConfig, comparisonSlice.reducer);
