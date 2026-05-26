import {
  createContext,
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import { toast }
  from "react-toastify";

export const CartContext =
  createContext();

const CartProvider = ({
  children
}) => {

  const [cartItems, setCartItems] =
    useState([]);

  const navigate = useNavigate();

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {

    // CHECK LOGIN
    const token =
      localStorage.getItem("token");

    if (!token) {

      toast.warning(
        "Please login first"
      );

      navigate("/login");

      return;

    }

    // CHECK EXISTING PRODUCT
    const existing =
      cartItems.find(
        (item) =>
          item._id === product._id
      );

    // IF PRODUCT EXISTS
    if (existing) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item
        )
      );

      toast.success(
        "Quantity updated 🛒"
      );

    }

    // NEW PRODUCT
    else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);

      toast.success(
        "Added to cart 🛍️"
      );

    }

  };

  // =========================
  // REMOVE FROM CART
  // =========================

  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) =>
          item._id !== id
      )
    );

    toast.info(
      "Removed from cart ❌"
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