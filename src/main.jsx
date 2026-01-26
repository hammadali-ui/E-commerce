import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "sonner";
import "./index.css";
import { CartProvider } from "./context/CartContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// 🔑 Stripe public key (TEST KEY)
const stripePromise = loadStripe("pk_test_51SrFSLQXpf2PERjazVNUytZOAbjXyZmWkszAppA462ZwTjOr6JkG7ZWU8qQRCycWt2VaMamPnHd4RLvnRRTk488i00YRIKwDI5");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Elements stripe={stripePromise}>
        <App />
        <Toaster position="top-center" richColors />
      </Elements>
    </CartProvider>
  </React.StrictMode>
);
