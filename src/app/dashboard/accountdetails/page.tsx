import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const countries = ["Dhaka", "Edmonton", "California"];
const cities = ["Dhaka", "Edmonton", "California"];

const AccountDetails = () => {
  return (
    <div className="container">
      <h1 className="text-[18px] lg:text-2xl font-bold mb-4">
        Account Details
      </h1>
      {/* Banner */}
      <div className="grid grid-cols-2 gap-2 lg:gap-25 p-2 lg:p-4 my-3 lg:my-6 items-center justify-between bg-background shadow rounded-[7px]">
        <div className="flex items-center gap-2">
          <Image
            src="/user.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-full max-w-[65px] max-h-[65px] w-full h-full md:max-w-[80px] md:max-h-[80px] lg:max-w-[100px] lg:max-h-[100px]"
          />
          <h4 className="text-sm md:text-[16px] lg:text-lg">
            Upload a new photo
          </h4>
        </div>
        <div className="ms-auto">
          <Button className="me-3">Update</Button>
        </div>
      </div>
      {/* For Small Device */}
      <div className="w-full block lg:hidden">
        <h3 className="mt-7 flex border-b border-border px-3 py-2 font-medium lg:text-[20px] text-muted-foreground">
          Personal Information
        </h3>

        <div className="p-3">
          <div className="my-4 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input
                type="text"
                placeholder="First Name"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="email" className="mb-2">
                Email address
              </Label>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="number" className="mb-2">
                Phone Number
              </Label>
              <Input
                type="number"
                placeholder="Phone Number"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="country" className="mb-2">
                Country
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-input rounded-sm border border-border">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city" className="mb-2">
                City
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-input rounded-sm border border-border">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="address" className="mb-2">
                Address
              </Label>
              <Input
                type="text"
                placeholder="Address"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="postalCode" className="mb-2">
                Postal Code
              </Label>
              <Input
                type="number"
                placeholder="Postal Code"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-6 mt-4 lg:mt-7 items-center justify-between">
            <Button>Discard Changes</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
        <h3 className="mt-7 flex border-b border-border px-3 py-2 font-medium lg:text-[20px] text-muted-foreground">
          Password & Security
        </h3>
        <div className="mt-6">
          <div className="my-4">
            <Label htmlFor="current" className="mb-2">
              Current Password
            </Label>
            <Input
              type="password"
              placeholder="Current Password"
              className="bg-input w-full rounded-sm border border-border"
            />
          </div>
          <div className="my-6">
            <Label htmlFor="new" className="mb-2">
              New Password
            </Label>
            <Input
              type="password"
              placeholder="New Password"
              className="bg-input w-full rounded-sm border border-border"
            />
          </div>
          <div className="my-4">
            <Label htmlFor="confirm" className="mb-2">
              Confirm New Password
            </Label>
            <Input
              type="password"
              placeholder="Confirm New Password"
              className="bg-input w-full rounded-sm border border-border"
            />
          </div>
          <p className="text-[12px]">
            Cannot Remember your current password?
            <Link className="text-primary underline" href="/resetPassword">
              Reset your password
            </Link>
          </p>
          <div className="mt-4 lg:mt-7">
            <Button>Save Password</Button>
          </div>
        </div>
        <h3 className="mt-7 flex border-b border-border px-3 py-2 font-medium lg:text-[20px] text-muted-foreground">
          Payment Method
        </h3>
        <div>
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-4 mt-4 lg:mt-7">
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/bkash">
                <Image
                  src="/bkash.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/amazon">
                <Image
                  src="/amazon_pay.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/bkash">
                <Image
                  src="/bkash.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/amazon">
                <Image
                  src="/amazon_pay.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
          </div>
          <div className="mt-7 lg:mt-7">
            <Button>Save Method</Button>
          </div>
        </div>
      </div>
      {/* For Large Device */}
      <Tabs defaultValue="information" className="hidden lg:block w-full">
        <TabsList className="flex border-b border-border rounded-none lg:space-x-6">
          {[
            { value: "information", label: "Personal Information" },
            { value: "password", label: "Password & Security" },
            { value: "payment", label: "Payment Method" },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`
          relative px-4 py-2 lg:text-[20px] font-medium
          text-muted-foreground
          hover:text-muted
          after:absolute after:left-1/2 after:bottom-[-4px] after:h-[2px] after:w-0
          after:bg-primary after:transition-all after:duration-300 after:ease-out
          data-[state=active]:text-muted
          data-[state=active]:after:left-0
          data-[state=active]:after:w-full
        `}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="information" className="p-2 lg:p-5">
          <div className="my-4 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="firstName" className="mb-2">
                First Name
              </Label>
              <Input
                type="text"
                placeholder="First Name"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="mb-2">
                Last Name
              </Label>
              <Input
                type="text"
                placeholder="Last Name"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="email" className="mb-2">
                Email address
              </Label>
              <Input
                type="email"
                placeholder="Email address"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="number" className="mb-2">
                Phone Number
              </Label>
              <Input
                type="number"
                placeholder="Phone Number"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="country" className="mb-2">
                Country
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-input rounded-sm border border-border">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city" className="mb-2">
                City
              </Label>
              <Select>
                <SelectTrigger className="w-full bg-input rounded-sm border border-border">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="my-5 grid lg:grid-cols-2 gap-5 items-center justify-between">
            <div>
              <Label htmlFor="address" className="mb-2">
                Address
              </Label>
              <Input
                type="text"
                placeholder="Address"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div>
              <Label htmlFor="postalCode" className="mb-2">
                Postal Code
              </Label>
              <Input
                type="number"
                placeholder="Postal Code"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-6 mt-4 lg:mt-7 items-center justify-between">
            <Button>Discard Changes</Button>
            <Button>Save Changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="mt-6">
            <div className="my-4">
              <Label htmlFor="current" className="mb-2">
                Current Password
              </Label>
              <Input
                type="password"
                placeholder="Current Password"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div className="my-4">
              <Label htmlFor="new" className="mb-2">
                New Password
              </Label>
              <Input
                type="password"
                placeholder="New Password"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <div className="my-4">
              <Label htmlFor="confirm" className="mb-2">
                Confirm New Password
              </Label>
              <Input
                type="password"
                placeholder="Confirm New Password"
                className="bg-input w-full rounded-sm border border-border"
              />
            </div>
            <p>
              Cannot Remember your current password?
              <Link className="text-primary underline" href="/resetPassword">
                Reset your password
              </Link>
            </p>
            <div className="mt-4 lg:mt-7">
              <Button>Save Password</Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payment">
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 lg:gap-4 mt-4 lg:mt-7">
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/bkash">
                <Image
                  src="/bkash.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/amazon">
                <Image
                  src="/amazon_pay.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/bkash">
                <Image
                  src="/bkash.jpg"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
            <div className="bg-background shadow-lg lg:shadow max-w-[150px] w-full max-h-[75px] h-full lg:max-w-full lg:max-h-full">
              <Link href="/amazon">
                <Image
                  src="/amazon_pay.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                  className="w-full"
                />
              </Link>
            </div>
          </div>
          <div className="mt-7 lg:mt-7">
            <Button>Save Method</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountDetails;
