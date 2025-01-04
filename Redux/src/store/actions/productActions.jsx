export { addProduct, removeProduct } from "../reducers/productSlice";
import { changeName, getData } from "../reducers/productSlice";

export const asyncChangeName = () => async (dispatch) => {
  setTimeout(() => {
    dispatch(changeName("New Name"));
  }, 2000);
};

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    dispatch(getData(data));
  } catch (error) {
    console.log(error);
  }
};
