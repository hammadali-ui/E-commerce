import React, { useState } from 'react'
import { Link,useNavigate, useLocation} from 'react-router-dom'
import { toast } from 'sonner'
import { Eye,EyeOff,ArrowLeft } from 'lucide-react'


const BASE_URL = import.meta.env.VITE_API_URL;


const LoginPage = () => {
  // const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword]= useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const location = useLocation();

  const redirectTo =
  location.state?.from === "checkout" ? "/checkout" : "/";


  const validate = () => {
    const newErrors = {}


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    if (!password) newErrors.password = "Password is required"
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  const loginUser = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  // navigate("/dashboard")
  

  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    if (!res.ok) {
      
      const msg = data.detail || data.error || "Login Failed";
      toast.error(msg);
      return;
    }

    //     // 🔥 IMPORTANT
    // localStorage.removeItem("cart_guest");
    // localStorage.removeItem("cart"); // safety

    if (data.access_token) {
    localStorage.setItem("token", data.access_token);
    
  }


    toast.success(data.message || "Login Successfull");
    // navigate("/checkout");
    navigate(redirectTo);
  } catch (error) {
    toast.error("Network error: " + error.message);
  }
};





  return (

<div className='flex items-center justify-center min-h-screen bg-blue-50 p-4 sm:p-6'> 
  <form onSubmit={loginUser} className='relative bg-white p-6 sm:p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-200'>
    
    <button 
      onClick={() => navigate("/")}
      type='button'
      className="absolute top-5 left-3 sm:left-5 text-blue-600 hover:text-blue-800 transition-transform hover:-translate-y-0.5 cursor-pointer"
    >
      <ArrowLeft size={28} />
    </button>

    <div className='mb-8 sm:mb-10 text-slate-900 font-extrabold text-center text-2xl'> 
      <h1>Log In</h1>
    </div>

    <div className='mb-5'>
      <label className='block text-slate-700 font-bold mb-1'>Email</label>
      <input
        type="text"
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email}</p>}
    </div>

    <div className='mb-5 relative'>
      <label className='block text-slate-700 font-bold mb-1'>Password</label>
      <input 
        type={showPassword ? "text" : "password"}
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      <button type="button" onClick={()=> setShowPassword(!showPassword)} className='absolute right-3 top-11 text-blue-500 cursor-pointer'>
        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
      </button>
      {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password}</p>}

      <Link to={"/forget"} className="block text-right text-blue-600 text-sm sm:text-base font-bold mt-2 hover:text-blue-800">
        Forget Password?
      </Link>
    </div>

    <button
      type='submit'
      className='w-full text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 rounded-xl font-bold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 mb-4 mt-1 cursor-pointer transition'
    >
      Log In
    </button>

    <Link to={"/signup"} className='block text-center text-slate-700 mt-2'>
      Don’t have an account? <span className='text-blue-600 font-bold hover:text-blue-800'>Sign up</span>
    </Link>
  </form>
</div>


  )
}

export default LoginPage
