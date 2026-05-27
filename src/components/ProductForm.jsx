import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import axios from "axios";

const ProductForm = ({
  fetchProducts,
  selectedProduct,
  setSelectedProduct
}) => {

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    video: ""
  });

  const [preview, setPreview] = useState(null);

  const [videoPreview, setVideoPreview] =
    useState(null);

  // ✅ Prefill edit data
  useEffect(() => {

    if (selectedProduct) {

      setForm({
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.description,
        image: selectedProduct.image,
        video: selectedProduct.video || ""
      });

      setPreview(selectedProduct.image);

      setVideoPreview(
        selectedProduct.video || null
      );

    }

  }, [selectedProduct]);

  // ✅ Upload image to Cloudinary
  const handleImageUpload = async (file) => {

    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      "Cake_World"
    );

    try {

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddspavmln/image/upload",
        data
      );

      return response.data.secure_url;

    } catch (error) {

      console.log(error);

      toast.error("Image upload failed");

    }

  };

  // ✅ Upload video to Cloudinary
  const handleVideoUpload = async (file) => {

    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      "Cake_World"
    );

    try {

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddspavmln/video/upload",
        data
      );

      return response.data.secure_url;

    } catch (error) {

      console.log(error);

      toast.error("Video upload failed");

    }

  };

  const handleChange = async (e) => {

    const { name, value, files } = e.target;

    // ✅ IMAGE
    if (name === "image") {

      const file = files[0];

      if (!file) return;

      // Preview
      setPreview(URL.createObjectURL(file));

      try {

        const imageUrl =
          await handleImageUpload(file);

        if (!imageUrl) {

          return toast.error(
            "Image upload failed"
          );

        }

        setForm((prev) => ({
          ...prev,
          image: imageUrl
        }));

        toast.success("Image uploaded ✅");

      } catch (error) {

        console.log(error);

        toast.error("Image upload failed");

      }

    }

    // ✅ VIDEO
    else if (name === "video") {

      const file = files[0];

      if (!file) return;

      // Preview
      setVideoPreview(
        URL.createObjectURL(file)
      );

      try {

        const videoUrl =
          await handleVideoUpload(file);

        if (!videoUrl) {

          return toast.error(
            "Video upload failed"
          );

        }

        setForm((prev) => ({
          ...prev,
          video: videoUrl
        }));

        toast.success("Video uploaded 🎥");

      } catch (error) {

        console.log(error);

        toast.error("Video upload failed");

      }

    }

    // ✅ NORMAL INPUTS
    else {

      setForm((prev) => ({
        ...prev,
        [name]: value
      }));

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.price) {

      return toast.error(
        "Name & Price required"
      );

    }

    if (!form.image) {

      return toast.error(
        "Please upload image"
      );

    }

    try {

      // ✅ UPDATE
      if (selectedProduct) {

        await API.put(
          `/products/${selectedProduct._id}`,
          form,
          {
            headers: {
              Authorization:
                localStorage.getItem("token")
            }
          }
        );

        toast.success(
          "Product updated ✏️"
        );

        setSelectedProduct(null);

      }

      // ✅ ADD
      else {

        await API.post(
          "/products",
          form,
          {
            headers: {
              Authorization:
                localStorage.getItem("token")
            }
          }
        );

        toast.success(
          "Product added ✅"
        );

      }

      fetchProducts();

      // ✅ RESET
      setForm({
        name: "",
        price: "",
        description: "",
        image: "",
        video: ""
      });

      setPreview(null);

      setVideoPreview(null);

    } catch {

      toast.error("Error ❌");

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      {/* PRODUCT NAME */}
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full border p-2 rounded-lg"
      />

      {/* PRICE */}
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border p-2 rounded-lg"
      />

      {/* DESCRIPTION */}
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded-lg"
      />

      {/* IMAGE INPUT */}
      <p>Upload image</p>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full"
      />

      {/* IMAGE PREVIEW */}
      {
        preview &&
        <img
          src={preview}
          alt="preview"
          className="h-24 rounded-lg"
        />
      }

      {/* VIDEO INPUT */}
      <p>Upload video</p>
      <input
        type="file"
        name="video"
        accept="video/*"
        onChange={handleChange}
        className="w-full"
      />

      {/* VIDEO PREVIEW */}
      {
        videoPreview &&
        <video
          src={videoPreview}
          controls
          className="h-40 rounded-lg"
        />
      }

      {/* BUTTON */}
      <button
        className="
          w-full
          bg-indigo-600
          text-white
          py-2
          rounded-lg
          hover:bg-indigo-700
        "
      >

        {
          selectedProduct
            ? "Update Product"
            : "Add Product"
        }

      </button>

    </form>

  );

};

export default ProductForm;