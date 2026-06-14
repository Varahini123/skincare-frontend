import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    skinType: "",
    price: "",
    rating: "",
    image: "",
    description: "",
    benefits: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/products", {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      benefits: formData.benefits.split(",")
    });

    alert("Product added");
    navigate("/products");
  }

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" onChange={handleChange} />
        <input name="brand" placeholder="Brand" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="skinType" placeholder="Skin Type" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="rating" placeholder="Rating" onChange={handleChange} />
        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input name="benefits" placeholder="Benefits comma separated" onChange={handleChange} />
        <button className="submit-btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;