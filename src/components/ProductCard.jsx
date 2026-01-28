import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { addToCart, getCart } from "../utils/cart";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export default function ProductCard({ product }) {
  //  const { setCart } = useCart(); // ✅ use context
  const { cart, setCart, increaseQty } = useCart();


    const handleAddToCart = () => {
    addToCart(product);       
    setCart(getCart());       
    toast.success("Added to cart 🛒");
  };
  return (

<div className="group bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

  {/* IMAGE */}
  <Link
    to={`/product/${product.id}`}
    className="block relative bg-slate-100/60"
  >
    <img
      src={
        product.image
          ? product.image.startsWith("http")
            ? product.image
            : `import.meta.env.VITE_API_URL/${product.image.replace(/^\/+/, "")}`
          : "/placeholder.png"
      }
      alt={product.name}
      className="w-full h-56 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
    />

    {/* glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
  </Link>

  {/* BODY */}
  <div className="p-6 space-y-5">

    {/* PRODUCT NAME */}
    <h2 className="text-lg font-semibold text-slate-900 truncate">
      {product.name}
    </h2>

    {/* PRICE + STOCK */}
    <div className="flex items-center justify-between gap-3">
      <p className="text-2xl font-extrabold text-indigo-600">
        Rs {product.price}
      </p>

      {product.stock > 0 ? (
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
          In Stock · {product.stock}
        </span>
      ) : (
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700">
          Out of Stock
        </span>
      )}
    </div>

    {/* ACTION ROW */}
    <div className="flex items-center justify-between pt-2">

      <Link
        to={`/product/${product.id}`}
        className="text-lg font-semibold text-indigo-600 hover:text-violet-600 transition"
      >
        View Details →
      </Link>

      <button
        onClick={handleAddToCart}
        disabled={
          product.stock === 0 ||
          (cart.find(item => item.id === product.id)?.quantity || 0) >= product.stock
        }
        className={`
          p-3 rounded-full text-white transition
          ${
            product.stock > 0 &&
            (cart.find(item => item.id === product.id)?.quantity || 0) < product.stock
              ? "bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 active:scale-95 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
      >
        <Plus size={20} />
      </button>

    </div>
  </div>
</div>




  );
}
