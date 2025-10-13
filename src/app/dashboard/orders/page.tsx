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

const ordersData = [
  {
    id: "INV001",
    name: "Order 1",
    quantity: 2,
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "INV002",
    name: "Order 2",
    quantity: 1,
    method: "Paypal",
    status: "Cancelled",
  },
  {
    id: "INV003",
    name: "Order 3",
    quantity: 5,
    method: "Bank Transfer",
    status: "Completed",
  },
];

const tabs = ["all", "completed", "cancelled"];

const Orders = () => {
  const getOrdersByStatus = (status: string) => {
    if (status === "all") return ordersData;
    return ordersData.filter((order) => order.status.toLowerCase() === status);
  };

  return (
    <div className="container">
      <div>
        <Image
          src="/dashboard_banner.svg"
          width={800}
          height={200}
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
                  <TableHead>Order ID</TableHead>
                  <TableHead>Order Name</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {getOrdersByStatus(tab).map((order, index) => (
                  <TableRow key={order.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.name}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell>{order.method}</TableCell>
                    <TableCell
                      className={`font-medium ${
                        order.status.toLowerCase() === "completed"
                          ? "text-chart-2"
                          : order.status.toLowerCase() === "cancelled"
                          ? "text-destructive"
                          : ""
                      }`}
                    >
                      {order.status}
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

export default Orders;
