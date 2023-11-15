import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const sololaborSlice = createSlice({
  name: "sololabor",
  initialState,
  reducers: {
    setSololabor(state, action) {
      return [...action.payload];
    },
    appendSololabor(state, action) {
      return [...state, ...action.payload];
    },
  },
});
export const soloLaborActions = sololaborSlice.actions;
export default sololaborSlice;
