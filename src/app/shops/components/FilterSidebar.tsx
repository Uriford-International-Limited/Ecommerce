"use client";

import { Filters } from "@/hooks/useFilters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

type Props = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  categories: string[];
};

const FilterSidebar: React.FC<Props> = ({
  filters,
  setFilters,
  categories,
}) => {
  const resetFilters = () => {
    setFilters({
      categories: [],
      rating: null,
      offers: [],
      brandName: "",
    });
  };

  return (
    <aside className="w-full p-4 space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold pb-1 lg:pb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2 text-sm">
              <Checkbox
                checked={filters.categories.includes(cat)}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    categories: checked
                      ? [...prev.categories, cat]
                      : prev.categories.filter((c) => c !== cat),
                  }))
                }
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div>
        <h3 className="font-semibold pb-1 lg:pb-2">Ratings</h3>
        <Select
          value={filters.rating ? String(filters.rating) : "all"}
          onValueChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              rating: value === "all" ? null : Number(value),
            }))
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Ratings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="3">3+ Stars</SelectItem>
            <SelectItem value="2">2+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Offers */}
      <div>
        <h3 className="font-semibold pb-1 lg:pb-2">Offers</h3>
        <div className="space-y-2">
          {["Free Delivery", "Accepts Vouchers", "Deals"].map((offer) => (
            <label key={offer} className="flex items-center space-x-2 text-sm">
              <Checkbox
                checked={filters.offers.includes(offer)}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    offers: checked
                      ? [...prev.offers, offer]
                      : prev.offers.filter((o) => o !== offer),
                  }))
                }
              />
              <span>{offer}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Search */}
      <div>
        <h3 className="font-semibold pb-1 lg:pb-2">Search By Brand</h3>
        <Input
          type="text"
          placeholder="Search..."
          value={filters.brandName}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, brandName: e.target.value }))
          }
        />
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="mt-2 lg:mt-4 w-full bg-input hover:bg-border text-sm py-2 rounded"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
