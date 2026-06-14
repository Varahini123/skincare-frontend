import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoriteSlice";

function ProductCard({ product, onDelete }) {
  const dispatch = useDispatch();

  function handleFavorite() {
    dispatch(addFavorite(product));
    alert("Added to favorites");
  }

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>₹ {product.price}</p>
      <p>⭐ {product.rating}</p>

      <button className="favorite-btn" onClick={handleFavorite}>
        ❤ Add Favorite
      </button>

      <div className="card-actions">
        <Link className="view-btn" to={`/products/${product.id}`}>View</Link>
        <Link className="edit-btn" to={`/edit-product/${product.id}`}>Edit</Link>
        <button className="delete-btn" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;