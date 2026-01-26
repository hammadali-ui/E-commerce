import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "./ProductForm";

const BASE_URL = "http://localhost:8000";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

 
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        navigate("/admin/login");
        return;
      }

      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("token");
        navigate("/admin/login");
        return;
      }

      fetchProducts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  
  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchProducts();
  }, []);

  
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto mt-14">
     
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Products
        </h2>

        <button
          onClick={() => {
            setSelectedProduct(null);
            setShowForm(true);
          }}
          className="bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition-all w-full md:w-auto cursor-pointer"
        >
          + Add Product
        </button>
      </div>

      
      <div className="overflow-x-auto rounded-lg shadow border max-h-[600px] overflow-y-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-blue-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="bg-white text-gray-700">
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-blue-50 transition-colors"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3">Rs {p.price}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setShowForm(true);
                    }}
                    className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PRODUCT FORM MODAL */}
      {showForm && (
        <ProductForm
          product={selectedProduct}
          onClose={() => setShowForm(false)}
          onSaved={fetchProducts}
        />
      )}
    </div>
  );
}
