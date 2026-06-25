// Configure and export the Redux store with persistence (local storage).
// This file wires up the root reducer, enables persistence across page reloads
// within the browser session (localStorage), and configures middleware to
// avoid Redux Toolkit's serializable-check warning from redux-persist actions.

import rootReducer from "./rootReducers"; // Combined reducers for the app
import { configureStore } from "@reduxjs/toolkit"; // RTK wrapper around createStore
import { persistReducer, persistStore } from "redux-persist"; // For persisting store
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  // Unique key for the persisted root state.
  key: "root",

  // Choose where to store persisted state: localstorage keeps it for the current tab session.
  storage: localStorage,

  // Encryption of storage
  transforms: [
    encryptTransform({
      secretKey: "@D$()/^^/",
      onError: err => console.error(err),
    }),
  ],

  // Add whitelist to store slices on browser storage
  whitelist: ["base", "login", "bulkUpload"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// Wrap the application's rootReducer with persistReducer so that selected slice(s) can be rehydrated.

// Configure the Redux store using Redux Toolkit's configureStore.
// serializableCheck is disabled because redux-persist dispatches non-serializable actions
// (and the persisted state may contain non-serializable values). If you need more
// granular checks, configure serializableCheck to ignore specific action types instead.
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // must disable when using redux-persist because it stores non-serializable values
    }),
});

// Create a persistor instance used to control and rehydrate the persisted store.
export const persistor = persistStore(store);