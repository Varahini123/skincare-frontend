import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProduct() {
  const { id } = useParams();
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

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await api.get(`/products/${id}`);
    setFormData({
      ...response.data,
      benefits: response.data.benefits.join(",")
    });
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(`/products/${id}`, {
      ...formData,
      price: Number(formData.price),
      rating: Number(formData.rating),
      benefits: formData.benefits.split(",")
    });

    alert("Product updated");
    navigate("/products");
  }

  return (
    <div className="form-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input name="brand" value={formData.brand} onChange={handleChange} />
        <input name="category" value={formData.category} onChange={handleChange} />
        <input name="skinType" value={formData.skinType} onChange={handleChange} />
        <input name="price" value={formData.price} onChange={handleChange} />
        <input name="rating" value={formData.rating} onChange={handleChange} />
        <input name="image" value={formData.image} onChange={handleChange} />
        <textarea name="description" value={formData.description} onChange={handleChange} />
        <input name="benefits" value={formData.benefits} onChange={handleChange} />
        <button className="submit-btn">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;