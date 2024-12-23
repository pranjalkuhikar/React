import axios from "axios";
import { ShoppingBagIcon } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

const AddToCart = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setAllProduct(response.data);
    };
    fetchData();
  }, []);
  const handleClick = (idx) => {
    setCount((prev) => prev + 1);
    // setClick((prev) => ({ ...prev, [idx]: !prev[idx] }));
    setClick((prev) => ({ ...prev, [idx]: true }));
    setCart((prev) => [...prev, allProduct[idx]]);
  };
  const handleRemoveFromCart = (idx) => {
    const updateCart = [...cart];
    updateCart.splice(idx, 1);
    setCart(updateCart);
    setCount(updateCart.length);
  };

  return (
    <div className="bg-zinc-900 min-h-screen min-w-screen text-white p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-sans text-5xl">Amazon</h1>
        <h6 className="relative text-2xl">
          <p className="absolute left-2 -top-7">{count}</p>
          <ShoppingBagIcon size={"1.2em"} />
        </h6>
      </div>
      <div className="flex gap-10 ">
        <div className="w-3/5 border-stone-400 border rounded-lg p-6 mt-4">
          <h1 className="font-sans text-5xl mb-10">All Product</h1>
          <div className="flex flex-wrap gap-10">
            {allProduct.length > 0 ? (
              allProduct.map((item, idx) => (
                <div
                  key={idx}
                  className="w-72 h-fit border mx-auto border-stone-400 rounded-lg overflow-hidden"
                >
                  <div className="w-full h-60">
                    <img
                      src={item.image}
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-3 h-2/5">
                    <h2 className="text-gray-400 text-lg">{item.title}</h2>
                    <h3 className="text-sm line-clamp-2">{item.description}</h3>
                    <h2 className="text-lg font-bold">${item.price}</h2>
                    <div
                      onClick={() => handleClick(idx)}
                      className={`px-3 cursor-pointer mt-4 py-1 text-center bg-orange-600 rounded-md font-semibold active:scale-95 ${
                        click[idx]
                          ? "bg-gray-600 pointer-events-none"
                          : "pointer-events-auto bg-orange-600"
                      }`}
                    >
                      {click[idx] ? "Added" : "Add to Cart"}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-lg">Loading Product...</div>
            )}
          </div>
        </div>
        <div className="w-2/5 border border-stone-400 rounded-lg p-6 mt-4">
          <h1 className="font-sans text-5xl mb-10">Cart</h1>
          <div className="flex flex-wrap gap-10">
            {cart.length > 0 ? (
              cart.map((item, idx) => (
                <div
                  key={idx}
                  className="w-72 border mx-auto border-stone-400 rounded-lg overflow-hidden"
                >
                  <div className="w-full h-60">
                    <img
                      src={item.image}
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-3 h-2/5">
                    <h2 className="text-gray-400 text-lg">{item.title}</h2>
                    <h3 className="text-sm line-clamp-2">{item.description}</h3>
                    <h2 className="text-lg font-bold">${item.price}</h2>
                    <div
                      onClick={handleRemoveFromCart}
                      className="px-3 mt-4 cursor-pointer py-1 text-center bg-red-600 rounded-md font-semibold active:scale-95"
                    >
                      Remove
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Empty Cart</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
