import React from 'react'
import { ChefHat, Search, ShoppingCart, User } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const cartCount = 2; // you can replace this with state later
  const nav = useNavigate()

  return (
    <div className="bg-cream sticky top-0 z-50">
      {/* Header */}
      <header className="bg-soft-white/95 backdrop-blur-md border-b border-chocolate/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-terracotta to-rose flex items-center justify-center shadow-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-chocolate tracking-tight">
                  Sweet Moments
                </h1>
                <p className="text-xs text-chocolate/60">Artisan Bakery</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-chocolate hover:text-terracotta transition-colors duration-300 font-medium">Home</a>
              <a href="#shop" className="text-chocolate hover:text-terracotta transition-colors duration-300 font-medium">Shop</a>
              <a href="#about" className="text-chocolate hover:text-terracotta transition-colors duration-300 font-medium">About</a>
              <a href="#contact" className="text-chocolate hover:text-terracotta transition-colors duration-300 font-medium">Contact</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-blush/50 hover:bg-blush transition-all duration-300">
                <Search className="w-4 h-4 text-chocolate" />
                <span className="text-sm text-chocolate/70">Search</span>
              </button>

              <button className="relative p-2 hover:bg-blush/50 rounded-full transition-all duration-300">
                <ShoppingCart className="w-5 h-5 text-chocolate" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <button onClick={()=>nav("/login")} className="p-2 hover:bg-blush/50 rounded-full transition-all duration-300">
                <User className="w-5 h-5 text-chocolate" />
              </button>

            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar