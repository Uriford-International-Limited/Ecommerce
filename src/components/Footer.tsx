import React from "react";
import Link from "next/link";
import OptionList from "@/components/ui/OptionList";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const icons = [
    {
      content: (
        <Facebook size={24} color="#1877f2" fill="#1877f2" strokeWidth={1} />
      ),
      href: "https://facebook.com",
    },
    {
      content: (
        <Image src="/twitter.png" width={24} height={24} alt="Twitter" />
      ),
      href: "https://twitter.com",
    },
    {
      content: (
        <Instagram size={24} className="text-destructive" strokeWidth={2} />
      ),
      href: "https://instagram.com",
    },
    {
      content: (
        <Linkedin size={24} color="#0077b5" fill="#0077b5" strokeWidth={1} />
      ),
      href: "https://linkedin.com",
    },
  ];
  return (
    <footer className="py-8 lg:py-[57px] bg-input">
      <div className="container">
        {/* Upper Part */}
        <div className="grid lg:grid-cols-2 items-center justify-between pb-7 lg:pb-[63px]">
          <div className="max-w-[400px] w-full">
            <h4 className="font-bold pb-1 lg:pb-2 text-lg lg:text-[22px] tracking-[-0.02em] text-muted">
              Join our newsletter for £10 offs
            </h4>
            <p className="text-sm tracking-[-0.02em] leading-[150%] text-muted-foreground">
              Register now to get latest updates on promotions & coupons.Don’t
              worry, we not spam!
            </p>
          </div>
          <div className="lg:ml-auto mt-7 lg:mt-0">
            <form className="flex items-center relative">
              <input
                type="email"
                name="user_email"
                className="text-[14px] lg:text-[15px] py-3 lg:py-[17px] pl-3 lg:pl-[17px] pr-3 lg:pr-[14%] inset-shadow-xs rounded-[9px] text-muted max-w-[473px] max-h-[54px] w-full h-full outline-0 border-[1.13px] border-border placeholder:text-inout bg-background leading-[150%]"
                placeholder="Your email address"
              />
              <Button className="absolute top-0 right-0 font-medium lg:font-bold text-[13px] lg:text-[15px] py-[2px] lg:py-[26.5px] px-[10px] lg:px-5 rounded-r-[9px] rounded-l-none leading-[300%] tracking-[-0.02em] text-center">
                SEND
              </Button>
            </form>
            <p className="pt-2 lg:pt-3 text-[12px] leading-[150%] tracking-[-0.03em] text-muted-foreground">
              By subscribing you agree to our
              <Link
                className="font-medium text-primary cursor-pointer ml-1"
                href="/"
              >
                Terms & Conditions and Privacy & Cookies Policy.
              </Link>
            </p>
          </div>
        </div>
        {/* Middle Part */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-9 py-7 lg:py-[57px] border-y-[1.13px] border-y-border">
          <div className="col-span-1 order-4 lg:order-1">
            <h4 className="pb-[11px] lg:pb-[22px] text-sm lg:text-[15px] font-semibold leading-[120%] tracking-[-0.02em] text-muted">
              Do You Need Help ?
            </h4>
            <p className="text-sm leading-[150%] tracking-[-0.02em] text-muted-foreground">
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
            </p>
            <div className="py-3 lg:py-[35px] flex items-center gap-3 lg:gap-[25px]">
              <PhoneCall size={26} color="#111827" />
              <div>
                <p className="text-[13px] leading-[150%] tracking-[-0.03em] text-muted-foreground">
                  Monday-Friday: 08am-9pm
                </p>
                <Link
                  className="text-sm lg:text-[15px] font-medium lg:font-semibold leading-[150%] tracking-[-0.05em] text-muted"
                  href="tel:0800300-353"
                >
                  0800300-353
                </Link>
              </div>
            </div>
            <div className="pb-3 lg:pb-[30px] flex items-center gap-3 lg:gap-[25px]">
              <Mail size={26} color="#111827" />
              <div>
                <p className="text-[13px] leading-[150%] tracking-[-0.03em] text-muted-foreground">
                  Need help with your order?
                </p>
                <Link
                  className="text-sm lg:text-[15px] font-medium lg:font-semibold leading-[150%] tracking-[-0.05em] text-muted"
                  href="mailto:info@example.com"
                >
                  info@example.com
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 order-1 lg:order-2">
            <h4 className="pb-2 lg:pb-4 text-sm lg:text-[15px] font-semibold leading-[120%] tracking-[-0.02em] text-muted">
              Make Money with Us
            </h4>
            <OptionList
              items={[
                { content: "Sell on Grogin", href: "/sell" },
                { content: "Sell Your Services on Grogin", href: "/sell" },
                { content: "Sell on Grogin Business", href: "/sell" },
                { content: "Sell Your Apps on Grogin", href: "/sell" },
                { content: "Become an Affilate", href: "/affilate" },
                { content: "Advertise Your Products", href: "/advertise" },
                { content: "Sell-Publish with Us", href: "/publish" },
                { content: "Become an Blowwe Vendor", href: "/vendor" },
              ]}
              className="leading-[150%] tracking-[-0.02em] text-muted-foreground"
            />
          </div>
          <div className="col-span-1 order-2 lg:order-3">
            <h4 className="pb-2 lg:pb-4 text-sm lg:text-[15px] font-semibold leading-[120%] tracking-[-0.02em] text-muted">
              Let Us Help You
            </h4>
            <OptionList
              items={[
                { content: "Accessibility Statement", href: "/accessibility" },
                { content: "Your Orders", href: "/orders" },
                { content: "Returns & Replacements", href: "/returns" },
                { content: "Shipping Rates & Policies", href: "/shipping" },
                { content: "Refund and Returns Policy", href: "/refund" },
                { content: "Privacy Policy", href: "/policy" },
                { content: "Terms and Conditions", href: "/terms" },
                { content: "Cookie Settings", href: "/cookie" },
                { content: "Help Center", href: "/help" },
              ]}
              className="leading-[150%] tracking-[-0.02em] text-muted-foreground"
            />
          </div>
          <div className="col-span-1 order-3 lg:order-4">
            <h4 className="pb-2 lg:pb-4 text-sm lg:text-[15px] font-semibold leading-[120%] tracking-[-0.02em] text-muted">
              Get to Know Us
            </h4>
            <OptionList
              items={[
                { content: "Careers for Grogin", href: "/careers" },
                { content: "About Grogin", href: "/about" },
                { content: "Inverstor Relations", href: "/investor" },
                { content: "Grogin Devices", href: "/devices" },
                { content: "Customer reviews", href: "/reviews" },
                { content: "Social Responsibility", href: "/reponsibility" },
                { content: "Store Locations", href: "/locations" },
              ]}
              className="leading-[150%] tracking-[-0.02em] text-muted-foreground"
            />
          </div>
          <div className="col-span-1 order-5">
            <h4 className="pb-[11px] lg:pb-[22px] text-sm lg:text-[15px] font-semibold leading-[120%] tracking-[-0.02em] text-muted">
              Download our app
            </h4>
            <div className="pb-[6px] lg:pb-[11px] flex items-center gap-2 lg:gap-[17px]">
              <Link href="/googlePlay">
                <Image
                  src="/google_play.png"
                  width={136}
                  height={44}
                  alt="Google Play"
                />
              </Link>
              <p className="text-[13px] font-medium leading-[150%] tracking-[-0.03em] text-muted-foreground">
                Download App Get -10% Discount
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-[17px]">
              <Link href="/appStore">
                <Image
                  src="/app_store.png"
                  width={136}
                  height={44}
                  alt="App Store"
                />
              </Link>
              <p className="text-[13px] font-medium leading-[150%] tracking-[-0.03em] text-muted-foreground">
                Download App Get -20% Discount
              </p>
            </div>
            <div className="pt-7 lg:pt-[56px] pb-2 lg:pb-[18px]">
              <p className="pb-[11px] text-[13px] tracking-[-0.03em] text-muted">
                Follow us on social media:
              </p>
              <OptionList
                items={icons}
                className="flex flex-row space-x-[6px] lg:space-x-[10px] space-y-0"
                itemClassName="flex justify-center w-[40px] lg:w-[40px] h-[40px] lg:h-[40px] lg:leading-[40px] rounded-[7px] bg-background shadow-md hover:shadow-lg transition"
              />
            </div>
          </div>
        </div>
        {/* Lower Part */}
        <div className="grid lg:grid-cols-2 items-center justify-between pt-7 lg:pt-[58px]">
          <div>
            <p className="pb-3 lg:pb-[25px] text-[13px] text-center lg:text-left font-medium leading-[150%] tracking-[-0.03em] text-muted-foreground">
              Copyright 2025 © Shopstore WooCommerce WordPress Theme. All right
              reserved. Powered by
              <Link
                className="font-semibold text-primary cursor-pointer ml-1"
                href="/blackRiseThemes"
              >
                BlackRise Themes.
              </Link>
            </p>
            <OptionList
              items={[
                {
                  content: (
                    <Image src="/visa.png" width={40} height={13} alt="Visa" />
                  ),
                  href: "/visa",
                },
                {
                  content: (
                    <Image
                      src="/master_card.png"
                      width={27}
                      height={16}
                      alt="Mastercard"
                    />
                  ),
                  href: "/mastercard",
                },
                {
                  content: (
                    <Image
                      src="/paypal.png"
                      width={59}
                      height={15}
                      alt="Paypal"
                    />
                  ),
                  href: "/paypal",
                },
                {
                  content: (
                    <Image
                      src="/skrill.png"
                      width={45}
                      height={15}
                      alt="Skrill"
                    />
                  ),
                  href: "/skrill",
                },
                {
                  content: (
                    <Image
                      src="/klarna.png"
                      width={71}
                      height={15}
                      alt="Klarna."
                    />
                  ),
                  href: "/klarna",
                },
              ]}
              className="flex flex-row gap-2 justify-center lg:justify-start my-3 lg:my-0"
            />
          </div>
          <div>
            <OptionList
              items={[
                { content: "Terms and Conditions", href: "/terms" },
                { content: "Privacy Policy", href: "/policy" },
                { content: "Order Tracking", href: "/tracking" },
              ]}
              className="text-[13px] flex flex-row gap-2 justify-center lg:justify-end underline leading-[150%] tracking-[-0.03em] text-muted"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
