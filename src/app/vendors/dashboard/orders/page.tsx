"use client";

import { useState } from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

type Order = {
  id: number;
  customer: string;
  total: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1023, customer: "David", total: 150, status: "Pending", date: "2025-10-01" },
    { id: 1022, customer: "David", total: 220, status: "Shipped", date: "2025-09-29" },
    { id: 1021, customer: "David", total: 85, status: "Delivered", date: "2025-09-28" },
  ]);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-700";
      case "Shipped": return "bg-blue-100 text-blue-700";
      case "Delivered": return "bg-green-100 text-green-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center py-10 bg-white border border-gray-200 rounded-2xl">
          No orders found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[600px] sm:min-w-full w-full bg-white border border-gray-200 rounded-2xl shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Order ID</th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Customer</th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Total ($)</th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Status</th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Date</th>
                <th className="p-2 sm:p-4 text-left text-gray-700 font-medium text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                  <td className="p-2 sm:p-4 text-gray-800">{order.id}</td>
                  <td className="p-2 sm:p-4 text-gray-800">{order.customer}</td>
                  <td className="p-2 sm:p-4 text-gray-800">{order.total.toFixed(2)}</td>
                  <td className="p-2 sm:p-4">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4 text-gray-800">{order.date}</td>
                  <td className="p-2 sm:p-4 flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2">
                    <button className="flex items-center gap-1 text-xs sm:text-sm text-purple-600 hover:text-purple-800 transition">
                      <Eye className="w-4 h-4" /> View
                    </button>
                    {order.status !== "Delivered" && order.status !== "Cancelled" && (
                      <button className="flex items-center gap-1 text-xs sm:text-sm text-green-600 hover:text-green-800 transition">
                        <CheckCircle className="w-4 h-4" /> Mark Shipped
                      </button>
                    )}
                    {order.status !== "Cancelled" && (
                      <button className="flex items-center gap-1 text-xs sm:text-sm text-red-600 hover:text-red-800 transition">
                        <XCircle className="w-4 h-4" /> Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
