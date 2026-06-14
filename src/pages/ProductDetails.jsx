import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await api.get(`/products/${id}`);
    setProduct(response.data);
  }

  async function placeOrder() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login to order");
      return;
    }

    await api.post("/orders", {
      userId: user.id,
      productId: product.id,
      productName: product.name,
      price: product.price,
      image: product.image,
      date: new Date().toLocaleDateString()
    });

    alert("Order placed successfully");
  }

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <h3>Brand</h3>
      <p>{product.brand}</p>

      <h3>Category</h3>
      <p>{product.category}</p>

      <h3>Skin Type</h3>
      <p>{product.skinType}</p>

      <h3>Price</h3>
      <p>₹ {product.price}</p>

      <h3>Rating</h3>
      <p>⭐ {product.rating}</p>

      <h3>Benefits</h3>
      <ul>
        {product.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <button className="order-btn" onClick={placeOrder}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductDetails;