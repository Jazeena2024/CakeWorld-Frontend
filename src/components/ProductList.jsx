import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";

const ProductList = ({
  products,
  fetchProducts,
  setSelectedProduct
}) => {

  const [currentIndex, setCurrentIndex] =
    useState({});

  // =========================
  // AUTO SLIDE
  // =========================

  useEffect(() => {

    const interval = setInterval(() => {

      products.forEach((p) => {

        const mediaItems = [];

        if (p.image) {

          mediaItems.push({
            type: "image",
            url: p.image
          });

        }

        if (p.video) {

          mediaItems.push({
            type: "video",
            url: p.video
          });

        }

        if (mediaItems.length > 1) {

          setCurrentIndex((prev) => ({
            ...prev,
            [p._id]:
              ((prev[p._id] || 0) + 1) %
              mediaItems.length
          }));

        }

      });

    }, 3000);

    return () => clearInterval(interval);

  }, [products]);

  // =========================
  // DELETE PRODUCT
  // =========================

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

  // =========================
  // NEXT SLIDE
  // =========================

  const nextSlide = (id, total) => {

    setCurrentIndex((prev) => ({
      ...prev,
      [id]:
        ((prev[id] || 0) + 1) % total
    }));

  };

  // =========================
  // PREV SLIDE
  // =========================

  const prevSlide = (id, total) => {

    setCurrentIndex((prev) => ({
      ...prev,
      [id]:
        ((prev[id] || 0) - 1 + total) %
        total
    }));

  };

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

      {
        products.map((p) => {

          // =====================
          // MEDIA ARRAY
          // =====================

          const mediaItems = [];

          if (p.image) {

            mediaItems.push({
              type: "image",
              url: p.image
            });

          }

          if (p.video) {

            mediaItems.push({
              type: "video",
              url: p.video
            });

          }

          const current =
            currentIndex[p._id] || 0;

          return (

            <div
              key={p._id}
              className="
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
              "
            >

              {/* ===================== */}
              {/* CAROUSEL */}
              {/* ===================== */}

              <div className="relative">

                {
                  mediaItems[current]?.type ===
                    "image" ? (

                    <img
                      src={
                        mediaItems[current].url
                      }
                      alt={p.name}
                      className="
                        h-64
                        w-full
                        object-cover
                      "
                    />

                  ) : (

                    <video
                      src={
                        mediaItems[current].url
                      }
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      className="
                        h-64
                        w-full
                        object-cover
                      "
                    />

                  )
                }


                {/* LEFT BUTTON */}
                {
                  mediaItems.length > 1 &&

                  <button
                    onClick={() =>
                      prevSlide(
                        p._id,
                        mediaItems.length
                      )
                    }
                    className="
      absolute
      top-1/2
      left-4
      -translate-y-1/2
      w-10
      h-10
      rounded-full
      backdrop-blur-md
      bg-white/20
      border
      border-white/30
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:bg-white/40
      hover:scale-110
      transition-all
      duration-300
    "
                  >
                    <span className="text-lg font-bold">
                      ‹
                    </span>
                  </button>
                }

                {/* RIGHT BUTTON */}
                {
                  mediaItems.length > 1 &&

                  <button
                    onClick={() =>
                      nextSlide(
                        p._id,
                        mediaItems.length
                      )
                    }
                    className="
      absolute
      top-1/2
      right-4
      -translate-y-1/2
      w-10
      h-10
      rounded-full
      backdrop-blur-md
      bg-white/20
      border
      border-white/30
      text-white
      flex
      items-center
      justify-center
      shadow-lg
      hover:bg-white/40
      hover:scale-110
      transition-all
      duration-300
    "
                  >
                    <span className="text-lg font-bold">
                      ›
                    </span>
                  </button>
                }

                {/* DOTS */}
                {
                  mediaItems.length > 1 &&

                  <div
                    className="
                      absolute
                      bottom-3
                      left-1/2
                      -translate-x-1/2
                      flex gap-2
                    "
                  >

                    {
                      mediaItems.map(
                        (_, index) => (

                          <div
                            key={index}
                            className={`
                              w-2
                              h-2
                              rounded-full
                              ${current === index
                                ? "bg-white"
                                : "bg-white/50"
                              }
                            `}
                          />

                        )
                      )
                    }

                  </div>
                }

              </div>

              {/* ===================== */}
              {/* PRODUCT DETAILS */}
              {/* ===================== */}

              <div className="p-4">

                <h3
                  className="
                    text-lg
                    font-semibold
                  "
                >
                  {p.name}
                </h3>

                <p
                  className="
                    text-indigo-600
                    font-bold
                    mt-1
                  "
                >
                  ₹ {p.price}
                </p>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-2
                  "
                >
                  {p.description}
                </p>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    justify-between
                    mt-4
                  "
                >

                  <button
                    onClick={() =>
                      setSelectedProduct(p)
                    }
                    className="
                      text-blue-600
                      font-medium
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(p._id)
                    }
                    className="
                      text-red-500
                      font-medium
                    "
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          );

        })
      }

    </div>

  );

};

export default ProductList;