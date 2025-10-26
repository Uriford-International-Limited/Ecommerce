"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bell,
  ShoppingCart,
  CirclePlus,
  SearchIcon,
  Truck,
  ReceiptText,
  ChartNoAxesCombined,
  Navigation,
  CircleQuestionMark,
  IdCard,
  MoveDown,
  MoveUp,
  ShoppingBasket,
  Download,
  Package,
  ShoppingBag,
  Star,
  Copyright,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import {
  Bar,
  BarChart,
  XAxis,
  LabelList,
  Pie,
  PieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { columns, type Product } from "@/app/sellerdashboard/columns";
import { DataTable } from "@/app/sellerdashboard/data-table";

{
  /* Bar Chart Data */
}
const chartData = [
  { day: "Mon", desktop: 190, mobile: 80 },
  { day: "Tue", desktop: 155, mobile: 60 },
  { day: "Wed", desktop: 230, mobile: 120 },
  { day: "Thu", desktop: 155, mobile: 190 },
  { day: "Fri", desktop: 230, mobile: 130 },
  { day: "Sat", desktop: 125, mobile: 140 },
  { day: "Sun", desktop: 190, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

{
  /* Your Top Countries Table's Data */
}
const tableData = [
  {
    country: "United States",
    amount: "$1,671.10",
    img: "/usa.svg",
  },
  {
    country: "Venezuela",
    amount: "$1.064,75",
    img: "/venezuela.svg",
  },
  {
    country: "Salvador",
    amount: "$1.055,98",
    img: "/salvador.svg",
  },
  {
    country: "Russia",
    amount: "$1.042,00",
    img: "/russia.svg",
  },
];

{
  /* Line Chart Month Selection Data */
}
const monthlyData = {
  jan: [
    { date: "01 Jan", sales: 65, orders: 78 },
    { date: "02 Jan", sales: 60, orders: 75 },
    { date: "03 Jan", sales: 62, orders: 73 },
    { date: "04 Jan", sales: 68, orders: 78 },
    { date: "05 Jan", sales: 72, orders: 75 },
    { date: "06 Jan", sales: 65, orders: 73 },
    { date: "07 Jan", sales: 68, orders: 77 },
    { date: "08 Jan", sales: 67, orders: 74 },
    { date: "09 Jan", sales: 60, orders: 75 },
    { date: "10 Jan", sales: 61, orders: 77 },
    { date: "11 Jan", sales: 59, orders: 71 },
    { date: "12 Jan", sales: 64, orders: 75 },
  ],
  feb: [
    { date: "01 Feb", sales: 65, orders: 78 },
    { date: "02 Feb", sales: 60, orders: 75 },
    { date: "03 Feb", sales: 62, orders: 73 },
    { date: "04 Feb", sales: 68, orders: 78 },
    { date: "05 Feb", sales: 72, orders: 75 },
    { date: "06 Feb", sales: 65, orders: 73 },
    { date: "07 Feb", sales: 68, orders: 77 },
    { date: "08 Feb", sales: 67, orders: 74 },
    { date: "09 Feb", sales: 60, orders: 75 },
    { date: "10 Feb", sales: 61, orders: 77 },
    { date: "11 Feb", sales: 59, orders: 71 },
    { date: "12 Feb", sales: 64, orders: 75 },
  ],
  mar: [
    { date: "01 Mar", sales: 65, orders: 78 },
    { date: "02 Mar", sales: 60, orders: 75 },
    { date: "03 Mar", sales: 62, orders: 73 },
    { date: "04 Mar", sales: 68, orders: 78 },
    { date: "05 Mar", sales: 72, orders: 75 },
    { date: "06 Mar", sales: 65, orders: 73 },
    { date: "07 Mar", sales: 68, orders: 77 },
    { date: "08 Mar", sales: 67, orders: 74 },
    { date: "09 Mar", sales: 60, orders: 75 },
    { date: "10 Mar", sales: 61, orders: 77 },
    { date: "11 Mar", sales: 59, orders: 71 },
    { date: "12 Mar", sales: 64, orders: 75 },
  ],
  apr: [
    { date: "01 Apr", sales: 65, orders: 78 },
    { date: "02 Apr", sales: 60, orders: 75 },
    { date: "03 Apr", sales: 62, orders: 73 },
    { date: "04 Apr", sales: 68, orders: 78 },
    { date: "05 Apr", sales: 72, orders: 75 },
    { date: "06 Apr", sales: 65, orders: 73 },
    { date: "07 Apr", sales: 68, orders: 77 },
    { date: "08 Apr", sales: 67, orders: 74 },
    { date: "09 Apr", sales: 60, orders: 75 },
    { date: "10 Apr", sales: 61, orders: 77 },
    { date: "11 Apr", sales: 59, orders: 71 },
    { date: "12 Apr", sales: 64, orders: 75 },
  ],
  may: [
    { date: "01 May", sales: 65, orders: 78 },
    { date: "02 May", sales: 60, orders: 75 },
    { date: "03 May", sales: 62, orders: 73 },
    { date: "04 May", sales: 68, orders: 78 },
    { date: "05 May", sales: 72, orders: 75 },
    { date: "06 May", sales: 65, orders: 73 },
    { date: "07 May", sales: 68, orders: 77 },
    { date: "08 May", sales: 67, orders: 74 },
    { date: "09 May", sales: 60, orders: 75 },
    { date: "10 May", sales: 61, orders: 77 },
    { date: "11 May", sales: 59, orders: 71 },
    { date: "12 May", sales: 64, orders: 75 },
  ],
};

{
  /* Recent Products Data Table's Data */
}
async function getData(): Promise<Product[]> {
  return [
    {
      id: "1",
      name: "Cookie",
      stock: "Out of Stock",
      price: 10.5,
      photo: "/recent_products_1.svg",
    },
    {
      id: "2",
      name: "Glass",
      stock: "In Stock",
      price: 70.2,
      photo: "/recent_products_2.svg",
    },
    {
      id: "3",
      name: "Headphone",
      stock: "In Stock",
      price: 870.5,
      photo: "/recent_products_3.svg",
    },
    {
      id: "4",
      name: "Perfume",
      stock: "In Stock",
      price: 170.5,
      photo: "/recent_products_4.svg",
    },
  ];
}

const SellerDashboard = () => {
  {
    /* Line Chart Month Selection Data */
  }
  type MonthKey = keyof typeof monthlyData;
  const [selectedMonth, setSelectedMonth] = useState<MonthKey>("may");

  {
    /* Pie Chart Data */
  }
  const [socialData, setSocialData] = useState([
    { name: "Social Media", value: 48, change: +30.5, color: "#6f42c1" },
    { name: "Google", value: 30, change: -15.2, color: "#0DCAF0" },
    { name: "Email", value: 22, change: +1.8, color: "#0891B2" },
  ]);

  {
    /* Recent Products Data Table's Data */
  }
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <section className="bg-[#f5f4fe]">
      <div className="container pb-[96px]">
        {/* Upper Part */}
        <div className="py-[25px] grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4 items-center">
          {/* Overview */}
          <div className="lg:col-span-1 order-1 lg:order-1 text-[24px] lg:text-[28px] font-medium leading-[150%] text-muted">
            Overview
          </div>
          {/* Search Input Field */}
          <div className="lg:col-span-3 order-3 mt-3 lg:mt-0 me-4 lg:order-2">
            <div className="grid max-w-full w-full gap-6 bg-background shadow-none rounded-[9px]">
              <InputGroup>
                <InputGroupInput
                  className="text-muted"
                  placeholder="Search..."
                />
                <InputGroupAddon>
                  <SearchIcon className="text-muted" />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          {/* Notification, Cart, Add Button */}
          <div className="lg:col-span-1 order-2 lg:order-3">
            <div className="flex items-center justify-end gap-4 lg:gap-5">
              <div className="relative">
                <Bell />
                <div className="bg-primary text-[10px] lg:text-[11px] absolute top-[-50%] lg:top-[-70%] right-[-30%] lg:right-[-40%] text-background w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] leading-[150%] rounded-full flex items-center justify-center">
                  2
                </div>
              </div>
              <div className="relative">
                <ShoppingCart />
                <div className="bg-primary text-[10px] lg:text-[11px] absolute top-[-50%] lg:top-[-70%] right-[-30%] lg:right-[-40%] text-background w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] leading-[150%] rounded-full flex items-center justify-center">
                  3
                </div>
              </div>
              <Button className="text-[12px] lg:text-[15px] lg:p-5 font-normal">
                <CirclePlus
                  className="text-background"
                  size={30}
                  strokeWidth={1.5}
                />
                Add Product
              </Button>
            </div>
          </div>
        </div>
        {/* First Row */}
        <div className="grid lg:grid-cols-7 lg:gap-6 items-center my-[27px]">
          {/* Line Chart */}
          <div className="col-span-4 mb-5 lg:mb-0 overflow-hidden h-full max-w-full">
            <div className="flex items-center justify-between mb-3 px-3">
              <Label
                htmlFor="salesChart"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Sales Chart
                <CircleQuestionMark
                  size={15}
                  className="text-muted-foreground"
                />
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-primary font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>Sales Chart</PopoverContent>
              </Popover>
            </div>
            <div className="py-4 px-3 lg:p-[27px] bg-background rounded-[18px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-chart-2" size={30} />
                  <h3 className="text-[26px] lg:text-[36px] text-muted leading-[120%]">
                    $10.552,40
                  </h3>
                  <p className="text-[15px] flex items-center gap-1 text-chart-2 leading-[150%]">
                    <span>
                      <MoveUp size={14} />
                    </span>
                    8.30%
                  </p>
                </div>
                {/* Month Selection */}
                <Select
                  onValueChange={(value) => setSelectedMonth(value as MonthKey)}
                >
                  <SelectTrigger className="w-[150px] lg:w-[180px]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jan">Jan</SelectItem>
                    <SelectItem value="feb">Feb</SelectItem>
                    <SelectItem value="mar">Mar</SelectItem>
                    <SelectItem value="apr">Apr</SelectItem>
                    <SelectItem value="may">May</SelectItem>
                    <SelectItem value="jun">Jun</SelectItem>
                    <SelectItem value="jul">Jul</SelectItem>
                    <SelectItem value="aug">Aug</SelectItem>
                    <SelectItem value="sep">Sep</SelectItem>
                    <SelectItem value="oct">Oct</SelectItem>
                    <SelectItem value="nov">Nov</SelectItem>
                    <SelectItem value="dec">Dec</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Main Line Chart Area */}
              <div className="h-[418px] pt-6 lg:pt-[45px] pb-4 lg:pb-[28px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData[selectedMonth]}>
                    <CartesianGrid
                      stroke="#eee"
                      strokeDasharray="0 0"
                      vertical={false}
                    />
                    <XAxis dataKey="date" stroke="#ccc" fontSize={12} />
                    <YAxis
                      stroke="#ccc"
                      fontSize={12}
                      domain={[55, 80]}
                      tickCount={6}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#e7000b"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-[13px] h-[13px] leading-[13px] bg-destructive rounded-full"></div>
                  <p className="text-[15px] text-muted leading-[150%]">Sales</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[13px] h-[13px] leading-[13px] bg-chart-2 rounded-full"></div>
                  <p className="text-[15px] text-muted leading-[150%]">
                    Orders
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Pie Chart */}
          <div className="col-span-3">
            <div className="flex items-center justify-between mb-3 px-3">
              <Label
                htmlFor="channels"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Channels
                <CircleQuestionMark
                  size={15}
                  className="text-muted-foreground"
                />
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-primary font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>Channels</PopoverContent>
              </Popover>
            </div>
            <div className="p-[27px] bg-background rounded-[18px]">
              <div className="w-full flex flex-col items-center">
                <div className="w-full h-[260px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={socialData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={50}
                        outerRadius={100}
                        label={({ value }) => `${value}%`}
                      >
                        {socialData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex flex-col lg:flex-row w-full justify-around mt-[26px]">
                  {socialData.map((item, index) => (
                    <div
                      key={index}
                      className="flex lg:flex-col gap-2 items-center"
                    >
                      <h3 className="text-[24px] lg:text-[36px] text-muted leading-[120%]">
                        {item.value}%
                      </h3>
                      <span
                        className={`flex items-center gap-1 my-[9px] ext-[13px] leading-[149%] ${
                          item.change > 0 ? "text-chart-2" : "text-destructive"
                        }`}
                      >
                        {item.change > 0 ? (
                          <MoveUp size={14} />
                        ) : (
                          <MoveDown size={14} />
                        )}
                        {Math.abs(item.change)}%
                      </span>

                      <span className="flex items-center gap-2 text-[15px] text-muted-foreground leading-[150%]">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></span>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
                <Button className="text-primary mt-[50px] bg-background hover:bg-background border-[1.13px] border-primary">
                  <Download />
                  Download Report
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="grid lg:grid-cols-3 gap-6 items-center">
          {/* Orders */}
          <div className="col-span-1 p-[27px] bg-background rounded-[18px]">
            <div className="flex items-center justify-between mb-3">
              <Label
                htmlFor="salesChart"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                <ShoppingBasket />
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-primary font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>Sales Chart</PopoverContent>
              </Popover>
            </div>
            <h1 className="text-[23px] text-muted font-medium leading-[150%]">
              Orders
            </h1>
            <div className="my-3 grid grid-cols-3 items-center justify-between">
              <h3 className="pt-[16px] pb-[18px] text-[32px] lg:text-[36px] text-muted font-normal leading-[120%]">
                310
              </h3>
              {/* Line Chart */}
              <div className="col-span-2 h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData[selectedMonth]}>
                    <XAxis
                      stroke="#ccc"
                      tickCount={0}
                      tick={false}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#ccc"
                      domain={[55, 80]}
                      tickCount={0}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[14px] text-chart-2 font-normal leading-[150%]">
              Over last month 1.4% <MoveUp size={14} />
            </p>
          </div>
          {/* Sales */}
          <div className="col-span-1 p-[27px] bg-background rounded-[18px]">
            <div className="flex items-center justify-between mb-3">
              <Label
                htmlFor="salesChart"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                <IdCard />
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-primary font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>Sales Chart</PopoverContent>
              </Popover>
            </div>
            <h1 className="text-[23px] text-muted font-medium leading-[150%]">
              Sales
            </h1>
            <div className="mt-[16px] mb-[18px] grid grid-cols-3 items-center justify-between">
              <h3 className="col-span-1 text-[32px] lg:text-[36px] text-muted font-normal leading-[120%]">
                $3.759,00
              </h3>
              {/* Line Chart */}
              <div className="col-span-2 h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData[selectedMonth]}>
                    <XAxis
                      stroke="#ccc"
                      tickCount={0}
                      tick={false}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#ccc"
                      domain={[55, 80]}
                      tickCount={0}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="#e7000b"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <p className="flex items-center gap-1 text-[15px] text-destructive font-normal leading-[150%]">
              Over last month 2.4% <MoveDown size={14} />
            </p>
          </div>
          {/* Recent Reviews */}
          <div className="col-span-1 p-[27px] bg-background rounded-[18px]">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="recentReviews"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Recent Reviews
              </Label>
              <Link
                href="/"
                className="text-[15px] text-primary font-normal leading-[150%]"
              >
                View All
              </Link>
            </div>
            <div className="flex items-center gap-4 text-[19px] mt-[27px] mb-[18px] text-muted font-medium leading-[150%]">
              <Image
                src="/recent_reviews_profile.svg"
                width={54}
                height={54}
                alt="Picture of the author"
                className="w-[48px] h-[48px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] rounded-full"
              />
              <div>
                <h4>Johnath Siddeley</h4>
                <div className=" flex items-center justify-center gap-2 my-1">
                  <div className="flex items-center gap-1">
                    <Star className="text-chart-4" fill="#ffb900" size={20} />
                    <Star className="text-chart-4" fill="#ffb900" size={20} />
                    <Star className="text-chart-4" fill="#ffb900" size={20} />
                    <Star className="text-chart-4" fill="#ffb900" size={20} />
                    <Star className="text-chart-4" fill="#ffb900" size={20} />
                  </div>
                  <p className="text-[15px] text-muted font-normal leading-[150%]">
                    (5)
                  </p>
                </div>
              </div>
            </div>
            <p className="text-[15px] text-muted font-normal leading-[150%]">
              Very nice glasses. I ordered for my friend.
            </p>
          </div>
        </div>
        {/* Third Row */}
        <div className="grid lg:grid-cols-3 gap-3 lg:gap-6 items-center my-[27px]">
          {/* Customer Rating */}
          <div className="col-span-1 overflow-hidden p-[27px] h-full bg-background rounded-[18px]">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="topCountries"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Your Top Countries
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-muted font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
            <div className="mt-[27px] text-center">
              <h3 className="text-[42px] lg:text-[45px] text-muted leading-[120%]">
                3.0
              </h3>
              <p className="text-[15px] mt-[38px] flex items-center justify-center gap-2 text-muted-foreground font-normal leading-[150%]">
                <span className="text-chart-2 flex items-center">
                  <MoveUp size={14} /> +35
                </span>
                Point from last month
              </p>
              <div className=" flex items-center justify-center gap-2 my-1">
                <div className="flex items-center gap-1">
                  <Star className="text-chart-4" fill="#ffb900" size={20} />
                  <Star className="text-chart-4" fill="#ffb900" size={20} />
                  <Star className="text-chart-4" fill="#ffb900" size={20} />
                  <Star
                    className="text-muted-foreground"
                    fill="#6b7280"
                    size={20}
                  />
                  <Star
                    className="text-muted-foreground"
                    fill="#6b7280"
                    size={20}
                  />
                </div>
                <p className="text-[15px] text-muted font-normal leading-[150%]">
                  (318)
                </p>
              </div>
              {/* Line Chart */}
              <div className="col-span-2 h-[150px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData[selectedMonth]}>
                    <XAxis
                      stroke="#ccc"
                      tickCount={0}
                      tick={false}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#ccc"
                      domain={[55, 80]}
                      tickCount={0}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <Button className="text-destructive mt-2 bg-background hover:bg-background border-[1.13px] border-destructive">
                <Download />
                Download Report
              </Button>
            </div>
          </div>
          {/* Products Sold */}
          <div className="col-span-1 overflow-hidden p-[27px] h-full bg-[#6f42c1bf] rounded-[18px] text-background text-center">
            <Package className="mx-auto" size={38} />
            <h3 className="pt-[18px] pb-2 text-[26px] lg:text-[32px] leading-[120%]">
              Products Sold
            </h3>
            <p className="text-[16px] lg:text-[19px] font-medium leading-[150%]">
              89 Sold
            </p>
            {/* Bar Chart */}
            <div className="mt-2">
              <ChartContainer config={chartConfig} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-background)"
                    radius={4}
                  >
                    <LabelList
                      position="top"
                      offset={3}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </div>
          {/* Your Top Countries  */}
          <div className="col-span-1 overflow-hidden">
            <div className="flex items-center justify-between mb-3 px-3">
              <Label
                htmlFor="topCountries"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Your Top Countries
                <CircleQuestionMark
                  size={15}
                  className="text-muted-foreground"
                />
              </Label>
              <Link
                href="/"
                className="text-[15px] text-primary font-normal leading-[150%]"
              >
                View All
              </Link>
            </div>
            <div className="p-[27px] bg-background rounded-[18px]">
              <Table>
                <TableBody>
                  {tableData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="flex items-center gap-3 text-[15px] text-muted font-normal leading-[150%] text-right">
                        <Image
                          src={item.img}
                          width={54}
                          height={54}
                          alt="Profile Image"
                          className="w-[48px] h-[48px] md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] rounded-full"
                        />
                        {item.country}
                      </TableCell>
                      <TableCell className="text-[15px] text-muted font-normal leading-[150%] text-right">
                        {item.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        {/* Last Row */}
        <div className="grid lg:grid-cols-7 gap-6 items-center mb-[27px]">
          {/* Activity Overview */}
          <div className="col-span-3">
            <Label
              htmlFor="topCountries"
              className="text-[21px] mb-3 text-muted font-medium leading-[150%] flex items-center"
            >
              Activity Overview
            </Label>
            <div className="grid grid-cols-2 gap-4 items-center">
              <Link href="/" className="p-[27px] bg-background rounded-[18px]">
                <Truck
                  className="w-[48px] h-[48px] text-primary mx-auto"
                  strokeWidth={2}
                />
                <h3 className="text-[19px] py-[18px] font-medium text-muted text-center leading-[150%]">
                  Delivered
                </h3>
                <p className="text-[15px] pb-[18px] text-muted-foreground text-center leading-[150%]">
                  15 New Packages
                </p>
                <Progress value={33} />
              </Link>
              <Link href="/" className="p-[27px] bg-background rounded-[18px]">
                <ReceiptText
                  className="w-[48px] h-[48px] text-chart-4 mx-auto"
                  strokeWidth={2}
                />
                <h3 className="text-[19px] py-[18px] font-medium text-muted text-center leading-[150%]">
                  Ordered
                </h3>
                <p className="text-[15px] pb-[18px] text-muted-foreground text-center leading-[150%]">
                  72 New Items
                </p>
                <Progress className="h-[5px] [&>div]:bg-chart-4" value={70} />
              </Link>
              <Link href="/" className="p-[27px] bg-background rounded-[18px]">
                <ChartNoAxesCombined
                  className="w-[48px] h-[48px] text-[#25C2E3] mx-auto"
                  strokeWidth={2}
                />
                <h3 className="text-[19px] py-[18px] font-medium text-muted text-center leading-[150%]">
                  Reported
                </h3>
                <p className="text-[15px] pb-[18px] text-muted-foreground text-center leading-[150%]">
                  50 Support New Cases
                </p>
                <Progress value={80} className="h-[5px] [&>div]:bg-[#25C2E3]" />
              </Link>
              <Link href="/" className="p-[27px] bg-background rounded-[18px]">
                <Navigation
                  className="w-[48px] h-[48px] text-chart-2 mx-auto"
                  strokeWidth={2}
                />
                <h3 className="text-[19px] py-[18px] font-medium text-muted text-center leading-[150%]">
                  Arrived
                </h3>
                <p className="text-[15px] pb-[18px] text-muted-foreground text-center leading-[150%]">
                  34 Upgraded Boxed
                </p>
                <Progress value={63} className="h-[5px] [&>div]:bg-chart-2" />
              </Link>
            </div>
          </div>
          {/* Recent Products */}
          <div className="col-span-4 overflow-hidden h-full">
            <div className="flex items-center justify-between mb-3 px-3">
              <Label
                htmlFor="topCountries"
                className="text-[21px] text-muted font-medium leading-[150%] flex items-center"
              >
                Your Top Countries
                <CircleQuestionMark
                  size={15}
                  className="text-muted-foreground"
                />
              </Label>
              <Popover>
                <PopoverTrigger className="text-[15px] text-muted font-normal leading-[150%]">
                  ...
                </PopoverTrigger>
                <PopoverContent>
                  Place content for the popover here.
                </PopoverContent>
              </Popover>
            </div>
            {/* Recent Products Data Table */}
            <div className="p-[27px] bg-background rounded-[18px]">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
        {/* Bottom Part */}
        <div className="grid lg:grid-cols-2 gap-5 items-center justify-between">
          <p className="text-[15px] flex items-center justify-start gap-1 text-muted font-normal leading-[150%]">
            <Copyright className="text-muted" size={14} /> 2025 ShopStore -
            <Link href="/" className="text-primary">
              BlackRise Themes
            </Link>
          </p>
          <ul className="flex items-center lg:justify-end gap-6">
            <li className="text-[15px] text-muted-foreground font-normal leading-[150%]">
              <Link href="/">Licenses</Link>
            </li>
            <li className="text-[15px] text-muted-foreground font-normal leading-[150%]">
              <Link href="/">Change Log</Link>
            </li>
            <li className="text-[15px] text-muted-foreground font-normal leading-[150%]">
              <Link href="/">Get Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SellerDashboard;
