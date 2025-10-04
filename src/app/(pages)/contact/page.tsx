import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Button } from "../../../components/ui/button";

const ContactPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      {/* Headline */}
      <div className="text-center mb-12">
        <p className="text-sm text-gray-800 font-bold">Contact With Us</p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          You can ask us questions
        </h1>
        <p className="mt-3 text-gray-800 max-w-2xl mx-auto">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side*/}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-lg mb-2">Our Offices</h2>
            <p className="text-muted-foreground text-sm">
              On dekande mydurtad mora även om skurkstat. Semirade timaheten
              rena. Radiogen pasam inte loba även om prerade i garanterad
              traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att
              epiligt. Diliga tresk dira. Ens biov dijevis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-start gap-3 flex-1">
              <MapPin size={24} className="text-black mt-1" />
              <div className="flex flex-col">
                <span className="text-sm text-black">
                  United States
                </span>
                <span className="font-semibold text-black">
                  United States Office
                </span>
                <span className="text-gray-700 text-sm mt-1">
                  205 Middle Road, 2nd Floor, New York
                </span>
                <span className="font-bold text-black mt-1">
                  +02 1234 567 88
                </span>
                <a
                  href="mailto:info@example.com"
                  className="text-blue-600 text-sm mt-1 hover:underline">
                  info@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 flex-1">
              <MapPin size={24} className="text-black mt-1" />
              <div className="flex flex-col">
                <span className="text-sm text-black">Munich</span>
                <span className="font-semibold text-black">
                  Munich State Office
                </span>
                <span className="text-gray-700 text-sm mt-1">
                  205 Middle Road, 2nd Floor, Munich
                </span>
                <span className="font-bold text-black mt-1">+5 456 123 22</span>
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-600 text-sm mt-1 hover:underline">
                  contact@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <hr className="border-gray-300 mt-6" />
          <div className="flex items-center gap-1 mt-4">
            <span className="text-sm">Follow us:</span>
            <a href="#" aria-label="Facebook">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="Twitter">
              <Image
                src="/twitter1.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Right side*/}
        <div>
          <p className="text-muted-foreground mb-4">
            On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
            Radiogen pasam inte loba även om prerade i garanterad traditionell
            specialitet till bebel.
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-black mb-1">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"/>
              </div>
              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-black mb-1">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none "/>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-black mb-1"
              >
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                required
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-black mb-1"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={3}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
              />
            </div>

            <Button className="bg-purple-900 text-white rounded-lg w-fit px-6 py-2 mt-2">
              Send Message
            </Button>
          </form>
        </div>
      </div>

{/* Bottom Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4 md:px-0">
  {[
    {
      src: "/payment.png",
      title: "Payment only online",
      desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      src: "/sales.png",
      title: "New stocks and sales",
      desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      src: "/quality.png",
      title: "Quality assurance",
      desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
    {
      src: "/delivery.png",
      title: "Delivery from 1 hour",
      desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="flex items-center gap-4 text-left"
    >
      <div className="flex-shrink-0">
        <Image
          src={item.src}
          alt={item.title}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-black text-lg">{item.title}</h3>
        <p className="text-muted-foreground text-sm">{item.desc}</p>
      </div>
    </div>
  ))}
</div>
    </main>
  );
};

export default ContactPage;
