import API from "../services/api";
import { toast } from "react-toastify";

const ProductList = ({
  products,
  fetchProducts,
  setSelectedProduct
}) => {

  const deleteProduct = async (id) => {

    try {

      await API.delete(
        `/products/${id}`,
        {
          headers: {
            Authorization:
              localStorage.getItem("token")
          }
        }
      );

      toast.success("Deleted 🗑️");

      fetchProducts();

    } catch {

      toast.error("Error ❌");

    }

  };

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      {
        products.map((p) => (

          <div
            key={p._id}
            className="bg-white p-4 rounded-xl shadow"
          >

            <img
              src={p.image}
              alt={p.name}
              className="h-32 w-full object-cover rounded"
            />

            <h3 className="font-semibold mt-2">
              {p.name}
            </h3>

            <p className="text-indigo-600 font-bold">
              $ {p.price}
            </p>

            <div className="flex justify-between mt-3">

              <button
                onClick={() => setSelectedProduct(p)}
                className="text-blue-600 text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(p._id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>

            </div>

          </div>

        ))
      }

    </div>

  );

};

export default ProductList;