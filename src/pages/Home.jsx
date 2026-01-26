import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";

const BASE_URL = "http://localhost:8000";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const [searchParams] = useSearchParams();
  // const search = searchParams.get("search")?.toLowerCase() || "";
const [searchParams] = useSearchParams();
const search = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Generate categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const normalizedSearch = search.toLowerCase().trim();

const filteredProducts = products.filter((product) => {
  const matchesSearch =
    !normalizedSearch ||
    product.name.toLowerCase().includes(normalizedSearch) ||
    product.category.toLowerCase().includes(normalizedSearch);

  const matchesCategory =
    selectedCategory === "All" || product.category === selectedCategory;

  return matchesSearch && matchesCategory;
});


  // Group products by category
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  // Loading or error state
  if (loading) return <p className="text-center py-20">Loading products...</p>;
  if (error) return <p className="text-center py-20 text-red-500">{error}</p>;

  return (

<div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-14" style={{backgroundColor:"#fdfdfd"}}>
 <div className="mt-30 md:mt-20">
      <Hero/>
    </div>
  {/* HEADER */}
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 mt-28 md:mt-16 md:mx-5">
   
   
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Products
      </h1>
      <p className="text-slate-500 mt-2">
        Explore our curated collection
      </p>
    </div>

    {/* DROPDOWN */}
<div className="relative w-full sm:w-64" ref={dropdownRef}>
  <button
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    className="
      w-full px-5 py-3 rounded-2xl 
      bg-white/90 backdrop-blur-sm 
      border border-white/30 shadow-lg 
      hover:shadow-2xl transition 
      flex justify-between items-center
    "
  >
    <span className="font-medium text-slate-800">
      {selectedCategory || "All Categories"}
    </span>
    <span
      className={`text-slate-400 transform transition-transform ${
        isDropdownOpen ? "rotate-180" : ""
      }`}
    >
      ▾
    </span>
  </button>

  {isDropdownOpen && (
    <ul className="absolute w-full mt-2 bg-white/95 rounded-2xl shadow-2xl border border-white/30 overflow-hidden z-20">
      {categories.map((cat) => (
        <li
          key={cat}
          className="
            px-5 py-3 cursor-pointer 
            text-slate-800 font-medium 
            hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 
            hover:text-white transition-all
          "
          onClick={() => {
            setSelectedCategory(cat);
            setIsDropdownOpen(false);
          }}
        >
          {cat}
        </li>
      ))}
    </ul>
  )}
</div>

  </div>

  {/* EMPTY */}
  {filteredProducts.length === 0 && (
    <div className="py-24 text-center text-slate-500 text-lg">
      No products found 😔
    </div>
  )}

  {/* PRODUCTS */}
  {Object.entries(groupedProducts).map(([category, items]) => (
    <div key={category} className="mb-24 md:mx-5">

      {/* CATEGORY */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          {category}
        </h2>
        <div className="mt-2 w-14 h-1 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  ))}
</div>


  );
}

export default Home;
