import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">

<CheckCircle size={80} className="text-green-600 mb-4" />
  <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Order Successful!</h1>

  <p className="text-slate-600 mb-4 px-2 text-center">
    We’ve sent a confirmation email with your order details.
  </p>

  <Link
    to="/"
    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
    Continue Shopping
  </Link>
</div>

  );
}
