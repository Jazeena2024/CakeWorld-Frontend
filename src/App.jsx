import { Routes, Route, useLocation } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"

import PrivateRoute from "./components/PrivateRoute"

import CartPage from "./pages/Cart"
import Collections from "./pages/Collections"
import SearchPage from "./pages/SearchPage"

import Navbar from "./components/Navbar"

import About from "./components/About"
import Testimonials from "./components/Testimonials"
import FeaturedProducts from "./components/FeaturedProducts"
import ProductView from "./components/ProductView"


function App() {

  const location = useLocation()

  // ✅ Hide navbar on these pages
  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/admin",
    "/admindash"
  ]

  const shouldHideNavbar =
    hideNavbarRoutes.includes(location.pathname)

  return (

    <div>

      {/* ✅ Conditional Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <ToastContainer />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />
        <Route path="/product/:id" element={<ProductView />} />
        <Route
          path="/shop"
          element={<Collections />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/explore"
          element={<FeaturedProducts />}
        />

        <Route
          path="/search"
          element={<SearchPage />}
        />

        <Route
          path="/contact"
          element={<Testimonials />}
        />

        {/* Admin Login */}
        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admindash"
          element={
            <PrivateRoute>

              <AdminDashboard />

            </PrivateRoute>
          }
        />

      </Routes>

    </div>

  )
}

export default App