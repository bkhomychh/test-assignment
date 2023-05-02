import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const viewedSlice = createSlice({
  name: 'viewed',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload }) {
      state.items.push(payload);
    },
  },
});

const persistConfig = {
  key: 'viewedItems',
  storage,
};

export const { addItem, deleteItem } = viewedSlice.actions;
export const viewedPersistedReducer = persistReducer(persistConfig, viewedSlice.reducer);
