import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import DummyPayment from "../components/DummyPayment";


function CartPage() {

  const {
    cartItems,
    removeFromCart,
    addToCart
  } = useContext(CartContext);

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Shopping Cart
        </h1>

        {
          cartItems.length === 0 ? (

            <div className="bg-white p-6 rounded-xl shadow text-center">

              <h2 className="text-xl font-semibold">
                Your cart is empty 🛒
              </h2>

            </div>

          ) : (

            <div className="space-y-4">

              {
                cartItems.map((item) => (

                  <div
                    key={item._id}
                    className="bg-white p-4 rounded-xl shadow flex items-center gap-4"
                  >

                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    {/* DETAILS */}
                    <div className="flex-1">

                      <h2 className="text-lg font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-500">
                        $ {item.price}
                      </p>

                      <p className="mt-1">
                        Quantity:
                        <span className="font-semibold ml-2">
                          {item.quantity}
                        </span>
                      </p>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex flex-col gap-2">

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white px-4 py-1 rounded-lg"
                      >
                        +
                      </button>

                      <button
                        onClick={() =>
                          removeFromCart(item._id)
                        }
                        className="bg-red-500 text-white px-4 py-1 rounded-lg"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                ))
              }

              {/* TOTAL */}
              <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  Total:
                </h2>

                <p className="text-2xl font-bold text-indigo-600">
                  $ {totalPrice}
                </p>

              </div>

              {/* CHECKOUT BUTTON */}
              {/* <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700">

                Proceed to Checkout

              </button> */}
              <DummyPayment amount={totalPrice}/>

            </div>

          )
        }

      </div>

    </div>

  );

}

export default CartPage;