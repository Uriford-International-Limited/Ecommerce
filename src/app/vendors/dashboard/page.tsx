"use client";

import Image from "next/image";

export default function VendorDashboard() {
  const vendor = {
    name: "ShopStore",
    banner: "/banner.png",
    totalSales: 320,
    totalOrders: 214,
    totalReviews: 52,
    rating: 4.8,
  };

  const recentOrders = [
    { id: 2001, customer: "David", total: 65, status: "Delivered" },
    { id: 2002, customer: "David", total: 120, status: "Pending" },
    { id: 2003, customer: "David", total: 90, status: "Shipped" },
  ];

  const lowStockProducts = [
    { id: 1, name: "Fresh Oranges", stock: 3 },
    { id: 2, name: "Organic Tomatoes", stock: 4 },
  ];

  const topProducts = [
    { id: 1, name: "Beverages", sales: 180, image: "/beverages.png" },
    { id: 2, name: "Fruits", sales: 160, image: "/fruits.png" },
    { id: 3, name: "Vegetables", sales: 140, image: "/vegetables.png" },
    { id: 4, name: "Dairy Products", sales: 110, image: "/dairyproducts.png" },
  ];

  return (
    <main className="min-h-screen p-4 sm:p-6 md:p-10 bg-gray-50">
      {/* Banner */}
      <div className="relative w-full h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-gray-200">
      <Image
  src="/banner.png"
  alt="Vendor Banner"
  fill
  priority
  sizes="(max-width: 1024px) 90vw, 80vw"
  className="object-cover"/>
        <div className="absolute bottom-4 left-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-black truncate max-w-xs sm:max-w-md">
            {vendor.name}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">
            ⭐ {vendor.rating} Rating
          </p>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { title: "Total Sales", value: `$${vendor.totalSales}` },
          { title: "Total Orders", value: vendor.totalOrders },
          { title: "Total Reviews", value: vendor.totalReviews },
          { title: "Average Rating", value: `${vendor.rating}⭐` },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 p-4 sm:p-6 rounded-xl shadow-sm flex flex-col justify-between hover:shadow-lg transition min-w-0">
            <h3 className="text-muted-foreground text-sm truncate">{stat.title}</h3>
            <p className="text-2xl sm:text-3xl font-bold text-primary mt-2 truncate">
              {stat.value}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <table className="w-full text-left table-auto sm:table-fixed">
            <thead>
              <tr className="text-muted-foreground text-sm border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0">
                  <td className="py-2 text-gray-700">{order.id}</td>
                  <td className="py-2 text-gray-700 truncate max-w-[100px] sm:max-w-[150px]">
                    {order.customer}
                  </td>
                  <td className="py-2 text-gray-700">${order.total}</td>
                  <td className="py-2 text-gray-700">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Low Stock Products</h2>
          <ul className="space-y-2">
            {lowStockProducts.map((product) => (
              <li
                key={product.id}
                className="text-gray-700 truncate max-w-xs sm:max-w-full"
              >
                {product.name} -{" "}
                <span className="font-medium">{product.stock} left</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl p-4 min-w-[150px] sm:min-w-[180px] shadow-sm hover:shadow-lg transition flex-shrink-0 snap-start">
              <div className="w-full h-32 relative mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover rounded"/>
              </div>
              <p className="text-gray-700 font-medium text-sm truncate">
                {product.name}
              </p>
              <p className="text-primary text-sm">{product.sales} sales</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
