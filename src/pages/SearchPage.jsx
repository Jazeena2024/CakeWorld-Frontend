import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchPage() {

  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const nav = useNavigate()

  useEffect(() => {

    fetchProducts();

  }, [query]);

  const fetchProducts = async () => {

    try {

      const response = await API.get(
        `/products/search?q=${query}`
      );

      setProducts(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product._id}
            className="border rounded-xl p-4"
            onClick={() =>
              nav(`/product/${product._id}`, {
                state: product
              })
            }
          >

            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-indigo-600 font-bold">
              $ {product.price}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SearchPage;