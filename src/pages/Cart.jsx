import { useEffect, useState } from "react";
import { getCart, removeFromCart, increaseQty, decreaseQty, clearCart } from "../utils/cart";
import { Link,useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export default function Cart() {
  const { cart, setCart } = useCart();

  const totalPrice = cart.reduce(
    (t, i) => t + i.price * i.quantity,
    0
  );

  //   const { cartItems = [] } = useCart(); // 👈 IMPORTANT

  // const total = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.qty,
  //   0
  // );

const navigate = useNavigate();

const handleCheckout = () => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/checkout");
  } else {
    toast.error("Please login first");
    navigate("/login", {
      state: { from: "checkout" },
    });
  }
};

const handleAddToCart = (product) => {
  setCart((prev) => {
    const exists = prev.find((i) => i.id === product.id);
    if (exists) {
      return prev.map((i) =>
        i.id === product.id
          ? { ...i, quantity: Math.min(i.quantity + 1, product.stock) } // max stock
          : i
      );
    } else {
      return [...prev, { ...product, quantity: 1 }];
    }
  });
};




  if (cart.length === 0) {
    return (


    <div className="p-6 pb-108">
    <div
    className="
      w-[100%] fixed top-20 mt-40 md:mt-4"
  >
    <button
      onClick={() => navigate("/")}
      className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition"
    >
      ← Back
    </button>
  </div>
 
        <h1 className="text-2xl font-bold mt-46 md:mt-36 ">Cart</h1>
        <p className="mt-4 text-gray-600  ">Your cart is empty</p>
        </div>
    );
  }

    // const totalPrice = cart.reduce(
    // (total, item) => total + item.price * item.quantity,0);

  return (


<div className="p-4 sm:p-6 mx-4 sm:mx-6 md:mx-20 sm:py-30">
 <div
  className="fixed top-20 left-4 md:left-6 mt-20 md:mt-4"
>
  <button
    onClick={() => navigate("/")}
    className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition cursor-pointer"
  >
    ← Back
  </button>
</div>


  <h1 className="text-2xl font-bold mb-6 mt-56 md:mt-30 text-slate-900">
    Your Cart
  </h1>

  {cart.length === 0 && (
    <div className="py-20 text-center text-slate-500 text-lg">
      Your cart is empty 😔
    </div>
  )}

  {cart.map((item) => (
    <div
      key={item.id}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-md rounded-2xl p-4 mb-4 hover:shadow-xl transition-transform hover:-translate-y-1"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <img
          src={
            item.image
              ? item.image.startsWith("http")
                ? item.image
                : `http://localhost:8000/${item.image.replace(/^\/+/, "")}`
              : "/placeholder.png"
          }
          alt={item.name}
          className="w-24 h-24 rounded-xl object-cover mx-auto sm:mx-0 border border-gray-200"
        />

            {/* <img
  src={
    product.image
      ? product.image.startsWith("http")
        ? product.image
        : `http://localhost:8000/${product.image.replace(/^\/+/, "")}`
      : "/placeholder.png"
  }
  alt={product.name}
  className="w-full h-56 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
/> */}

        <div className="text-center sm:text-left">
          <h2 className="font-semibold text-lg text-slate-900">{item.name}</h2>
          <p className="text-slate-600 mt-1">Rs {item.price}</p>

          {/* <div className="flex justify-center sm:justify-start items-center gap-3 mt-3">
            <button
              onClick={() => setCart(decreaseQty(item.id))}
              className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition cursor-pointer"
            >
              −
            </button>
            <span className="px-2 font-medium text-slate-900">{item.quantity}</span>
            
            <button
              onClick={() => setCart(increaseQty(item.id))}
              className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition cursor-pointer"
            >
              +
            </button>
          </div> */}
          <div className="flex items-center">
  {/* DECREASE */}
  <button
    onClick={() => setCart(decreaseQty(item.id))}
    className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition cursor-pointer"
  >
    −
  </button>

  {/* QUANTITY DISPLAY */}
  <span className="px-2 font-medium text-slate-900">{item.quantity}</span>

  {/* INCREASE */}
<button
  onClick={() => setCart(increaseQty(item.id))}
  disabled={item.quantity >= item.stock}
  className={`px-3 py-1 rounded-full transition ${
    item.quantity < item.stock
      ? "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
      : "bg-gray-300 text-gray-400 cursor-not-allowed"
  }`}
>
  +
</button>

</div>

        </div>
      </div>

      <button
        onClick={() => {
          removeFromCart(item.id);
          setCart(getCart());
        }}
        className="mt-4 sm:mt-0 bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 w-full sm:w-auto transition cursor-pointer"
      >
        Remove
      </button>
    </div>
  ))}

  {cart.length > 0 && (
    <div className="mt-6 text-center sm:text-left">
      <h2 className="text-xl font-bold text-slate-900">Total: Rs {totalPrice}</h2>

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          onClick={() => {
            clearCart();
            setCart(getCart());
          }}
          className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 w-full sm:w-auto transition cursor-pointer"
        >
          Clear Cart
        </button>

        <button
          onClick={handleCheckout}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-xl w-full sm:w-auto transition cursor-pointer"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  )}
</div>


  );
}
