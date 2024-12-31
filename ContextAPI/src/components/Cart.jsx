import { useContext } from "react";
import { CartContext } from "../context/CartData";

const Cart = () => {
  const { brand, count, handlerIncrease, users } = useContext(CartContext);
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        <h1>{brand}</h1>
        <h2>{count}</h2>
        <button
          className="px-5 py-2 bg-blue-600 rounded-xl active:scale-95"
          onClick={handlerIncrease}
        >
          Increase
        </button>
      </div>
      <div className="bg-zinc-900 p-20 font-mono">
        <h1 className="text-white text-center text-5xl mb-10 underline">
          Showing Json Data
        </h1>
        <div className="grid grid-cols-2 text-white gap-6 md:grid-cols-3 lg:grid-cols-4 ">
          {users.length > 0 ? (
            users.map((item, idx) => (
              <div
                key={idx}
                className={`bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                  item.available
                    ? "border-green-400 border-2"
                    : "border-red-400 border-2"
                }`}
              >
                <img
                  src={item.profilePhoto}
                  alt={item.fullName}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{item.fullName}</h2>
                  <p className="mb-2">{item.designation}</p>
                  <p className="mb-2">{item.company}</p>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-bold">Rate:</span>
                    <span>${item.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Status:</span>
                    <span>{item.status}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="bg-gray-800 text-white px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button
                      className={`w-full mt-4 p-2 text-white font-semibold rounded-lg ${
                        item.available
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      {item.available ? "Available" : "Not Available"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-3xl">No users found.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
