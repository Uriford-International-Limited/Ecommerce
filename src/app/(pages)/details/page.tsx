import React from "react";
import Image from "next/image";
import {
  Star,
  Heart,
  Share2,
  Repeat,
  ShoppingCart,
  Zap,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import Counter from "../../../components/ui/Counter";

const ProductDetailsPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side */}
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-red-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm">
              56%
            </span>
            <span className="bg-green-500 text-white px-4 py-1 rounded-full flex items-center gap-1 text-xs sm:text-sm">
              <span>Organic</span>
              <span>🌿</span>
            </span>
          </div>

          {/* Product Image */}
          <div className="w-full h-[250px] sm:h-[400px] mb-6 relative">
            <Image
              src="/banana.png"
              width={500}
              height={500}
              alt="Marketside Fresh Organic Bananas, Bunch"
              className="object-contain rounded-lg size-full"
              priority
            />
          </div>
        </div>

        {/* Right side Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            Marketside Fresh Organic Bananas, Bunch
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
              {[...Array(2)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 text-gray-300" />
              ))}
            </div>

            <span className="bg-gray-100 text-muted-foreground font-semibold text-xs px-2 py-1 rounded">3.00
            </span>
            <span className="text-sm text-gray-600">2</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">SKU: E7F8G9H0</span>
          </div>

          <hr className="border-gray-200 my-2" />

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora
            torquent. Vivamus adipiscing nisl ut dolor dignissim semper.
          </p>

          {/* Price */}
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
            <span className="text-red-600 font-bold text-xl sm:text-2xl">
              $0.89
            </span>
            <span className="text-gray-700 line-through font-semibold">$1.99</span>
          </div>

          {/* WhatsApp Button */}
          <Button className="bg-green-700 hover:bg-green-800 w-full sm:w-fit mt-2 text-xs sm:text-sm">
            Order on WhatsApp
          </Button>

          <span className="bg-yellow-50 text-orange-500 px-4 py-1 rounded-md w-fit text-xs sm:text-sm mt-2 inline-block">
            Special Offer: 83 76 5 :77 Remains until the end of the year
          </span>

          {/* Quantity Cart and Buy Now */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Counter />
            <Button className="bg-green-700 hover:bg-green-800 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </Button>

            <Button className="bg-black hover:bg-black/80 flex items-center gap-2 text-xs sm:text-sm w-full sm:w-auto">
              <Zap className="w-4 h-4" /> Buy Now
            </Button>
          </div>

          {/* Payment and Warranty */}
          <div className="border border-gray-300 rounded p-4 mt-4 text-muted-foreground text-sm space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
              <CreditCard className="w-5 h-5 text-gray-500 mt-0.5" />
              <p>
                <strong>Payment:</strong> Payment upon receipt of goods, Payment
                by card in the department, Google Pay, Online card, -5%
                discount in case of payment
              </p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-500 mt-0.5" />
              <p>
                <strong>Warranty:</strong> The Consumer Protection Act does not
                provide for the return of this product of proper quality.
              </p>
            </div>
          </div>

          {/* Wishlist, Share, Compare */}
          <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-gray-800">
            <Button variant="ghost" className="flex items-center gap-1">
              <Heart className="w-4 h-4" /> Add to wishlist
            </Button>
            <Button variant="ghost" className="flex items-center gap-1">
              <Share2 className="w-4 h-4" /> Share this product
            </Button>
            <Button variant="ghost" className="flex items-center gap-1">
              <Repeat className="w-4 h-4" /> Compare
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <div className="flex flex-wrap gap-6 border-b border-gray-200 pb-2 text-gray-700 font-medium">
          <Button variant="ghost" className="hover:text-black text-xs sm:text-sm">
            Description
          </Button>
          <Button variant="ghost" className="hover:text-black text-xs sm:text-sm">
            Reviews (2)
          </Button>
        </div>

        <div className="mt-4 text-muted-foreground text-sm sm:text-base md:text-base leading-relaxed space-y-3">
          <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
            vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
            viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
            iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
            nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc
            tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
            Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>

          <p>
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
            auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim
            viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus
            sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit
            amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur
            laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim
            ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
            orci convallis quam, sit amet consequat nulla felis pharetra lacus.
            Duis semper erat mauris, sed egestas purus commodo vel.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
