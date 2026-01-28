
import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const BASE_URL = import.meta.env.VITE_API_URL;



const PasswordPage = () => {

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const location = useLocation();

  // Extract the token from URL
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  console.log("Token from URL:", token);

  const validate = () => {
    
    const newErrors = {};

    if (!newPassword)
      newErrors.newPassword = "New password is required";
    else if (newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters";

    if (newPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleReset = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  navigate("/login")

  try {
    const response = await fetch(`${BASE_URL}/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token, new_password: newPassword }),

    });

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.detail || "Failed to reset password");
      return;
    }

    
    toast.success(data.message || "Password reset successfully!");
    setErrors({});
    setNewPassword("");
    setConfirmPassword("");

  } catch (error) {
    toast.error("Something went wrong: " + error.message);
  }
};


  return (

    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4 md:p-6">
  <form
    onSubmit={handleReset}
    className="bg-white p-10 border border-gray-200 rounded-2xl shadow-lg w-full max-w-md"
  >
    {/* Heading */}
    <div className="text-center text-slate-900 font-extrabold text-2xl mb-10">
      <h1>Reset Password</h1>
    </div>

    {/* New Password */}
    <div className="mb-5 relative">
      <label className="block text-slate-700 font-bold mb-1">New Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Create New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="border border-gray-300 px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-9 text-blue-500 cursor-pointer"
      >
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
      {errors.newPassword && (
        <p className="text-red-600 mt-1 text-sm">{errors.newPassword}</p>
      )}
    </div>

    {/* Confirm Password */}
    <div className="mb-5 relative">
      <label className="block text-slate-700 font-bold mb-1">Confirm Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="border border-gray-300 px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-9 text-blue-500 cursor-pointer"
      >
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
      {errors.confirmPassword && (
        <p className="text-red-600 mt-1 text-sm">{errors.confirmPassword}</p>
      )}
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full px-4 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 font-bold cursor-pointer transition"
    >
      Reset Password
    </button>
  </form>
</div>

  );
};

export default PasswordPage;
