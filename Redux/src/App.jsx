import { useEffect } from "react";
import Product from "./components/Product";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch(fetchData()));
  }, []);
  return (
    <>
      <Product />
    </>
  );
};

export default App;
