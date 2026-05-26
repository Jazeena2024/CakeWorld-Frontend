import React, { useEffect, useState } from 'react'
import { Heart, Star } from 'lucide-react'
import API from '../services/api'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


function FeaturedProducts() {

  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {

    fetchProducts()

  }, [])

  const {addToCart}=useContext(CartContext)

  const fetchProducts = async () => {

    try {

      const response = await API.get(
        "/products"
      )

      // ✅ Show only first 3 products
      setFeaturedProducts(
        response.data.slice(0, 3)
      )

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div>

      {/* Featured Products */}
      <section className="py-20 bg-cream">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-4">

              Featured Creations

            </h2>

            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">

              Our most loved cakes, handpicked for their exceptional taste and stunning designs

            </p>

          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {
              featuredProducts.map((product, index) => (

                <div
                  key={product._id}
                  className="group bg-soft-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                >

                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Badge */}
                    <span className="absolute top-4 right-4 px-4 py-2 bg-terracotta text-white text-sm font-medium rounded-full shadow-lg">

                      Featured

                    </span>

                    {/* Wishlist */}
                    <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">

                      <Heart className="w-5 h-5 text-terracotta" />

                    </button>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-chocolate mb-2 group-hover:text-terracotta transition-colors duration-300">

                      {product.name}

                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mb-4">

                      <div className="flex items-center">

                        {
                          [...Array(5)].map((_, i) => (

                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4
                                  ? 'fill-terracotta text-terracotta'
                                  : 'text-chocolate/20'
                              }`}
                            />

                          ))
                        }

                      </div>

                      <span className="text-sm text-chocolate/60">

                        (120 Reviews)

                      </span>

                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center justify-between">

                      <span className="text-2xl font-bold text-chocolate">

                        $ {product.price}

                      </span>

                      <button className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-black rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        onClick={() => addToCart(product)}
                      >

                        Add to Cart

                      </button>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>

      {/* Offer Banner */}
      <section className="py-20 bg-gradient-to-r from-terracotta via-rose to-peach relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">

          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">

            Spring Special Offer

          </h2>

          <p className="text-xl md:text-2xl text-black/95 mb-8 max-w-3xl mx-auto">

            Get 20% off on all wedding cake orders this season.
            Plus, free delivery for orders over ₹1000!

          </p>

          <button className="px-10 py-5 bg-white text-black rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105 text-lg">

            Claim Your Discount

          </button>

          <p className="mt-6 text-black/80 text-sm">

            *Valid until April 30, 2026

          </p>

        </div>

      </section>

    </div>

  )
}

export default FeaturedProducts