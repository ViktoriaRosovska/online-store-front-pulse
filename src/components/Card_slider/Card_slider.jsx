import CardButton from "../Buttons/CardButton/CardButton";
import "./Card_slider.css";
import { ReactComponent as LogoLover } from "./../../../public/icons/favorites-icon.svg";
import { useNavigate } from "react-router-dom";

const Card_slider = ({ info, image, price, id }) => {
  const navigate = useNavigate();

  const aLink = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="card-slider">
      <img src={image} />

      <LogoLover className="loves" />

      <p>{info}</p>
      <p>{`${price} грн`}</p>
      <CardButton style={{ width: "285px", height: "30px" }} text={"Купити"} click={aLink} />
    </div>
  );
};

export default Card_slider;
