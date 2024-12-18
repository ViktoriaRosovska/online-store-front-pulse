import { useLocation } from "react-router-dom";
import {
  CardButtonContainer,
  CardImage,
  CardPrice,
  CardTitle,
  CardWrapper,
  ImageWrapper,
  StyledCardLink,
  StyledCardPriceWrapper,
  TextWrapper,
} from "./Card.styled.js";
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
  const sales = cardfeature === "sales";
  const newBrands = cardfeature === "newbrands";
  const location = useLocation().pathname;
  // console.log("image", image);
  const resizeImgLink = image.indexOf("upload/") + 7;
  const tempStr = image.substring(0, resizeImgLink) + "w_500/";
  const tempEnd = image.substring(resizeImgLink, image.length);
  const newLink = tempStr + tempEnd;
  // console.log(newLink);
  return (
    <li style={{ listStyle: "none" }}>
      <StyledCardLink
        to={{
          pathname: `${ROUTES.HOME}${id}`,
          ...(filterQuery?.size && {
            search: `size=${filterQuery?.size}`,
          }),
        }}
        state={{ from: location }}
      >
        <CardWrapper $cardSlider={cardSlider}>
          <ImageWrapper>
            {sales && sale > 0 ? (
              <SaleBand text={"SALE"} $background={"#fef746"} color={"black"} />
            ) : null}
            {newBrands ? (
              <SaleBand
                text={"NEW"}
                $background={"#495C80"}
                color={"#E9E9E9"}
              />
            ) : null}

            <CardImage
              src={newLink}
              $sales={sales}
              $cardSlider={cardSlider}
              // loading="lazy"
            />

            <FavoriteButton
              $sales={sales && sale > 0}
              $new={newBrands}
              productId={id}
            />
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
          <CardButtonContainer>Купити</CardButtonContainer>
        </CardWrapper>
      </StyledCardLink>
    </li>
  );
};

export default Card;
