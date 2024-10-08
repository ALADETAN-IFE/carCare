import { configureStore } from "@reduxjs/toolkit";
import carCareReducer from "../Redux-actions/carCare";
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
  key: 'root',
  version: 1,
  storage,
}

if (import.meta.env.VITE_NODE_ENV === 'production') {
  // console.log("production")
  // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
}

const persistedReducer = persistReducer(persistConfig, carCareReducer)

export const store = configureStore({
    reducer: {
        carCare: persistedReducer,
      },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: import.meta.env.VITE_NODE_ENV !== 'production',
})

export const persistor = persistStore(store)