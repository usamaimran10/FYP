import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./product";
import professionalSlice from "./professional";
import sololaborSlice from "./soloLabor";
import filterSlice from "./filter";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    professionals: professionalSlice.reducer,
    sololabor: sololaborSlice.reducer,
    filter: filterSlice.reducer,
  },
});
export default store;
