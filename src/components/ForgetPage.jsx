import React, { useState } from 'react'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const ForgetPage = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();


  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      setError("Email is required")
      return false
    } 
    if (!emailRegex.test(email)) {
      setError("Invalid email format")
      return false
    }

    setError("")
    return true
  }

  const handleForget = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {
      const res = await fetch("http://localhost:8000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        toast.success(data.message || "Mail sent Successfully!")
      } else {
        toast.error(data.detail || "Failed to send mail")
      }
    } catch (error) {
      toast.error("Error: " + error.message)
    }
  }

  return (

    <div className='min-h-screen flex justify-center items-center bg-blue-50 p-4 md:p-6'>
  <form
    onSubmit={handleForget}
    className='relative bg-white p-10 border border-gray-200 rounded-2xl shadow-lg w-full max-w-md'
  >

    <button 
      onClick={() => navigate("/login")}
      className="absolute top-5 left-1 md:left-5 text-blue-600 hover:text-blue-800 transition-transform hover:-translate-y-0.5 cursor-pointer"
    >
      <ArrowLeft size={28} />
    </button>

    <div className='text-center text-slate-900 font-extrabold text-2xl mb-5 md:mb-10'>
      <h1>Forget Password?</h1>
    </div>

    <div className='mb-5'>
      <label className='block text-slate-700 font-bold mb-1'>Enter Your Email Address</label>
      <input
        type="email"
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='border border-gray-300 px-4 py-3 rounded-lg w-full mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400'
      />
      {error && <p className='text-red-600 mt-1 text-sm'>{error}</p>}
    </div>

    <button
      type="submit"
      className='w-full px-4 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 font-bold cursor-pointer transition'
    >
      Send Mail
    </button>
  </form>
</div>

  )
}

export default ForgetPage
