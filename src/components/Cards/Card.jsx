import { useNavigate } from "react-router-dom";
import { CardImage, CardPrice, CardTitle, CardWrapper, ImageWrapper, TextWrapper } from "./Card.styled.js";
import CardButton from "../Buttons/CardButton.jsx";
import FavoriteButton from "../Buttons/favorite-button/FavoriteButton.jsx";

const Card = ({ info, image, price, id }) => {
  const navigate = useNavigate();

  const aLink = () => {
    navigate(`/${id}`);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <CardImage src={image} />
        <FavoriteButton />
      </ImageWrapper>
      <TextWrapper>
        <CardTitle>{info}</CardTitle>
        <CardPrice>{`${price} грн`}</CardPrice>
      </TextWrapper>
      <CardButton text={"Купити"} click={aLink} />
    </CardWrapper>
  );
};

export default Card;
