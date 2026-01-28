import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addToCart, getCart, clearCart } from "../utils/cart";
import { toast } from "sonner";
import { useCart } from "../context/CartContext";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Cart context
  const { cart, setCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="mt-20 text-center">Loading...</p>;
  if (error) return <p className="mt-20 text-center text-red-500">{error}</p>;

  const handleAddToCart = () => {
    addToCart(product);          // ✅ update localStorage
    setCart(getCart());          // ✅ update context (IMMEDIATE)
    toast.success("Product added to cart");
    navigate("/cart");
  };

  const handleBuyNow = () => {
  const token = localStorage.getItem("token");

  // Clear previous cart
  clearCart();

  // Add current product
  addToCart(product);
  setCart(getCart());

  if (token) {
    toast.success("Proceeding to checkout");
    // navigate("/checkout");
        navigate("/checkout", {
      state: { from: "product", productId: product.id }
    });
  } else {
    toast.error("Please login to continue");
    navigate("/login", {
      state: { from: "checkout" }
    });
  }
};

const cartItem = cart?.find(item => item.id === product.id);
const cartQty = cartItem?.quantity || 0;

  return (

<div className="min-h-screen bg-blue-50 flex justify-center items-start p-4 md:p-10">
  {/* Back Button */}
  <div
    className="
      fixed top-20 left-4 md:left-6 mt-20 md:mt-4"
  >
    <button
      onClick={() => navigate("/")}
      className="text-blue-600 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg bg-white shadow hover:shadow-md transition cursor-pointer"
    >
      ← Back
    </button>
  </div>

  {/* Product Card */}
  <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 mt-50 md:mt-30">
    
    {/* IMAGE */}
    <div className="flex justify-center items-center">
    <img
  src={
    product.image
      ? product.image.startsWith("http")
        ? product.image
        : `http://localhost:8000/${product.image.replace(/^\/+/, "")}`
      : "/placeholder.png"
  }
  alt={product.name}
  className="w-full h-56 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
/>
    </div>

    {/* DETAILS */}
    <div className="flex flex-col gap-3">
      <span className="text-lg uppercase tracking-wide text-slate-500">
        {product.category}
      </span>

      <h1 className="text-3xl font-extrabold text-slate-900">
        {product.name}
      </h1>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
          Brand: {product.brand}
        </span>
        <span className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
          Color: {product.color}
        </span>


        <span
          className={`
            px-3 py-1 rounded-full font-semibold text-white
            ${product.stock > 0
              ? "bg-gradient-to-r from-green-400 via-green-500 to-green-600"
              : "bg-gradient-to-r from-red-400 via-red-500 to-red-600"
            }
          `}
        >
          {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
        </span>


      </div>

      <p className="text-slate-600 leading-relaxed mt-2">
        {product.description}
      </p>

      {/* Price + Actions */}
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-3xl font-bold text-blue-600">
          Rs {product.price}
        </p>

        <div className="flex gap-3">

        <button
          onClick={handleAddToCart}
          // disabled={product.stock === 0}
          disabled={product.stock === 0 || cartQty >= product.stock}
          className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95
            ${
              product.stock > 0 && cartQty < product.stock
                ? "bg-gradient-to-r from-green-500 via-green-600 to-green-500 hover:from-green-600 hover:via-green-700 hover:to-green-600 cursor-pointer text-white"
                : "bg-gray-400 cursor-not-allowed text-white"
            }`}
        >
          Add to Cart
        </button>

              <button
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105 active:scale-95
                  ${
                    product.stock > 0
                      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 cursor-pointer text-white"
                      : "bg-gray-400 cursor-not-allowed text-white"
                  }`}
              >
                Buy Now
              </button>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
