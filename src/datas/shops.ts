import { Brand } from "@/app/(pages)/shops/components/BrandCard";

export const allBrands: Brand[] = [
  {
    id: "mojo",
    name: "Mojo",
    imageUrl: "/mojo.jpg",
    rating: 4,
    category: "Beverages",
    offers: ["Free Delivery"],
  },
  {
    id: "pepsi",
    name: "Pepsi",
    imageUrl: "/pepsi.png",
    rating: 3,
    category: "Beverages",
    offers: ["Deals"],
  },
  {
    id: "magnum",
    name: "Magnum",
    imageUrl: "/magnum.png",
    rating: 4,
    category: "Frozen Foods",
    offers: ["Accepts Vouchers"],
  },
  {
    id: "orange",
    name: "Orange",
    imageUrl: "/orange.png",
    rating: 2,
    category: "Frozen Foods",
    offers: ["Accepts Vouchers"],
  },
  {
    id: "pran",
    name: "Pran",
    imageUrl: "/pran.png",
    rating: 3,
    category: "Frozen Foods",
    offers: ["Deals"],
  },
];
