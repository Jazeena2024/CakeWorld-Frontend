import React from 'react'
import { ChefHat, MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-rose flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Sweet Moments</h3>
            </div>
            <p className="text-white/70 leading-relaxed">
              Creating delicious memories since 2010. Handcrafted cakes made with love and the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-terracotta transition-colors duration-300">Home</a></li>
              <li><a href="#shop" className="text-white/70 hover:text-terracotta transition-colors duration-300">Shop</a></li>
              <li><a href="#about" className="text-white/70 hover:text-terracotta transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-terracotta transition-colors duration-300">Contact</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-terracotta transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#birthday" className="text-white/70 hover:text-terracotta transition-colors duration-300">Birthday Cakes</a></li>
              <li><a href="#wedding" className="text-white/70 hover:text-terracotta transition-colors duration-300">Wedding Cakes</a></li>
              <li><a href="#cupcakes" className="text-white/70 hover:text-terracotta transition-colors duration-300">Cupcakes</a></li>
              <li><a href="#custom" className="text-white/70 hover:text-terracotta transition-colors duration-300">Custom Orders</a></li>
              <li><a href="#seasonal" className="text-white/70 hover:text-terracotta transition-colors duration-300">Seasonal Specials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-white/70">123 Bakery Lane, Sweet City, SC 12345</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-terracotta flex-shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-terracotta transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-terracotta flex-shrink-0" />
                <a href="mailto:hello@sweetmoments.com" className="text-white/70 hover:text-terracotta transition-colors duration-300">
                  hello@sweetmoments.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-white/60 text-sm">
            © {year} Sweet Moments Bakery. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            
            <a
              href="#facebook"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            <a
              href="#instagram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            <a
              href="#twitter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-terracotta flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaTwitter className="w-5 h-5" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer