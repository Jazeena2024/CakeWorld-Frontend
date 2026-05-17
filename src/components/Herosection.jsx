import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Herosection() {
  const nav = useNavigate()
  return (
    <div>
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1653936392747-cbbf97f8d45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Elegant wedding cake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate/60 via-chocolate/40 to-transparent"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl animate-fade-in">
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Delicious Cakes for Every Occasion
            </h2>

            <p
              className="text-xl md:text-2xl text-white/90 mb-8 font-light animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Handcrafted with love, baked fresh daily, and designed to make your celebrations unforgettable.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              
              <button className="px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
                onClick={()=>nav('/shop')}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full font-medium border-2 border-white/50 transition-all duration-300 hover:scale-105"
                onClick={()=>nav('/explore')}
              >
                Explore Cakes
              </button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Herosection