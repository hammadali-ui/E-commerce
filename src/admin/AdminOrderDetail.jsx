import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function AdminOrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${BASE_URL}/admin/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setOrder(data));
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 mt-14">
  
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-extrabold text-gray-800">Order #{order.id}</h1>
    <span className={`px-3 py-1 rounded-full text-sm font-semibold 
      ${order.status === "delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
      {order.status.toUpperCase()}
    </span>

  </div>

  
  <div className="mb-6 space-y-1 text-gray-700">
    <p><span className="font-semibold">LoginUser:</span> {order.user.username}</p>
    <p><span className="font-semibold">Name:</span> {order.shipName}</p>
    <p><span className="font-semibold">Address:</span> {order.shipAddr}</p>
    <p><span className="font-semibold">Phone: </span>{order.shipPhone}</p>
    <p><span className="font-extrabold">Total:</span> Rs {order.total}</p>
  </div>

  
  <h2 className="text-lg font-semibold text-gray-800 mb-3">Items</h2>
  <div className="space-y-2">
    {order.items.map((item) => (
      <div
        key={item.id}
        className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 transition">
        <div className="font-medium text-gray-700">{item.product.name} × {item.quantity}</div>
        <div className="font-semibold text-gray-900">Rs {item.price * item.quantity}</div>
      </div>
    ))}
  </div>
</div>

  );
}
