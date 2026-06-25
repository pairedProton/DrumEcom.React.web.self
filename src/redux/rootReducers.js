// Combine and export application reducers for Redux.
// This file aggregates feature slice reducers into a single root reducer
// which is used when configuring the Redux store (e.g. in store.js).
// Add additional slice reducers here when new state domains are created.

import { combineReducers } from "@reduxjs/toolkit"; // Helper to combine multiple reducers
import baseSlice from "./slices/baseSlice";

const rootReducer = combineReducers({
  base: baseSlice,
});

export default rootReducer;
