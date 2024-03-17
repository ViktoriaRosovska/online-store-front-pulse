import { Link } from "react-router-dom";
import "./ProductLink.css";

function ProductBreadcrumb({ category, productName }) {
  return (
    <div className="product-breadcrumb">
      <Link className="home-link" to="/">
        Головна
      </Link>
      <span className="separator">/</span>
      <Link className="category-link" to={`/category/${category}`}>
        {category}
      </Link>
      <span className="separator">/</span>
      <span className="product-name">{productName}</span>
    </div>
  );
}

export default ProductBreadcrumb;
