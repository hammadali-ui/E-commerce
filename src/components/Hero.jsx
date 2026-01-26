import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/hero2.avif"; // replace with your image

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden rounded-xl ">
      {/* Overlay for subtle effect */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between min-h-[70vh]">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:max-w-lg space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Discover Your Next <span className="text-yellow-300">Favorite Product</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Shop the latest trends, electronics, and essentials all in one place.
            Fast delivery and amazing deals await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <Link
              // to="/products"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg shadow-lg transition"
            >
              Shop Now
            </Link>
            <Link
              // to="/offers"
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition"
            >
              See Offers
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 lg:mt-0 lg:ml-10 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        {/* <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,176C672,171,768,149,864,138.7C960,128,1056,128,1152,138.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </section>
  );
}

export default Hero;
