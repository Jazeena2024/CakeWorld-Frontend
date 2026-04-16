import React from 'react'
import { Star } from 'lucide-react'

function Testimonials() {

  const testimonials = [
    {
      name: "Anjali Nair",
      role: "Customer",
      rating: 5,
      text: "Absolutely loved the cake! It was fresh, beautiful, and tasted amazing.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rahul Menon",
      role: "Customer",
      rating: 4,
      text: "Great designs and timely delivery. Highly recommend for special occasions.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Meera Joseph",
      role: "Customer",
      rating: 5,
      text: "Best bakery experience ever! The cupcakes were just perfect.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]

  return (
    <div>
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our delighted customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-soft-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                  ))}
                </div>

                <p className="text-chocolate/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-terracotta/20"
                  />
                  <div>
                    <h4 className="font-bold text-chocolate">{testimonial.name}</h4>
                    <p className="text-sm text-chocolate/60">{testimonial.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blush">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Stay Sweet with Us
          </h2>

          <p className="text-lg text-chocolate/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new cake launches, and baking tips straight to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white border-2 border-chocolate/10 focus:border-terracotta focus:outline-none focus:ring-4 focus:ring-terracotta/20 transition-all duration-300"
            />
            <button className="px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          <p className="mt-4 text-sm text-chocolate/60">
            We respect your privacy. Unsubscribe anytime.
          </p>

        </div>
      </section>
    </div>
  )
}

export default Testimonials