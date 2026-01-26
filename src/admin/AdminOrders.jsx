import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8000";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${BASE_URL}/admin/orders/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (

  <div className="p-6 max-w-7xl mx-auto mt-14">
  <h1 className="text-3xl font-bold mb-6 text-gray-800 ">Orders</h1>

  <div className="min-w-[700px] overflow-x-auto max-h-[60vh] overflow-y-auto bg-white rounded-xl shadow-lg border border-gray-200">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-200">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">User</th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Total</th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Status</th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Date</th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider">Action</th>

        </tr>
      </thead>

      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.id} className="hover:bg-gray-50 transition">
            <td className="px-6 py-4 whitespace-nowrap text-gray-900">{order.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-700">{order.user.username}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-semibold">Rs {order.total}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  order.status === "delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order.status.toUpperCase()}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-500">
              {new Date(order.createdAt).toLocaleDateString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => navigate(`/admin/detail/${order.id}`)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>





  );
}
