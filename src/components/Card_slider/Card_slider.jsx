import CardButton from "../Buttons/CardButton";
import "./Card_slider.css";
import {ReactComponent as LogoLover} from './../../../public/icons/favorites-icon.svg'
import { useNavigate} from "react-router-dom";

const Card_slider = ({ info, image, price, id }) => {
  const navigate = useNavigate();

  const aLink = () => {
    navigate("/man/" + id);
  };

  return (
    <div className="card-slider">
      <img src={image} />

        <LogoLover   className="loves"/>



      <p>{info}</p>
      <p>{`${price} грн`}</p>
      <CardButton text={"Купити"} click={aLink} />
    </div>
  );
};

export default Card_slider;
