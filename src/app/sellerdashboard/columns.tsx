import { ColumnDef } from "@tanstack/react-table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export type Product = {
  id: string;
  name: string; 
  stock: string;
  price: number;
  photo: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: "Select",
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected?.() || false}
        onChange={() => row.toggleSelected?.()}
      />
    ),
  },
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original.photo}
        width={50}
        height={50}
        alt={row.original.name}
        className="rounded-md"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <span
        className={
          row.getValue("stock") === "In Stock"
            ? "text-chart-2"
            : "text-destructive"
        }
      >
        {row.getValue("stock")}
      </span>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <>${row.getValue("price")}</>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <Popover>
          <PopoverTrigger className="cursor-pointer">...</PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => alert(`View ${product.name}`)}
                className="text-center"
              >
                View
              </button>
              <button
                onClick={() => alert(`Edit ${product.name}`)}
                className="text-center"
              >
                Edit
              </button>
              <button
                onClick={() => alert(`Delete ${product.name}`)}
                className="text-center text-destructive"
              >
                Delete
              </button>
            </div>
          </PopoverContent>
        </Popover>
      );
    },
  },
];
