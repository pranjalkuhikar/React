import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
  ],
  name: "Pranjal",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.data = state.data.filter((_, idx) => idx !== action.payload.id);
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { addProduct, removeProduct, changeName } = productSlice.actions;
