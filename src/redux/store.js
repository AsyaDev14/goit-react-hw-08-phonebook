import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './slice';
import { authReducer } from './auth/authSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
   key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
}
const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contactData: contactsSlice.reducer,
  auth: persistedReducer,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store)