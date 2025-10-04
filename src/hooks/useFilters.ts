import { useState } from "react";

export type Filters = {
  categories: string[];
  rating: number | null;
  offers: string[];
  brandName: string;
};

export function useFilters(initial: Filters) {
  const [filters, setFilters] = useState<Filters>(initial);
  return { filters, setFilters };
}
