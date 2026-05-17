import { useState, useEffect } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const [editId, setEditId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await fetch(`http://localhost:5000/api/products/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } else {
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    setForm({ name: "", price: "", category: "", image: "", description: "" });
    setEditId(null);
    fetchProducts();
  };

  // Delete
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE"
    });
    fetchProducts();
  };

  // Edit
  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
  };

  return (
    <div>
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Cake Name" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">{editId ? "Update" : "Add"} Product</button>
      </form>

      <hr />

      {products.map((p) => (
        <div key={p._id}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => handleEdit(p)}>Edit</button>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Admin;