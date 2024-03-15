import { useNavigate } from "react-router-dom";
import { CardImage, CardPrice, CardTitle, CardWrapper, ImageWrapper, TextWrapper } from "./Card.styled.js";
import CardButton from "../Buttons/CardButton.jsx";

const Card = ({ info, image, price, id }) => {
  const navigate = useNavigate();

  const aLink = () => {
    navigate("/man/" + id);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        <CardImage src={image} />
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
