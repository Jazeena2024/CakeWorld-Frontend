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
    image: ""
  });

  const [preview, setPreview] = useState(null);

  // ✅ Prefill edit data
  useEffect(() => {

    if (selectedProduct) {

      setForm({
        name: selectedProduct.name,
        price: selectedProduct.price,
        description: selectedProduct.description,
        image: selectedProduct.image
      });

      setPreview(selectedProduct.image);

    }

  }, [selectedProduct]);

  // ✅ Upload image to Cloudinary
  const handleImageUpload = async (file) => {

    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      "cake_ecom"
    );

    try {

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dgn5igfzl/image/upload",
        data
      );

      return response.data.secure_url;

    } catch (error) {

      console.log(error);

      toast.error("Image upload failed");

    }

  };

  const handleChange = async (e) => {

  const { name, value, files } = e.target;

  // IMAGE
  if (name === "image") {

    const file = files[0];

    if (!file) return;

    // Preview
    setPreview(URL.createObjectURL(file));

    try {

      // Upload image
      const imageUrl =
        await handleImageUpload(file);

      if (!imageUrl) {
        return toast.error("Upload failed");
      }

      // ✅ Functional update
      setForm((prev) => ({
        ...prev,
        image: imageUrl
      }));

      toast.success("Image uploaded ✅");

    } catch (error) {

      console.log(error);

      toast.error("Image upload failed");

    }

  } else {

    // NORMAL INPUTS
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

  }

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!form.name || !form.price) {
      return toast.error("Name & Price required");
    }
    if (!form.image) {
  return toast.error("Please upload image");
}
    try {

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

        toast.success("Product updated ✏️");

        setSelectedProduct(null);

      } else {

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

        toast.success("Product added ✅");

      }

      fetchProducts();

      setForm({
        name: "",
        price: "",
        description: "",
        image: ""
      });

      setPreview(null);

    } catch {

      toast.error("Error ❌");

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full border p-2 rounded-lg"
      />

      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border p-2 rounded-lg"
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border p-2 rounded-lg"
      />

      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="w-full"
      />

      {/* Preview */}
      {
        preview &&
        <img
          src={preview}
          alt="preview"
          className="h-24 rounded-lg"
        />
      }

      <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">

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