import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rating: 0,
  city: "",
  isEnabled: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    set(state, action) {
      console.log("setting: ", action.payload);
      return { ...state, ...action.payload };
    },
  },
});
export const filterActions = filterSlice.actions;
export default filterSlice;
