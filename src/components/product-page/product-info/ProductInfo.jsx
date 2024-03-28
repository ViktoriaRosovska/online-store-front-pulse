import "./ProductInfo.css";
import originalIcon from "../../../../public/icons/product-page-icons/original.svg";
import deliveryIcon from "../../../../public/icons/product-page-icons/delivery.svg";
import exchangeIcon from "../../../../public/icons/product-page-icons/exchange.svg";
import conditionsIcon from "../../../../public/icons/product-page-icons/conditions.svg";
import Button from "../../Buttons/button";
import FavoriteIcon from "../../../../public/icons/favorites-icon.svg";

function formatPrice(price) {
  const parts = price.toString().split(".");
  const dollars = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return dollars + (parts[1] ? `.${parts[1]}` : "") + " грн.";
}

function ProductInfo({ productName, productCode, productPrice, productSizes }) {
  return (
    <div className="product-info">
      <p className="product-title">{productName}</p>
      <p className="product-code-block">
        <span className="label">Артикул:</span> <span className="product-code">{productCode}</span>
      </p>
      <p className="product-price">{formatPrice(productPrice)}</p>
      <p className="product-size-title">Розмірна сітка:</p>
      <ul className="product-sizes">
        {productSizes.map((size, index) => (
          <li key={index} className={size === "42" ? "active" : ""}>
            {size}
          </li>
        ))}
      </ul>
      <div className="btn-block">
        <Button className="button__add-to-cart" btnText="Додати в кошик"></Button>
        <img src={FavoriteIcon} alt="Favorite" className="favorite__icon" />
      </div>
      <div className="info-list">
        <div className="info-item">
          <img src={originalIcon} alt="Favorite" className="info-icon" /> Тільки оригінал
        </div>
        <div className="info-item">
          <img src={deliveryIcon} alt="Delivery" className="info-icon" /> Доставка 1-2 дні
        </div>
        <div className="info-item">
          <img src={exchangeIcon} alt="Exchange" className="info-icon" /> Легкий обмін та повернення
        </div>
        <div className="info-item">
          <img src={conditionsIcon} alt="Payment" className="info-icon" /> Умови оплати, доставки та повернення
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
