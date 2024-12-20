import React, { useContext } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Card from "./Card";
import Product from "./Product";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between px-3 py-2">
          <Link to={"/"} className="text-4xl font-mono">
            Amazon
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/addtocart" element={<Card />} /> // Fix the route path
      </Routes>
    </>
  );
};

export default Navbar;
