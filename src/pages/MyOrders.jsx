import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BASE_URL = "http://localhost:8000";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/orders/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Failed to load orders");

      setOrders(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-20">Loading orders...</p>;

  if (orders.length === 0)
    return (
      <div className="text-center mt-20">
        <h2 className="text-xl font-bold mt-20">No orders yet</h2>
        <p className="text-gray-500 mt-2">Start shopping to see orders here</p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6 md:mt-20 pt-40 md:pt-1">My Orders</h1>

      {orders.map(order => (
        <div
          key={order.id}
          className="bg-white shadow rounded-2xl p-6 mb-6"
        >
          <div className="flex justify-between mb-3">
            <span className="font-semibold">
              Order #{order.id}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(order.createdAt).toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Status:</span>
            <span className="font-semibold text-blue-600">
              {order.status}
            </span>
          </div>

          <div className="border-t pt-3">
            {order.items.map(item => (
              <div
                key={item.id}
                className="flex justify-between text-sm mb-2"
              >
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>Rs {item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>Rs {order.total}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
