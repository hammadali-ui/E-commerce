import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { toast } from 'sonner'
import { Eye,EyeOff,ArrowLeft } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_URL;


const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword]= useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {}

    if (!username) newErrors.username = "Username is required"
    else if (username.length < 3) newErrors.username = "Username must be at least 3 characters"
    else if (username.length > 20) newErrors.username = "Username must be at most 20 characters"

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
    const res = await fetch(`${BASE_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("LOGIN RESPONSE:", data);

    if (!res.ok) {
      
      const msg = data.detail || data.error || "Login failed";
      toast.error(msg);
      return;
    }
    if (data.access_token) {
    localStorage.setItem("token", data.access_token);
  }


    toast.success(data.message || "Login successful");
    // navigate("/dashboard");
    navigate("/admin/products");
  } catch (error) {
    toast.error("Network error: " + error.message);
  }
};

  return (

    <div className='flex items-center justify-center min-h-screen bg-blue-100 p-4 md:p-6'> 
      <form onSubmit={loginUser} className='relative bg-white p-10 rounded-2xl border border-blue-300 w-full max-w-md'>

        <div className='mb-10 text-blue-800 font-extrabold text-center text-2xl'> 
          <h1>Log In</h1>
        </div>

        <div className='mb-5'>
          <label className='block text-[#0B3F71] font-bold mb-1'>Username</label>
          <input
            type="text"
            placeholder='Enter Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full border-1 border-blue-400 rounded-lg px-4 py-3 ml-2'
          />
          {errors.username && <p className='text-red-600 mt-1 text-sm'>{errors.username}</p>}
        </div>

        <div className='mb-5 relative'>
          <label className='block text-[#0B3F71] font-bold mb-1'>Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border-1 border-blue-400 rounded-lg px-4 py-3 ml-2'
          />
          <button type= "button" onClick={()=> setShowPassword(!showPassword)} className='absolute right-3 top-11 text-blue-600 cursor-pointer'>
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>
          {errors.password && <p className='text-red-600 mt-1 text-sm'>{errors.password}</p>}


        </div>

        <button
          type='submit'
          className='w-full text-white bg-[#0B3F71] py-2 rounded-lg font-bold hover:bg-blue-800 mb-4 mt-1 ml-1 cursor-pointer'>Log In</button>


        <br />
      </form>
    </div>
  )
}

export default LoginPage

