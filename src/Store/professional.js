import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setProfessional(state, action) {
      return [...action.payload];
    },
    appendProfessional(state, action) {
      return [...state, ...action.payload];
    },
  },
});
export const professionalsActions = professionalSlice.actions;
export default professionalSlice;
