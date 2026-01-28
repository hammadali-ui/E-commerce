import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Checkout() {
  const { cart, setCart } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [paymentType, setPaymentType] = useState("STRIPE"); // STRIPE or COD
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 🚨 Safety: empty cart
  if (!cart || cart.length === 0) {
    return (
      <div className="p-6 text-center mt-40">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 text-blue-600 underline"
        >
          Continue shopping
        </button>
      </div>
    );
  }



    const handleChange = (e) => {
    let value = e.target.value;

    // Remove digits
    value = value.replace(/\d/g, "");

    // Limit to 20 characters
    if (value.length > 20) {
      value = value.slice(0, 20);
    }

    setUsername(value);
  };

  const handleNumberChange = (e) => {
  let value = e.target.value;

  // Remove non-digits
  value = value.replace(/\D/g, "");

  // Limit to 11 digits
  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  setNumber(value);
};

  const validate = () => {
    const newErrors = {};


    if (!username) newErrors.username = "Name is required";
    else if (username.length < 3)
      newErrors.username = "Username must be at least 3 characters";
    else if (username.length == 20) newErrors.username = "Username not greater than 20";

    if (!address) newErrors.address = "Address is required";
    else if (address.length < 5) newErrors.address = "Address must be at least 5 characters";


    if (!number.trim()) {
    newErrors.number = "Phone number is required";
  } else if (!/^\d+$/.test(number)) {
    newErrors.number = "Phone number must contain only digits";
  } else if (number.length !== 11) {
    newErrors.number = "Phone number must be exactly 11 digits";
  }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


const placeOrder = async () => {
  if (!validate()) return;
  setLoading(true);

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

if (paymentType === "STRIPE") {
  if (!stripe || !elements) {
    toast.error("Stripe not ready");
    return;
  }

  // 1️⃣ CREATE PAYMENT INTENT
  const intentRes = await fetch(`${BASE_URL}/payments/create-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      amount: totalPrice, // ✅ NO *100 here
      metadata: {
        username, // ok for metadata
        address,
        number,
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })), // ✅ NOT stringified
      },
    }),
  });

  const data = await intentRes.json();

  if (!intentRes.ok) {
    throw new Error(data.detail || "Payment init failed");
  }

  const { clientSecret } = data;

  if (!clientSecret) {
    throw new Error("Stripe clientSecret missing");
  }

  // 2️⃣ CONFIRM CARD PAYMENT
  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: username || "Customer", // safe fallback
      },
    },
  });

  if (result.error) {
    toast.error(result.error.message);
    return;
  }

  if (result.paymentIntent.status !== "succeeded") {
    toast.error("Payment not completed");
    return;
  }

  // ✅ ORDER CREATED BY WEBHOOK
  setCart([]);
  localStorage.removeItem("cart");

  toast.success("Payment successful 🎉 Order placed!");
  navigate("/ordersuccess");
  return;
}


    // CASH ON DELIVERY

    const orderPayload = {
      total: totalPrice,
      items: cart.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      shipping: { username, address, number },
      paymentType: "COD",
    };

    const orderRes = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderPayload),
    });

    if (!orderRes.ok) {
      const err = await orderRes.json();
      throw new Error(err.detail || "Order failed");
    }

    setCart([]);
    localStorage.removeItem("cart");

    toast.success("Order placed! Pay cash on delivery.");
    navigate("/ordersuccess");

  } catch (err) {
    console.error(err);
    toast.error(err.message || "Checkout failed");
  } finally {
    setLoading(false);
  }
};



  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-2xl font-bold mb-6 mt-20">Checkout</h1>

      {/* Shipping */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-2">Customer Details</h2>
        <input
          placeholder="Full Name"
          value={username}
          onChange={handleChange}
          className="w-full border p-3 mb-2 rounded"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}

        <input
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className="w-full border p-3 mb-2 rounded"
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}

        <input
          placeholder="Phone (11 digits)"
          value={number}
          onChange={handleNumberChange}
          className="w-full border p-3 mb-2 rounded"
        />
        {errors.number && <p className="text-red-500">{errors.number}</p>}
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="font-semibold mb-2">Payment Method</h2>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="STRIPE"
              checked={paymentType === "STRIPE"}
              onChange={() => setPaymentType("STRIPE")}
            />
            Card Payment
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="paymentType"
              value="COD"
              checked={paymentType === "COD"}
              onChange={() => setPaymentType("COD")}
            />
            Cash on Delivery
          </label>
        </div>
      </div>

      {/* Card Details (only if STRIPE) */}
      {paymentType === "STRIPE" && (
        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h2 className="font-semibold mb-2">Card Details</h2>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                  padding: "10px 12px",
                },
                invalid: { color: "#9e2146" },
              },
            }}
          />
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name} × {item.quantity}</span>
            <span>Rs {item.price * item.quantity}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="font-bold flex justify-between">
          <span>Total</span>
          <span>Rs {totalPrice}</span>
        </div>
      </div>

      {/* Pay Button */}
      <button
        onClick={placeOrder}
        disabled={loading}
        className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold cursor-pointer"
      >
        {loading ? "Processing..." : paymentType === "STRIPE" ? "Pay & Place Order" : "Place Order"}
      </button>
    </div>
  );
}
