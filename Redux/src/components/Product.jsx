import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../store/actions/productActions";

const Product = () => {
  const { data } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const newData = {
    id: Date.now(),
    name: "New Product",
    price: Math.floor(Math.random() * 1000) + 1,
  };

  const HandlerAdd = () => {
    dispatch(addProduct(newData));
  };

  const HandlerDelete = (id) => {
    dispatch(removeProduct({ id }));
  };

  return (
    <>
      {data.map((item, idx) => (
        <div key={idx}>
          <h2>{item.name}</h2>
          <p>Price: {item.price}</p>
          <button type="button" onClick={() => HandlerDelete(idx)}>
            Delete Product
          </button>
        </div>
      ))}
      <br />
      <hr />
      <button type="button" onClick={HandlerAdd}>
        Add Product
      </button>
    </>
  );
};

export default Product;
