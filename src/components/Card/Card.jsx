// import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CardImage,
  CardPrice,
  CardTitle,
  CardWrapper,
  ImageWrapper,
  StyledCardPriceWrapper,
  TextWrapper,
} from "./Card.styled.js";
import CardButton from "../Buttons/CardButton/CardButton.jsx";
import FavoriteButton from "../Buttons/FavoriteButton/FavoriteButton.jsx";
import { SaleBand } from "../salesComponents/SaleBand/SaleBand.jsx";
import { SalePercent } from "../salesComponents/SalePercent/SalePercent.jsx";
import { ROUTES } from "../../utils/routes.js";

const Card = ({
  info,
  image,
  price,
  id,
  sale,
  cardfeature,
  filterQuery,
  cardSlider,
}) => {
  // const navigate = useNavigate();
  const sales = cardfeature === "sales";

  const newBrands = cardfeature === "newbrands";
  // const aLink = () => {
  //   navigate(`/${id}?size=${filterQuery.size}`);
  // };

  return (
    <CardWrapper $cardSlider={cardSlider}>
      <ImageWrapper>
        {sales && sale > 0 ? (
          <SaleBand text={"SALE"} $background={"#fef746"} color={"black"} />
        ) : null}
        {newBrands ? (
          <SaleBand text={"NEW"} $background={"#495C80"} color={"#E9E9E9"} />
        ) : null}

        <CardImage src={image} $sales={sales} $cardSlider={cardSlider} />

        <FavoriteButton $sales={sales && sale > 0} $new={newBrands} />
        {sales && sale > 0 ? <SalePercent text={-sale} /> : null}
      </ImageWrapper>
      <TextWrapper>
        <CardTitle className="shoes-title">{info}</CardTitle>
        <StyledCardPriceWrapper>
          {sales && sale > 0 ? (
            <span
              style={{
                marginRight: "5px",
                textDecoration: "line-through",
                lineHeight: "20px",
              }}
            >
              {price}грн
            </span>
          ) : null}
          <CardPrice $sales={sales && sale > 0}>{`${Math.ceil(
            price - (price * sale) / 100
          )} грн`}</CardPrice>
        </StyledCardPriceWrapper>
      </TextWrapper>
      {/* <CardButton text={"Купити"} click={aLink} /> */}

      <CardButton
        text={"Купити"}
        route={{
          pathname: `${ROUTES.HOME}${id}`,
          ...(filterQuery.size && { search: `size=${filterQuery.size}` }),
        }}
      />

      {/* <Link to={{ pathname: `/${id}`, search: `size=${filterQuery.size}` }}>
        Купити TEST
      </Link> */}
    </CardWrapper>
  );
};

export default Card;
