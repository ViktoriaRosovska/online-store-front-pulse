import { useLocation, useNavigate } from "react-router-dom";
import { CardImage, CardPrice, CardTitle, CardWrapper, ImageWrapper, TextWrapper } from "./Card.styled.js";
import CardButton from "../Buttons/CardButton/CardButton.jsx";
import FavoriteButton from "../Buttons/FavoriteButton/FavoriteButton.jsx";
import { SaleBand } from "../salesComponents/SaleBand/SaleBand.jsx";
import { SalePercent } from "../salesComponents/SalePercent/SalePercent.jsx";

const Card = ({ info, image, price, id, sale }) => {
  const navigate = useNavigate();
  const sales = useLocation().pathname === "/sales";
  const aLink = () => {
    navigate(`/${id}`);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        {sales ? <SaleBand text={"SALE"} /> : null}
        <CardImage src={image} $sales={sales} />
        <FavoriteButton $sales={sales} />
        {sales ? <SalePercent text={sale} /> : null}
      </ImageWrapper>
      <TextWrapper>
        <CardTitle>{info}</CardTitle>
        {sales ? <span style={{ marginRight: "5px", textDecoration: "line-through" }}>{price}грн</span> : null}
        <CardPrice $sales={sales}>{`${Math.ceil(price - (price * sale) / 100)} грн`}</CardPrice>
      </TextWrapper>
      <CardButton text={"Купити"} click={aLink} />
    </CardWrapper>
  );
};

export default Card;
