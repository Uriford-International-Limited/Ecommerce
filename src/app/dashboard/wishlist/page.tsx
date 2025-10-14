import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const productsData = [
  {
    id: "INV001",
    name: "Order 1",
    status: "Available",
  },
  {
    id: "INV002",
    name: "Order 2",
    status: "Out of Stock",
  },
  {
    id: "INV003",
    name: "Order 3",
    status: "Available",
  },
];

const tabs = ["all", "available", "out of stock"];

const Wishlist = () => {
  const getOrdersByStatus = (status: string) => {
    if (status === "all") return productsData;
    return productsData.filter(
      (product) => product.status.toLowerCase() === status
    );
  };

  return (
    <div className="container">
      <div>
        <Image
          src="/dashboard_banner.svg"
          width={800}
          height={500}
          alt="Picture of the author"
          className="mx-auto w-full rounded-lg"
        />
      </div>
      <h1 className="py-9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit rem
        eaque. Hic exercitationem odio eaque animi architecto doloribus, sit
        unde deserunt nemo, quis quia. Quas accusantium molestias aspernatur ab.
      </h1>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex rounded-none space-x-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="relative px-4 py-2 lg:text-[20px] font-medium
          text-muted-foreground
          hover:text-muted
          after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0
          after:bg-primary after:transition-all after:duration-300 after:ease-out
          data-[state=active]:text-muted
          data-[state=active]:after:left-0
          data-[state=active]:after:w-full"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab} className="w-full">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>S No.</TableHead>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getOrdersByStatus(tab).map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell
                      className={`font-medium ${
                        product.status.toLowerCase() === "available"
                          ? "text-chart-2"
                          : product.status.toLowerCase() === "out of stock"
                          ? "text-destructive"
                          : ""
                      }`}
                    >
                      {product.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Wishlist;
