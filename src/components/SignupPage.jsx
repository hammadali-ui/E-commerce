


import React, { useState } from "react";
import { toast } from "sonner";
import { Eye , EyeOff } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;


const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate= useNavigate();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!username) newErrors.username = "Username is required";
    else if (username.length < 3) newErrors.username = "Username must be at least 3 characters";
    else if (username.length > 20) newErrors.username = "Username must be at most 20 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

      if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const SignupUser = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    // navigate("/login");

    try {
      const res = await fetch(`${BASE_URL}/signup`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message); 
        setErrors({});
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        toast.error(data.detail || "Signup Failed"); 
      }
    } catch (error) {
      toast.error("Signup Failed: " + error.message); 
    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 md:p-6">
  <form onSubmit={SignupUser} className="bg-white rounded-2xl p-10 border border-gray-200 shadow-lg w-full max-w-md">
    <h1 className="text-center text-2xl font-extrabold text-slate-900 mb-8">Sign Up</h1>

    <div className="mb-5">
      <label className="block text-slate-700 font-semibold mb-1">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errors.username && <p className="text-red-600 mt-1 text-sm">{errors.username}</p>}
    </div>

    <div className="mb-5">
      <label className="block text-slate-700 font-semibold mb-1">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {errors.email && <p className="text-red-600 mt-1 text-sm">{errors.email}</p>}
    </div>

    <div className="mb-5 relative">
      <label className="block text-slate-700 font-bold mb-1">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Create Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-11 text-blue-500 cursor-pointer">
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
      {errors.password && <p className="text-red-600 mt-1 text-sm">{errors.password}</p>}
    </div>

    <div className="mb-5 relative">
      <label className="block text-slate-700 font-bold mb-1">Confirm Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border border-gray-300 px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-9 text-blue-500 cursor-pointer">
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
      {errors.confirmPassword && (
        <p className="text-red-600 mt-1 text-sm">{errors.confirmPassword}</p>
      )}
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-2 rounded-xl mb-5 cursor-pointer transition"
    >
      Sign Up
    </button>

    <Link to="/login" className="block text-center text-slate-700 mt-2">
      Already have an account? <span className="text-blue-600 font-extrabold hover:text-blue-800">Log In</span>
    </Link>
  </form>
</div>

  );
};

export default SignupPage;
