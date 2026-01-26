import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, User, Search, StoreIcon, Store } from "lucide-react";
import {
  Link,
  useNavigate,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

function Navbar() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const { totalItems, clearCart } = useCart();
  const isLoggedIn = !!localStorage.getItem("token");
  const inputRef = useRef(null);

  const hiddenPages = ["/login", "/signup", "/forget", "/password"];
  const hideElements = hiddenPages.includes(location.pathname);

  // Load search history
  const loadPreviousSearches = () => {
    const stored = localStorage.getItem("searchKeywords");
    return stored ? JSON.parse(stored) : [];
  };

  const [searchHistory, setSearchHistory] = useState(loadPreviousSearches());

  useEffect(() => setSearch(initialSearch), [initialSearch]);

  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }
    const filtered = searchHistory.filter((kw) =>
      kw.toLowerCase().includes(search.toLowerCase())
    );
    setSuggestions(filtered);
  }, [search, searchHistory]);

  // Close search & dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !e.target.closest(".dropdown-logout")
      ) {
        setIsFocused(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


useEffect(() => {
  if (location.pathname !== "/") return;

  const delay = setTimeout(() => {
    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search)}`, { replace: true });
    } else {
      navigate(`/`, { replace: true });
    }
  }, 300);

  return () => clearTimeout(delay);
}, [search, location.pathname, navigate]);



  const saveKeyword = (keyword) => {
    if (!keyword.trim()) return;
    const updated = [keyword, ...searchHistory.filter((k) => k !== keyword)];
    if (updated.length > 10) updated.pop();
    setSearchHistory(updated);
    localStorage.setItem("searchKeywords", JSON.stringify(updated));
  };



  const handleSuggestionClick = (value) => {
    setSearch(value);
    saveKeyword(value);
    navigate(`/?search=${value}`);
    setIsFocused(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

     clearCart(); 

    toast.success("Logged out successfully");
    
    setDropdownOpen(false);
    navigate("/");
  };


  return (
    <div>
      {/* NAVBAR */}
      <nav
        className="h-20 flex justify-between items-center
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white fixed z-50
        w-[100%] 
         px-4 sm:px-6
         opacity-90"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-[var(--color-yellow-400)]"
        >
         <span className="text-white">My</span>Shop
        </Link>

        {!hideElements && (
          <>
            {/* DESKTOP SEARCH */}
            <div className="relative w-1/3 hidden md:block" ref={inputRef}>
              <form
               
                className="flex items-center bg-white rounded-md overflow-hidden"
              >
               <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                placeholder="Search products..."
                className="flex-1 px-3 py-2 text-black outline-none"
              />

                <button className="px-3 text-gray-600 cursor-pointer">
                  <Search size={20} />
                </button>
              </form>

              {isFocused && suggestions.length > 0 && (
                <ul className="absolute w-full mt-1 bg-white text-black rounded-xl shadow-lg border z-10">
                  {suggestions.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => handleSuggestionClick(item)}
                      className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-3">


              <Link to="/my-orders" className="text-md hover:text-yellow-400 relative group">
              <Store size={30} />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-1 py-1 rounded opacity-0 group-hover:opacity-100">
                My Orders
                </span>
              </Link>

              
              {/* CART */}
              <Link to="/cart" className="relative group hover:text-yellow-400">
                <ShoppingCart size={30} />
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                  Cart
                </span>

                {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                  {totalItems}
                </span>
              )}
              </Link>


              {/* LOGIN / LOGOUT */}
              {!isLoggedIn ? (
                <Link to="/login" className="relative group">
                  <User size={30} />
                  <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                    Login
                  </span>
                </Link>
              ) : (
                <>
                  {/* DESKTOP DROPDOWN */}
                  <div className="relative hidden md:block dropdown-logout">
                    <button
                      onClick={() => setDropdownOpen((p) => !p)}
                    >
                      <User size={30} className="text-red-400" />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border z-50">
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-2 text-left text-gray-800 hover:bg-red-500 hover:text-white rounded-lg cursor-pointer"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>

                  {/* MOBILE DIRECT LOGOUT */}
                  <button
                    onClick={handleLogout}
                    className="md:hidden relative group"
                  >
                    <User size={30} className="text-red-400" />
                    <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
                      Logout
                    </span>
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </nav>

      {/* MOBILE SEARCH */}
      {!hideElements && (
        <div
          className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] z-50"
          ref={inputRef}
        >
          <form
           
            className="bg-white px-3 py-2 rounded-xl shadow-lg relative mt-2">
           <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search products..."
            className="w-full px-3 py-2 text-gray-800 outline-none"
          />

            <button className="absolute right-2 top-4 cursor-pointer">
              <Search size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Navbar;
