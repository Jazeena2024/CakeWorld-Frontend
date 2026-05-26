import React, {
  useContext,
  useState
} from "react";

import {
  ChefHat,
  Search,
  ShoppingCart,
  User,
  LogOut
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext";

function Navbar() {

  const [search, setSearch] =
    useState("");

  const nav = useNavigate();

  // ✅ CART CONTEXT
  const { cartItems } =
    useContext(CartContext);

  // ✅ CART COUNT
  const cartCount =
    cartItems.length;

  // =========================
  // USER DATA
  // =========================

  const token =
    localStorage.getItem("token");

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

  // =========================
  // SEARCH
  // =========================

  const handleSearch = () => {

    if (search.trim() !== "") {

      nav(`/search?q=${search}`);

    }

  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    nav("/login");

  };

  return (

    <div
      className="
        bg-cream
        sticky
        top-0
        z-50
      "
    >

      <header
        className="
          bg-white/80
          backdrop-blur-lg
          border-b
          shadow-sm
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              h-20
            "
          >

            {/* ===================== */}
            {/* LOGO */}
            {/* ===================== */}

            <div
              className="
                flex
                items-center
                gap-2
                cursor-pointer
              "
              onClick={() => nav("/")}
            >

              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-gradient-to-br
                  from-pink-500
                  to-rose-400
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >

                <ChefHat
                  className="
                    w-6
                    h-6
                    text-white
                  "
                />

              </div>

              <div>

                <h1
                  className="
                    text-2xl
                    font-bold
                    text-gray-800
                  "
                >

                  Sweet Moments

                </h1>

                <p
                  className="
                    text-xs
                    text-gray-500
                  "
                >

                  Artisan Bakery

                </p>

              </div>

            </div>

            {/* ===================== */}
            {/* NAVIGATION */}
            {/* ===================== */}

            <nav
              className="
                hidden
                md:flex
                items-center
                gap-8
              "
            >

              <button
                onClick={() => nav("/")}
                className="
                  hover:text-pink-500
                  transition-all
                "
              >
                Home
              </button>

              <button
                onClick={() => nav("/shop")}
                className="
                  hover:text-pink-500
                  transition-all
                "
              >
                Shop
              </button>

              <button
                onClick={() => nav("/about")}
                className="
                  hover:text-pink-500
                  transition-all
                "
              >
                About
              </button>

              <button
                onClick={() => nav("/contact")}
                className="
                  hover:text-pink-500
                  transition-all
                "
              >
                Contact
              </button>

            </nav>

            {/* ===================== */}
            {/* RIGHT SIDE */}
            {/* ===================== */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              {/* SEARCH */}
              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  border
                  rounded-full
                  px-4
                  py-2
                  bg-gray-50
                "
              >

                <Search
                  className="
                    w-4
                    h-4
                    text-gray-500
                    cursor-pointer
                  "
                  onClick={handleSearch}
                />

                <input
                  type="text"
                  placeholder="Search cakes..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {

                    if (
                      e.key === "Enter"
                    ) {

                      handleSearch();

                    }

                  }}
                  className="
                    bg-transparent
                    outline-none
                    ml-2
                    text-sm
                    w-40
                  "
                />

              </div>

              {/* CART */}
              <button
                onClick={() => nav("/cart")}
                className="
                  relative
                  p-2
                  hover:bg-gray-100
                  rounded-full
                  transition-all
                "
              >

                <ShoppingCart
                  className="
                    w-5
                    h-5
                    text-gray-700
                  "
                />

                {
                  cartCount > 0 && (

                    <span
                      className="
                        absolute
                        -top-1
                        -right-1
                        w-5
                        h-5
                        bg-pink-500
                        text-white
                        text-xs
                        rounded-full
                        flex
                        items-center
                        justify-center
                      "
                    >

                      {cartCount}

                    </span>

                  )
                }

              </button>

              {/* ===================== */}
              {/* USER SECTION */}
              {/* ===================== */}

              {
                token ? (

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      bg-pink-50
                      px-4
                      py-2
                      rounded-full
                    "
                  >

                    {/* USER ICON */}
                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-pink-500
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <User
                        className="
                          w-4
                          h-4
                          text-white
                        "
                      />

                    </div>

                    {/* USER EMAIL */}
                    <div
                      className="
                        hidden
                        md:block
                      "
                    >

                      <p
                        className="
                          text-xs
                          text-gray-500
                        "
                      >

                        Logged In

                      </p>

                      <p
                        className="
                          text-sm
                          font-medium
                          text-gray-700
                        "
                      >

                        {
                          user?.email
                        }

                      </p>

                    </div>

                    {/* LOGOUT */}
                    <button
                      onClick={
                        handleLogout
                      }
                      className="
                        p-2
                        rounded-full
                        hover:bg-pink-100
                        transition-all
                      "
                    >

                      <LogOut
                        className="
                          w-5
                          h-5
                          text-pink-600
                        "
                      />

                    </button>

                  </div>

                ) : (

                  <button
                    onClick={() =>
                      nav("/login")
                    }
                    className="
                      flex
                      items-center
                      gap-2
                      bg-pink-500
                      hover:bg-pink-600
                      text-white
                      px-5
                      py-2
                      rounded-full
                      transition-all
                      shadow-md
                    "
                  >

                    <User
                      className="
                        w-4
                        h-4
                      "
                    />

                    Login

                  </button>

                )
              }

            </div>

          </div>

        </div>

      </header>

    </div>

  );

}

export default Navbar;