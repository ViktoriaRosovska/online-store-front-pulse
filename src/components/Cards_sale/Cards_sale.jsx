import "./Cards_sale.css";
import Button from "../Buttons/CardButton/CardButton.jsx";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoLover } from "./../../../public/icons/favorites-icon.svg";
const CardsSale = ({ image, info, price, sale, id, sales }) => {
  const navigate = useNavigate();

  const aLink = () => {
    navigate(`/${id}`);
  };

  return (
    <>
      <div className="card_sale">
        <div className="card_line">
          <p className="card_price-sale">SALE</p>
        </div>
        <img src={image} />
        <LogoLover className={"love"} />
        <div className={"percent"}>{`-${sales}%`}</div>
        <p className="card_info">{info}</p>
        <span className="card_price">{`${price} грн`} </span>
        <span className="card_price-sale">{`${sale} грн`}</span>
        <Button style={{ width: "285px", height: "30px" }} text={"Купити"} click={aLink} />
      </div>
    </>
  );
};

export default CardsSale;
