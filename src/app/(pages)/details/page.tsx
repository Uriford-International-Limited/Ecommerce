
import React from "react";
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
import { Button } from "../../../components/ui/button"; 
import Counter from "../../../components/ui/Counter";

const ProductDetailsPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          
          <div className="flex flex-col gap-2 mb-4">
            <button className="bg-red-700 text-white px-4 py-1 rounded-full w-fit">
              56%
            </button>
            <button className="bg-green-500 text-white px-4 py-1 rounded-full flex items-center gap-1 w-fit">
              <span>Organic</span>
              <span>🌿</span>
            </button>
          </div>

          {/* Product Image */}
          <div className="flex justify-center items-center bg-gray-50 rounded-lg h-[400px] mb-6">
            <img
              src="/banana.png"
              alt="Marketside Fresh Organic Bananas, Bunch"
              className="object-contain h-full w-full rounded-lg"
            />
          </div>
        </div>

        {/* Right Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-snug">
            Marketside Fresh Organic Bananas, Bunch
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
              {[...Array(2)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 text-gray-300" />
              ))}
            </div>

            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">3.00</span>
            <span className="text-sm text-gray-600">2</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">SKU: E7F8G9H0</span>
          </div>

          <hr className="border-gray-200 my-2" />

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
          <Button className="bg-green-700 w-fit mt-2">
            Order on WhatsApp
          </Button>

          {/* Special Offer */}
          <button className="bg-yellow-50 text-orange-500 px-4 py-1 rounded-md w-fit text-sm mt-2">
            Special Offer: 83 76 5 :77 Remains until the end of the year
          </button>

          {/* Quantity Cart Buy Now */}
          <div className="flex items-center gap-2 mt-2">
            <Counter />

            <Button className="bg-green-700 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </Button>

            <Button className="bg-black flex items-center gap-2">
              <Zap className="w-4 h-4" /> Buy Now
            </Button>
          </div>

          {/* Payment and Warranty */}
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

          {/* Wishlist Share Compare */}
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
            Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
            quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
            mauris, sed egestas purus commodo vel.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
