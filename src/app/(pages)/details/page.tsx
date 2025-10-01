"use client";

import React, { useEffect, useState } from "react";
import { 
  Star, 
  Heart, 
  Share2, 
  Repeat, 
  ShoppingCart, 
  Zap, 
  CreditCard, 
  ShieldCheck 
} from "lucide-react";

const ProductDetailsPage: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) setHeaderHeight(header.clientHeight);
  }, []);

  return (
    <main
      className="container mx-auto px-4 py-8"
      style={{ paddingTop: `${headerHeight}px` }} >
    
      <nav className="text-gray-500 mb-4 text-sm" aria-label="breadcrumb">
        <ol className="flex flex-wrap gap-1 items-center">
          <li>Home</li>
          <li className="px-1">{">"}</li>
          <li>Fruits & Vegetables</li>
          <li className="px-1">{">"}</li>
          <li>Exotic Fruits & Veggies</li>
          <li className="px-1">{">"}</li>
          <li className="font-semibold text-gray-700">
            Marketside Fresh Organic Bananas, Bunch
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div>
          {/* Buttons left */}
          <div className="flex flex-col gap-2 mb-4">
            <button className="bg-red-700 text-white px-4 py-1 rounded-full w-fit">
              56%
            </button>
            <button className="bg-green-500 text-white px-4 py-1 rounded-full flex items-center gap-1 w-fit">
              <span>Organic</span>
              <span>🌿</span>
            </button>
          </div>

          {/* left Product image -remaining */}
          <div className="flex justify-center items-center bg-white-100 rounded-lg h-[400px] mb-6">
            <span className="text-gray-400">Product Image </span>
          </div>
        </div>

        {/* Right side Product Details */}
        <div className="flex flex-col gap-4">
        
          <h1 className="text-3xl font-bold leading-snug">
            Marketside Fresh Organic Bananas, Bunch
          </h1>

          <div className="flex items-center gap-3">
          
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
              {[...Array(2)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 text-gray-300" />
              ))}
            </div>

            {/* Ratings */}
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              3.00
            </span>
            <span className="text-sm text-gray-600">2 reviews</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">SKU: E7F8G9H0</span>
          </div>

          <hr className="border-gray-200 my-2" />

          {/* Short Description */}
          <p className="text-gray-700">
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora
            torquent. Vivamus adipiscing nisl ut dolor dignissim semper.
          </p>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-red-600 font-bold text-2xl">$0.89</span>
            <span className="text-gray-500 line-through">$1.99</span>
          </div>

          {/* WhatsApp Button */}
          <button className="bg-green-700 text-white px-5 py-2 rounded-md w-fit mt-2">
  Order on WhatsApp
</button>

          {/* Offer Button */}
          <button className="bg-yellow-50 text-orange-500 px-4 py-1 rounded-md w-fit text-sm">
  Special Offer: 83 76 5 :77 Remains until the end of the year
</button>

          {/* Quantity and Cart Buttons */}
          <div className="flex items-center gap-2 mt-2">
        
            <div className="flex items-center border rounded-md">
    <button className="px-2 py-1">-</button>
    <span className="px-4 py-1">1</span>
    <button className="px-2 py-1">+</button>
  </div>

            {/* Add to Cart and buy now */}
            <button className="bg-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
    <ShoppingCart className="w-4 h-4" /> Add to Cart
  </button>

            <button className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-2">
    <Zap className="w-4 h-4" /> Buy Now
  </button>
</div>

          {/* Payment nd Warranty Box */}
          <div className="border border-gray-300 rounded p-4 mt-4 text-gray-600 text-sm space-y-3">
            <div className="flex items-start gap-2">
              <CreditCard className="w-5 h-5 text-gray-500 mt-0.5" />
              <p>
                <strong>Payment:</strong> Payment upon receipt of goods, Payment
                by card in the department, Google Pay, Online card, -5% discount
                in case of payment
              </p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-500 mt-0.5" />
              <p>
                <strong>Warranty:</strong> The Consumer Protection Act does not
                provide for the return of this product of proper quality.
              </p>
            </div>
          </div>

          {/*  Wishlist Share Compare */}
          <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
            <button className="flex items-center gap-1 hover:text-black">
              <Heart className="w-4 h-4" /> Add to wishlist
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              <Share2 className="w-4 h-4" /> Share this product
            </button>
            <button className="flex items-center gap-1 hover:text-black">
              <Repeat className="w-4 h-4" /> Compare
            </button>
          </div>
        </div>
      </div>

       {/* Description  */}
      <div className="mt-10">
        <div className="flex gap-6 border-b border-gray-200 pb-2 text-gray-700 font-medium">
          <button className="hover:text-black">Description</button>
          <button className="hover:text-black">Reviews (2)</button>
        </div>

        <div className="mt-4 text-gray-600 text-sm leading-relaxed space-y-3">
         <p>
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
            fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu
            accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          </p>

          <p>
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
            eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
            Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
            Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus
            ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit.
            Aenean vel diam ut arcu pharetra dignissim ut sed leo.Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
            quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
            mauris, sed egestas purus commodo vel.
          </p>
          
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
