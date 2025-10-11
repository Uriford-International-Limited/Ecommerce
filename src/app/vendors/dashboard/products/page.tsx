"use client";

import { useState } from "react";
import Image from "next/image";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Banana",
      price: 10,
      stock: 25,
      category: "Fruits",
      image: "/images/product1.png",
    },
    {
      id: 2,
      name: "Banana",
      price: 60,
      stock: 40,
      category: "Fruits & Vegetables",
      image: "/images/product2.png",
    },
    {
      id: 3,
      name: "Banana",
      price: 12,
      stock: 15,
      category: "Fruits",
      image: "/images/product3.png",
    },
  ]);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Products
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center py-20 bg-white border border-border rounded-2xl">
          No products found. Please add some products.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full sm:min-h-[420px] md:min-h-[450px]">
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority/>
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {product.name}
                </h2>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-1 sm:gap-0">
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    ${product.price.toFixed(2)}
                  </p>
                  <p
                    className={`text-sm sm:text-base font-medium ${
                      product.stock > 0 ? "text-green-600" : "text-red-600"
                    }`}>
                    {product.stock} in stock
                  </p>
                </div>

                <div className="flex gap-2 mt-auto flex-col sm:flex-row">
                  <Button
                    variant="default"
                    className="flex-1 flex items-center justify-center gap-1 text-sm sm:text-base">
                    <Edit className="size-4 sm:size-5" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1 flex items-center justify-center gap-1 text-sm sm:text-base"
                    onClick={() => handleDelete(product.id)}>
                    <Trash2 className="size-4 sm:size-5" />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
