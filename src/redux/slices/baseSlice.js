import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
  name: "base",
  initialState: {
    token: "",
    profile: "",
  },
  reducers: {
    updateBase: (state, action) => {
      return Object.assign(state, action.payload);
    },
    resetBase: state => {
      return (state = {
        token: "",
        profile: "",
      });
    },
  },
});

export const { updateBase, resetBase } = baseSlice.actions;
export default baseSlice.reducer;
