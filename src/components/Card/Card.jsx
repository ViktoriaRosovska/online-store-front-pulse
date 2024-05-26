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
import { useLocation } from "react-router-dom";
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  // useGetFavoritesQuery,
} from "../../redux/user/userSlice/userApi.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/auth/selectors.js";

const Card = ({
  info,
  image,
  price,
  id,
  sale,
  cardfeature,
  filterQuery,
  cardSlider,
  favorites,
}) => {
  const [addToFavorites] = useAddToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

const isLoggedIn = useSelector(selectUserToken)

  const [favoriteState, setFavoriteState] = useState(false);

  useEffect(() => {
    setFavoriteState(favorites?.some(el => el._id === id));
  }, [favorites, id]);

  const sales = cardfeature === "sales";
  const newBrands = cardfeature === "newbrands";
  const location = useLocation().pathname;

  const toggleFavorite = event => {
    event.preventDefault();

    if (isLoggedIn) {
      if (favoriteState) {
        setFavoriteState(false)
        deleteFromFavorites({productId: id})
      } else {
        setFavoriteState(true)
        addToFavorites({productId: id})
      }
    } else {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
      const updatedFavorites = favoriteState ? storedFavorites.filter(favId => favId !== id) : [...storedFavorites, id]
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setFavoriteState(!favoriteState)
    }

    // if (favoriteState) {
    //   setFavoriteState(false);
    //   deleteFromFavorites({ productId: id });
    // } else {
    //   setFavoriteState(true);
    //   addToFavorites({ productId: id });
    // }
  };

  return (
    <StyledCardLink
      to={{
        pathname: `${ROUTES.HOME}${id}`,
        ...(filterQuery?.size && {
          search: `size=${filterQuery?.size}`,
        }),
      }}
      state={{ from: location }}
    >
      <CardWrapper $isFavorite={favoriteState} $cardSlider={cardSlider}>
        <ImageWrapper>
          {sales && sale > 0 ? (
            <SaleBand text={"SALE"} $background={"#fef746"} color={"black"} />
          ) : null}
          {newBrands ? (
            <SaleBand text={"NEW"} $background={"#495C80"} color={"#E9E9E9"} />
          ) : null}

          <CardImage src={image} $sales={sales} $cardSlider={cardSlider} />
          <FavoriteButton
            $sales={sales && sale > 0}
            $new={newBrands}
            onClick={toggleFavorite}
            isFavorite={favoriteState}
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
  );
};

export default Card;
