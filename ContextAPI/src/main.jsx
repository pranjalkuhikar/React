import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartData from "./context/CartData.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartData>
      <App />
    </CartData>
  </StrictMode>
);
