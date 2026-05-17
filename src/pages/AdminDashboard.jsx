import { useEffect, useState } from "react";
import API from "../services/api";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // ✅ NEW
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-200"
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            {selectedProduct ? "Edit Product ✏️" : "Add Product ➕"}
          </h3>

          <ProductForm
            fetchProducts={fetchProducts}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Product List
          </h3>

          <ProductList
            products={products}
            fetchProducts={fetchProducts}
            setSelectedProduct={setSelectedProduct} // ✅ pass
          />
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;