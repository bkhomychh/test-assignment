import { configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { authPersistedReducer } from './auth';
import { cartPersistedReducer } from './cart';
import { comparisonPersistedReducer } from './comparison';
import { favoritePersistedReducer } from './favorite';
import { viewedPersistedReducer } from './viewed';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    cart: cartPersistedReducer,
    favorite: favoritePersistedReducer,
    comparison: comparisonPersistedReducer,
    viewed: viewedPersistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
