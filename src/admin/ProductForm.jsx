import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function ProductForm({ product, onClose, onSaved }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name || "");
      setPrice(product.price || "");
      setCategory(product.category || "");
      setBrand(product.brand || "");
      setColor(product.color || "");
      setDescription(product.description || "");
      setStock(product.stock || "");
    }
  }, [product]);

  const saveProduct = async () => {
    if (!name || !price || !category ||!brand || !color || !description || !stock) {
      toast.error("All fields are required");
      return;
    }

    if (!product && !image) {
      toast.error("Image is required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    if (brand) formData.append("brand", brand);
    if (color) formData.append("color", color);
    if (description) formData.append("description", description);
    if (image) formData.append("image", image);
    if (stock) formData.append("stock", stock);

    const token = localStorage.getItem("token");
    const method = product ? "PUT" : "POST";
    const url = product
      ? `${BASE_URL}/products/${product.id}`
      : `${BASE_URL}/products`;

    try {
      setLoading(true);

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Failed to save product");
      }

      toast.success(product ? "Product updated" : "Product created");
      onSaved();
      onClose();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <div className="flex flex-col gap-3">
          <input
            placeholder="Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            placeholder="Category"
            className="border p-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            placeholder="Brand"
            className="border p-2 rounded"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <input
            placeholder="Color"
            className="border p-2 rounded"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

            <input
            placeholder="Stock"
            className="border p-2 rounded"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />


          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          {product && (
            <p className="text-xs text-gray-500">
              Leave image empty to keep current image
            </p>
          )} */}

          <div className="flex flex-col gap-2">
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md inline-block w-max transition">
            {image ? "Change Image" : "Upload Image"}
            <input
              type="file"
              accept="image/*"
              className="hidden cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>

          {image && (
            <p className="text-sm text-gray-700">
              Selected file: <span className="font-medium">{image.name}</span>
            </p>
          )}

          {product && !image && (
            <p className="text-xs text-gray-500">
              Leave image empty to keep current image
            </p>
          )}
        </div>

        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded cursor-pointer hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={saveProduct}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
