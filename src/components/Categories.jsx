import React from 'react'

function Categories() {

  const categories = [
    {
      name: "Birthday Cakes",
      count: "20+ Items",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
      name: "Wedding Cakes",
      count: "15+ Items",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d"
    },
    {
      name: "Cupcakes",
      count: "25+ Items",
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce"
    },
    {
      name: "Custom Cakes",
      count: "10+ Items",
      image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec"
    }
  ]

  return (
    <div>
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-chocolate mb-4">
              Explore Our Collection
            </h2>
            <p className="text-lg text-chocolate/70 max-w-2xl mx-auto">
              From elegant wedding cakes to playful birthday treats, we have something special for every celebration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/30 to-transparent group-hover:from-terracotta/80 transition-colors duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm">{category.count}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Categories