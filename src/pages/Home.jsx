import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeaturedProducts"
import Footer from "../components/Footer"
import Herosection from "../components/Herosection"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <div>
    <Herosection id="h1"/>
    <Categories id="c1"/>
    <FeaturedProducts />
    <Testimonials/>
    <Footer/>
  
    </div>
  )
}

export default Home
