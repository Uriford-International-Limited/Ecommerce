import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Signup = () => {
  return (
    <div className="container min-h-screen">
      <div className="flex w-full max-w-[450px] mx-auto py-[60px] md:py-[80px] lg:py-[106px] flex-col gap-6">
        <Tabs defaultValue="login">
          <TabsList className="flex justify-center mx-auto w-full max-w-[70%]">
            <TabsTrigger
              value="login"
              className="font-semibold text-[22px] lg:text-[28px] leading-[150%] tracking-[-0.01em]"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="font-semibold text-[22px] lg:text-[28px] leading-[150%] tracking-[-0.01em]"
            >
              Register
            </TabsTrigger>
          </TabsList>
          {/* LOGIN */}
          <TabsContent value="login">
            <p className="pt-4 lg:pt-8 text-center text-[13px] leading-[150%] tracking-[-0.02em]">
              If you have an account, sign in with your username or email
              address.
            </p>
            <div className="grid gap-2 my-[9px] lg:my-[17px]">
              <Label htmlFor="tabs-demo-username">
                Username or email address *
              </Label>
              <Input id="tabs-demo-username" type="text" />
            </div>
            <div className="grid gap-2 mb-[9px] lg:mb-[17px]">
              <Label htmlFor="tabs-demo-password">Password *</Label>
              <Input id="tabs-demo-password" type="password" />
            </div>
            <div className="mb-3 lg:mb-[22px] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Remember me</Label>
              </div>
              <Link
                href="/resetPass"
                className="text-[13px] leading-[150%] tracking-[-0.02em] text-[#1d4ed8]"
              >
                Lost your password?
              </Link>
            </div>
            <Button className="w-full lg:py-5">Log in</Button>
          </TabsContent>
          {/* REGISTER */}
          <TabsContent value="register">
            <p className="pt-4 lg:pt-8 text-center text-[13px] leading-[150%] tracking-[-0.02em]">
              There are many advantages to creating an account: the payment
              process is faster, shipment tracking is possible and much more.
            </p>
            <div className="grid gap-2 my-[9px] lg:my-[17px]">
              <Label htmlFor="tabs-demo-username">Username *</Label>
              <Input id="tabs-demo-username" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tabs-demo-email">Email address *</Label>
              <Input id="tabs-demo-email" type="email" />
            </div>
            <div className="grid gap-2 my-[9px] lg:my-[17px]">
              <Label htmlFor="tabs-demo-password">Password *</Label>
              <Input id="tabs-demo-password" type="password" />
            </div>
            <div className="mb-2 lg:my-[16px]">
              <RadioGroup defaultValue="customer">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer" id="customer" />
                  <Label htmlFor="customer"> I am a customer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vendor" id="vendor" />
                  <Label htmlFor="vendor"> I am a vendor</Label>
                </div>
              </RadioGroup>
            </div>
            <p className="pb-4 lg:pb-[35px] text-[13px] leading-[150%] tracking-[-0.02em] text-accent-foreground">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link href="/policy" className="text-primary">
                privacy policy.
              </Link>
            </p>
            <Button className="w-full lg:py-5">Register</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Signup;
