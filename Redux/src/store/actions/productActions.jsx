export { addProduct, removeProduct } from "../reducers/productSlice";
import { changeName } from "../reducers/productSlice";

export const asyncChangeName = () => async (dispatch) => {
  //   const state = getState();
  //   console.log(state);
  setTimeout(() => {
    dispatch(changeName("New Name"));
  }, 2000);
};
