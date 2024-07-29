import useMediaQuery from "../../../hooks/useMediaQuery";
import { ReactComponent as LogoLover_sm } from "../../../assets/svg/heart_sm.svg";
import { ReactComponent as LogoLoverRed_sm } from "../../../assets/svg/heart_sm_red.svg";
import { ReactComponent as LogoLover_lg } from "../../../assets/svg/heart_lg.svg";
import { ReactComponent as LogoLoverRed_lg } from "../../../assets/svg/heart_lg_red.svg";
import { FavoriteBtn } from "./FavoriteButton.styled";
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesQuery,
} from "../../../redux/user/userSlice/userApi";
import { selectUserToken } from "../../../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addLocalFavorites } from "../../../redux/auth/auth";

function FavoriteButton(props) {
  const { data: favorites } = useGetFavoritesQuery();
  const [addToFavorites] = useAddToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();
  const isLoggedIn = useSelector(selectUserToken);
  const [favoriteState, setFavoriteState] = useState(false);

  const productId = props.productId;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      setFavoriteState(favorites?.some(el => el._id === productId));
    } else {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavoriteState(storedFavorites.includes(productId));

      dispatch(addLocalFavorites([...storedFavorites]));
    }
  }, [favorites, productId, isLoggedIn, dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
      if (storedFavorites && storedFavorites.length > 0) {
        storedFavorites.forEach(productId => {
          addToFavorites({ productId });
        });
        localStorage.removeItem("favorites");
      }
    }
  }, [isLoggedIn, addToFavorites]);

  const toggleFavorite = event => {
    event.preventDefault();
    if (isLoggedIn) {
      if (favoriteState) {
        setFavoriteState(false);
        deleteFromFavorites({ productId });
      } else {
        setFavoriteState(true);
        addToFavorites({ productId });
      }
    } else {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favoriteState
        ? storedFavorites.filter(favId => favId !== productId)
        : [...storedFavorites, productId];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavoriteState(!favoriteState);
      dispatch(
        addLocalFavorites([...JSON.parse(localStorage.getItem("favorites"))])
      );
    }
  };

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  return (
    <FavoriteBtn
      $productInfo={props.productInfo}
      $sales={props.$sales}
      $new={props.$new}
      type={"button"}
      onClick={toggleFavorite}
    >
      {!isDesktop && favoriteState && <LogoLoverRed_sm />}
      {!isDesktop && !favoriteState && <LogoLover_sm />}
      {isDesktop && favoriteState && <LogoLoverRed_lg />}
      {isDesktop && !favoriteState && <LogoLover_lg />}
    </FavoriteBtn>
  );
}

export default FavoriteButton;
