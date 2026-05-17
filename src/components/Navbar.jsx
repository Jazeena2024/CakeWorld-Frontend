import React, {
  useContext,
  useState
} from 'react'

import {
  ChefHat,
  Search,
  ShoppingCart,
  User
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import { CartContext } from '../context/CartContext'

function Navbar() {

  const [search, setSearch] = useState("")

  const nav = useNavigate()

  // ✅ Get cart items from context
  const { cartItems } = useContext(CartContext)

  // ✅ Dynamic cart count
  const cartCount = cartItems.length

  // ✅ Search Function
  const handleSearch = () => {

    if (search.trim() !== "") {

      nav(`/search?q=${search}`)

    }

  }

  return (

    <div className="bg-cream sticky top-0 z-50">

      <header className="bg-white border-b shadow-sm">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center gap-2">

              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center shadow-lg">

                <ChefHat className="w-6 h-6 text-white" />

              </div>

              <div>

                <h1 className="text-2xl font-bold text-gray-800">

                  Sweet Moments

                </h1>

                <p className="text-xs text-gray-500">

                  Artisan Bakery

                </p>

              </div>

            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">

              <button
                onClick={() => nav("/")}
                className="hover:text-pink-500"
              >
                Home
              </button>

              <button
                onClick={() => nav("/shop")}
                className="hover:text-pink-500"
              >
                Shop
              </button>

              <button
                onClick={() => nav("/about")}
                className="hover:text-pink-500"
              >
                About
              </button>

              <button
                onClick={() => nav("/contact")}
                className="hover:text-pink-500"
              >
                Contact
              </button>

            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Search */}
              <div className="hidden sm:flex items-center border rounded-full px-4 py-2 bg-gray-50">

                <Search
                  className="w-4 h-4 text-gray-500 cursor-pointer"
                  onClick={handleSearch}
                />

                <input
                  type="text"
                  placeholder="Search cakes..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  onKeyDown={(e) => {

                    if (e.key === "Enter") {

                      handleSearch()

                    }

                  }}
                  className="bg-transparent outline-none ml-2 text-sm w-40"
                />

              </div>

              {/* Cart */}
              <button
                onClick={() => nav("/cart")}
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >

                <ShoppingCart className="w-5 h-5 text-gray-700" />

                {
                  cartCount > 0 && (

                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">

                      {cartCount}

                    </span>

                  )
                }

              </button>

              {/* User */}
              <button
                onClick={() => nav("/login")}
                className="p-2 hover:bg-gray-100 rounded-full"
              >

                <User className="w-5 h-5 text-gray-700" />

              </button>

            </div>

          </div>

        </div>

      </header>

    </div>

  )
}

export default Navbar