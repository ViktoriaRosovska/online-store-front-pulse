import { useNavigate } from "react-router-dom";
import {
  CardImage,
  CardPrice,
  CardTitle,
  CardWrapper,
  ImageWrapper,
  TextWrapper,
} from "./Card.styled.js";
import CardButton from "../Buttons/CardButton/CardButton.jsx";
import FavoriteButton from "../Buttons/FavoriteButton/FavoriteButton.jsx";
import { SaleBand } from "../salesComponents/SaleBand/SaleBand.jsx";
import { SalePercent } from "../salesComponents/SalePercent/SalePercent.jsx";

const Card = ({ info, image, price, id, sale, cardfeature }) => {
  const navigate = useNavigate();
  const sales = cardfeature === "sales";

  const newBrands = cardfeature === "newbrands";
  const aLink = () => {
    navigate(`/${id}`);
  };

  return (
    <CardWrapper>
      <ImageWrapper>
        {sales && sale > 0 ? (
          <SaleBand text={"SALE"} $background={"#fef746"} color={"black"} />
        ) : null}
        {newBrands ? (
          <SaleBand text={"NEW"} $background={"#495C80"} color={"#E9E9E9"} />
        ) : null}
        <div style={{ width: "320px", height: "320px" }}>
          <CardImage src={image} $sales={sales} />
        </div>

        <FavoriteButton $sales={sales && sale > 0} $new={newBrands} />
        {sales && sale > 0 ? <SalePercent text={sale} /> : null}
      </ImageWrapper>
      <TextWrapper>
        <CardTitle className="shoes-title">{info}</CardTitle>
        {sales && sale > 0 ? (
          <span style={{ marginRight: "5px", textDecoration: "line-through" }}>
            {price}грн
          </span>
        ) : null}
        <CardPrice $sales={sales && sale > 0}>{`${Math.ceil(
          price - (price * sale) / 100
        )} грн`}</CardPrice>
      </TextWrapper>
      <CardButton text={"Купити"} click={aLink} />
    </CardWrapper>
  );
};

export default Card;
