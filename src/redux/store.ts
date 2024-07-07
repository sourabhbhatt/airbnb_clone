import storage from '../utils/storage';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

export const persistConfig = {key: 'root', storage: storage, version: 1};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devToolsEnabled = process.env.NODE_ENV !== 'production';

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: devToolsEnabled,
});

const persistor = persistStore(store);
export {store, persistor};
