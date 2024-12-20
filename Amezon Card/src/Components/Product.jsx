import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 1999,
      image:
        "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "High-quality wireless headphones with noise cancellation.",
      rating: 4.5,
      reviews: 120,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone Stand Holder",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "Adjustable smartphone stand for desk use.",
      rating: 4.2,
      reviews: 80,
      category: "Accessories",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1530745342582-0795f23ec976?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "Ergonomic gaming mouse with customizable buttons.",
      rating: 4.8,
      reviews: 200,
      category: "Gaming",
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "Insulated water bottle that keeps drinks hot or cold.",
      rating: 4.6,
      reviews: 150,
      category: "Kitchen",
    },
    {
      id: 5,
      name: "Wireless Keyboard and Mouse Combo",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1556228578-dd539282b964?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      description: "Compact and sleek wireless keyboard and mouse.",
      rating: 4.4,
      reviews: 95,
      category: "Electronics",
    },
    {
      id: 6,
      name: "Smartwatch with Fitness Tracker",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1564020426549-fabfb8c467ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description:
        "Smartwatch with heart rate monitoring and activity tracking.",
      rating: 4.3,
      reviews: 210,
      category: "Electronics",
    },
    {
      id: 7,
      name: "Portable Power Bank 10000mAh",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Compact power bank with fast charging support.",
      rating: 4.7,
      reviews: 180,
      category: "Accessories",
    },
    {
      id: 8,
      name: "Noise-Canceling Earbuds",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Premium earbuds with active noise cancellation.",
      rating: 4.6,
      reviews: 250,
      category: "Electronics",
    },
    {
      id: 9,
      name: "Laptop Backpack",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Durable laptop backpack with multiple compartments.",
      rating: 4.5,
      reviews: 140,
      category: "Bags",
    },
    {
      id: 10,
      name: "Adjustable Dumbbells",
      price: 3999,
      image:
        "https://images.unsplash.com/photo-1620917669788-be691b2db72a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Adjustable dumbbells for versatile workouts at home.",
      rating: 4.8,
      reviews: 300,
      category: "Fitness",
    },
    {
      id: 11,
      name: "LED Desk Lamp",
      price: 699,
      image:
        "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Energy-efficient desk lamp with adjustable brightness.",
      rating: 4.2,
      reviews: 120,
      category: "Home",
    },
    {
      id: 12,
      name: "Non-Stick Cookware Set",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1693168045046-9a4b4f30f1c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Durable non-stick cookware set for everyday cooking.",
      rating: 4.4,
      reviews: 110,
      category: "Kitchen",
    },
    {
      id: 13,
      name: "Electric Kettle",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Fast-boiling electric kettle with auto shut-off feature.",
      rating: 4.6,
      reviews: 130,
      category: "Kitchen",
    },
    {
      id: 14,
      name: "Foldable Yoga Mat",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description:
        "Lightweight and foldable yoga mat for comfortable workouts.",
      rating: 4.3,
      reviews: 90,
      category: "Fitness",
    },
    {
      id: 15,
      name: "4K Action Camera",
      price: 4999,
      image:
        "https://images.unsplash.com/photo-1599733589296-1a181e38769b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      description: "Waterproof action camera for capturing stunning videos.",
      rating: 4.7,
      reviews: 220,
      category: "Electronics",
    },
  ];

  const [count, setCount] = useState(0);

  const handlerClick = (idx) => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="overflow-hidden">
      <div className="border border-stone-400 p-10 mt-10 rounded-lg">
        <Link to={"/addtocart"} className="relative px-3 py-2 cursor-pointer">
          {" "}
          <div className="absolute top-0 left-3">{count}</div>
          <ShoppingCart />
        </Link>
        <div className="text-center pb-10 text-5xl"> Products</div>
        <div className="flex flex-wrap w-fit items-center justify-center gap-9">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="border border-stone-400 w-fit h-fit rounded-lg"
            >
              <div className="flex flex-col px-3 py-2">
                <img
                  className="w-60 h-60 object-cover rounded-lg"
                  src={item.image}
                  alt="Product"
                />
                <h2 className="text-xl w-60 mt-4 line-clamp-1">{item.name}</h2>
                <p className="text-sm w-60 text-stone-400 line-clamp-3">
                  {item.description}
                </p>
                <p className="text-base font-semibold">${item.price}</p>
                <div
                  onClick={() => handlerClick(idx)}
                  className="mt-4 text-sm px-4 py-2 active:scale-95 cursor-pointer bg-yellow-700 rounded-lg text-gray-100 text-center font-semibold"
                >
                  Add to Cart
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
