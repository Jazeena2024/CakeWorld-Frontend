import { createContext, useState } from "react";

export const CartContext =
  createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] =
    useState([]);

  // ADD TO CART
  const addToCart = (product) => {

    const existing =
      cartItems.find(
        (item) => item._id === product._id
      );

    if (existing) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);

    }

  };

  // REMOVE
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item._id !== id
      )
    );

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  );

};

export default CartProvider;