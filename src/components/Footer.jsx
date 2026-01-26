import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";




function Footer() {

      const location = useLocation();

  // List of routes where footer should be hidden
  const hideFooterRoutes = ["/login", "/signup", "/forget", "/password"];

  if (hideFooterRoutes.includes(location.pathname)) {
    return null; 
  }
  
  return (
<footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Logo + About */}
    <div className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-yellow-400)]">
        <span className="text-white">My</span>Shop
      </h2>
      <p className="text-white/90 text-sm sm:text-base">
        Your one-stop online shop for the latest trends, electronics, and essentials. Fast delivery and amazing deals await you!
      </p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-yellow-300 transition">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-yellow-300 transition">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:text-yellow-300 transition">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-yellow-300 transition">
          <Linkedin size={20} />
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="md:col-span-1">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm sm:text-base">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link 
          // to="/products" 
          className="hover:text-yellow-300 transition">
            Products
          </Link>
        </li>
        <li>
          <Link 
          // to="/offers" 
          className="hover:text-yellow-300 transition">
            Offers
          </Link>
        </li>
        <li>
          <Link 
          // to="/contact" 
          className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link 
          // to="/about" 
          className="hover:text-yellow-300 transition">
            About Us
          </Link>
        </li>
      </ul>
    </div>

    {/* Newsletter */}
    <div className="md:col-span-1">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Subscribe to our Newsletter</h3>
      <p className="text-white/90 mb-4 text-sm sm:text-base">
        Get updates on the latest products, deals, and offers.
      </p>
<form className="flex flex-col sm:flex-row sm:flex-wrap gap-2 w-full">
  <input
    type="email"
    placeholder="Enter your email"
    className="
      flex-1 min-w-0
      px-5 py-3 
      rounded-lg 
      text-black 
      outline-none 
      border-2 border-white/80 
      focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 
      shadow-lg 
      placeholder-white/70 
      bg-white/10
      text-sm sm:text-base
      transition
    "
  />
  <button
    type="submit"
    className="
      w-full sm:w-auto 
      px-6 py-3 
      bg-yellow-400 
      hover:bg-yellow-500 
      text-black 
      font-semibold 
      rounded-lg 
      shadow-lg 
      transition
      cursor-pointer
    "
  >
    Subscribe
  </button>
</form>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/20 mt-8 py-4 text-center text-white/80 text-sm sm:text-base">
    &copy; {new Date().getFullYear()} MyShop. All rights reserved.
  </div>
</footer>


  );
}

export default Footer;
