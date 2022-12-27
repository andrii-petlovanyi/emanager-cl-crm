import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  PERSIST,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';
import postsApiSlice from 'redux/posts/postsApiSlice';
import authApiSlice from 'redux/auth/authApiSlice';
import offersApiSlice from 'redux/offers/offersApiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  authApiSlice.middleware,
  postsApiSlice.middleware,
  offersApiSlice.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [postsApiSlice.reducerPath]: postsApiSlice.reducer,
    [offersApiSlice.reducerPath]: offersApiSlice.reducer,
  },
  middleware,
  //   devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
