import React from 'react'
import { ArrowRight } from 'lucide-react'

function About() {
  return (
    <div>
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-6">
                Crafted with Passion, Baked with Love
              </h2>

              <p className="text-lg text-chocolate/70 mb-6 leading-relaxed">
                For over 15 years, Sweet Moments has been creating extraordinary cakes that turn celebrations into cherished memories.
                Each creation is handcrafted by our skilled pastry chefs using only the finest ingredients.
              </p>

              <p className="text-lg text-chocolate/70 mb-8 leading-relaxed">
                From traditional recipes passed down through generations to innovative modern designs, we blend artistry with
                exceptional taste to deliver cakes that are as beautiful as they are delicious.
              </p>

              <button className="px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Our Story
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1701944576465-cc6111d630e0"
                  alt="Bakery display"
                  className="w-full rounded-3xl shadow-lg h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1622505329915-dd2cb8fa4888"
                  alt="Cupcake detail"
                  className="w-full rounded-3xl shadow-lg h-48 object-cover"
                />
              </div>

              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1611692276815-cd6efa0b2dac"
                  alt="Colorful cupcakes"
                  className="w-full rounded-3xl shadow-lg h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1653936644618-b13b3357ce78"
                  alt="Wedding cake"
                  className="w-full rounded-3xl shadow-lg h-64 object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default About