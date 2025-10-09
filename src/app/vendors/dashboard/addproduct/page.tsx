"use client"; 

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

type ProductForm = {
  name: string;
  sku: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  discount: string;
  image: File | null;
  imagePreview: string;
};

const categories = [
  "Beverages",
  "Fruits",
  "Vegetables",
  "Dairy",
  "Snacks",
  "Electronics",
];

export default function AddProductPage() {
  const [form, setForm] = useState<ProductForm>({
    name: "",
    sku: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    discount: "",
    image: null,
    imagePreview: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]:
          name === "price" || name === "stock" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("New Product:", form);
    alert("Product added successfully!");
    setForm({
      name: "",
      sku: "",
      price: 0,
      stock: 0,
      description: "",
      category: "",
      discount: "",
      image: null,
      imagePreview: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        Add New Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 items-start"
      >
        {/* Product name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium mb-2">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="sku" className="text-gray-700 font-medium mb-2">
            SKU
          </label>
          <input
            id="sku"
            type="text"
            name="sku"
            value={form.sku}
            onChange={handleChange}
            placeholder="Enter SKU code"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 font-medium mb-2">
            Price ($)
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            min={0}
            required
            placeholder="0.00"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="stock" className="text-gray-700 font-medium mb-2">
            Stock Quantity
          </label>
          <input
            id="stock"
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            min={0}
            required
            placeholder="0"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-gray-700 font-medium mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition">
            <option value="" disabled>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

<div className="flex flex-col">
  <label htmlFor="discount" className="text-gray-700 font-medium mb-2">
    Discount
  </label>
  <input
    id="discount"
    type="text"
    name="discount"
    value={form.discount}
    onChange={handleChange}
    placeholder="%"
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition" />
</div>

        {/* Description  */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="description" className="text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-800 transition resize-none"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="image" className="text-gray-700 font-medium mb-2">
            Product Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-800 transition"/>
        </div>

        {form.imagePreview && (
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-700 font-medium mb-2">Image Preview:</p>
            <div className="relative w-full h-48 md:w-60 md:h-48 overflow-hidden rounded-lg border border-gray-300">
              <Image
                src={form.imagePreview}
                alt="Preview of product image"
                fill
                className="object-cover"
                unoptimized/>
            </div>
          </div>
        )}
        {/* Submit */}
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="bg-purple-800 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-900 transition">
            Add Product
          </button>
        </div>
      </form>
    </main>
  );
}
