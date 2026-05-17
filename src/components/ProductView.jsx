import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext }
  from '../context/CartContext'
import { useContext } from "react";
function ProductView() {

  const location = useLocation();

  const nav = useNavigate();

  const {addToCart} = useContext(CartContext)

  // ✅ Product Data
  const product = location.state;

  // ✅ If no product found
  if (!product) {

    return (

      <div className="h-screen flex items-center justify-center">

        <h1 className="text-3xl font-bold text-gray-700">

          Product Not Found

        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-pink-50 py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Product Image */}
          <div className="p-6">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-2xl shadow-md hover:scale-105 transition-all duration-500"
            />

          </div>

          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center">

            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full w-fit text-sm font-semibold mb-4">

              Premium Cake

            </span>

            <h1 className="text-5xl font-bold text-gray-800 mb-4">

              {product.name}

            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-6">

              {product.description}

            </p>

            <h2 className="text-4xl font-bold text-pink-600 mb-6">

              $ {product.price}

            </h2>

            {/* Buttons */}
            <div className="flex gap-4">

              <button
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => addToCart(product)}
              >

                Add to Cart

              </button>

              <button
                onClick={() => nav(-1)}
                className="border border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-4 rounded-xl transition-all duration-300"
              >

                Go Back

              </button>

            </div>

            {/* Extra Info */}
            <div className="mt-10 border-t pt-6">

              <div className="flex justify-between mb-3">

                <span className="text-gray-500">

                  Category

                </span>

                <span className="font-semibold text-gray-700">

                  Cakes

                </span>

              </div>

              <div className="flex justify-between mb-3">

                <span className="text-gray-500">

                  Delivery

                </span>

                <span className="font-semibold text-gray-700">

                  Free Delivery

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-500">

                  Availability

                </span>

                <span className="font-semibold text-green-600">

                  In Stock

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProductView;