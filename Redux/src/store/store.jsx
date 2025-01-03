/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";

export default configureStore({
  reducer: {
    products: productSlice,
  },
});
