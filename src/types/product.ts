export interface IProduct {
  _id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  off?: number;
  category?: "organic" | "cold" | "hot" | "premium";
  isAvailable: boolean;
}
