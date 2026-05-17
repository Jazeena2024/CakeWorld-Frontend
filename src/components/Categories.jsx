import React, {
  useEffect,
  useState,
  useContext
} from 'react'

import axios from 'axios'

import { CartContext }
  from '../context/CartContext'
import { useNavigate } from 'react-router-dom'


function Categories() {

  const [categories, setCategories] =
    useState([])

  const nav=useNavigate();

  const { addToCart } =
    useContext(CartContext)

  useEffect(() => {

    fetchCategories()

  }, [])

  const fetchCategories = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/products"
      )

      setCategories(response.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div>

      <section className="py-20 bg-soft-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADING */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-4">

              Explore Our Collection

            </h2>

            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">

              From elegant wedding cakes to playful birthday treats,
              we have something special for every celebration

            </p>

          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {
              categories.map((category) => (

                <div
                  key={category._id}
                  className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
                  onClick={() =>
                    nav(`/product/${category._id}`, {
                      state: category
                    })
                  }
                >

                  {/* ADD TO CART */}
                  <button
                    onClick={() => addToCart(category)}
                    className="absolute top-4 right-4 z-10 bg-white text-chocolate px-4 py-2 rounded-full shadow-lg hover:bg-terracotta hover:text-pink-500 transition-all duration-300"
                  >

                    Add To Cart

                  </button>

                  {/* IMAGE */}
                  <div className="aspect-[3/4] overflow-hidden">

                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                  </div>

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/30 to-transparent"></div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                    <h3 className="text-2xl font-bold mb-2">

                      {category.name}

                    </h3>

                    <p className="text-white/90 text-sm mb-2">

                      {category.description}

                    </p>

                    <p className="text-lg font-semibold">

                      $ {category.price}

                    </p>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>

    </div>

  )

}

export default Categories