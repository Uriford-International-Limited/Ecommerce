"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [form, setForm] = useState({
    storeName: "ShopStore",
    name: "David",
    email: "vendor@example.com",
    phone: "123-456-7810",
    address: " Main Street",
    location: "New York, USA",
    banner: "/banner.png",
  });

  const [preview, setPreview] = useState(form.banner);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "banner" && files && files[0]) {
      const url = URL.createObjectURL(files[0]);
      setPreview(url);
      setForm((prev) => ({ ...prev, banner: url }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Settings saved successfully!");
    console.log("Updated Settings:", form);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
        Settings
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
        <div>
          <label
            htmlFor="banner"
            className="block text-accent-foreground font-medium mb-2">
            Store Banner
          </label>
          <div className="mb-3 w-full h-40 sm:h-48 relative rounded-lg overflow-hidden border border-gray-300">
            <Image
              src={preview}
              alt="Store Banner"
              fill
              className="object-cover size-full"/>
          </div>
          <input
            type="file"
            name="banner"
            id="banner"
            accept="image/*"
            onChange={handleChange}
            className="block w-full text-accent-foreground mt-1"
            title="Upload store banner"/>
        </div>

        <div>
          <label
            htmlFor="storeName"
            className="block text-accent-foreground font-medium mb-2">
            Store Name
          </label>
          <input
            type="text"
            name="storeName"
            id="storeName"
            value={form.storeName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your store name"/>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-accent-foreground font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your name"/>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-accent-foreground font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your email"/>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-accent-foreground font-medium mb-2">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your phone number"/>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-accent-foreground font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your address"/>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-accent-foreground font-medium mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-ring"
            required
            placeholder="Enter your city or location"/>
        </div>
      <Button type="submit" className="w-full">
       Save Settings
     </Button>
      </form>
    </main>
  );
}
