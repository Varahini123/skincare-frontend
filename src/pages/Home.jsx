import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div>
        <h1>GlowCare Skincare Store</h1>
        <p>Discover skincare products for healthy, glowing and confident skin.</p>
        <Link className="hero-btn" to="/products">Explore Products</Link>
      </div>
    </section>
  );
}

export default Home;