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

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-cream to-blush/30">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-5xl font-extrabold text-chocolate mb-5 tracking-tight">

              What Our Customers Say

            </h2>

            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto leading-relaxed">

              Don’t just take our word for it — hear from our delighted customers who made their celebrations sweeter with us.

            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {
              testimonials.map((testimonial, index) => (

                <div
                  key={testimonial.name}
                  className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden group"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >

                  {/* Decorative Glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-terracotta/10 rounded-full blur-3xl group-hover:bg-terracotta/20 transition-all duration-500"></div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">

                    {
                      [...Array(testimonial.rating)].map((_, i) => (

                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                        />

                      ))
                    }

                  </div>

                  {/* Quote */}
                  <p className="text-chocolate/80 leading-relaxed italic text-[15px] mb-8 relative z-10">

                    "{testimonial.text}"

                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4">

                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-4 ring-terracotta/20 shadow-md"
                    />

                    <div>

                      <h4 className="font-semibold text-lg text-chocolate">

                        {testimonial.name}

                      </h4>

                      <p className="text-sm text-chocolate/60">

                        {testimonial.role}

                      </p>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-blush via-cream to-blush relative overflow-hidden">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-terracotta/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <h2 className="text-4xl md:text-5xl font-extrabold text-chocolate mb-6 leading-tight">

            Stay Sweet with Us

          </h2>

          <p className="text-lg text-chocolate/70 mb-10 max-w-2xl mx-auto leading-relaxed">

            Subscribe to our newsletter for exclusive offers, new cake launches, and baking tips straight to your inbox.

          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-md focus:border-terracotta focus:ring-4 focus:ring-terracotta/20 outline-none transition-all duration-300"
            />

            <button className="px-8 py-4 bg-pink-500 hover:bg-terracotta/90 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap">

              Subscribe Now

            </button>

          </div>

          <p className="mt-5 text-sm text-chocolate/60">

            We respect your privacy. Unsubscribe anytime.

          </p>

        </div>

      </section>

    </div>

  )
}

export default Testimonials