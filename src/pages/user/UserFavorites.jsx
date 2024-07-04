import { useEffect } from "react";
import {
  useAddToFavoritesMutation,
  useGetFavoritesQuery,
} from "../../redux/user/userSlice/userApi";
import { CardsList } from "../../components/CardsList/CardsList";
import { Title } from "../../components/Typography/Typography.styled";

const UserFavorites = () => {
  const { data, isFetching, isError } = useGetFavoritesQuery();
  const [addToFavorites] = useAddToFavoritesMutation();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites && favorites.length > 0) {
      favorites.forEach(productId => {
        addToFavorites({ productId });
      });
      localStorage.removeItem("favorites");
    }
  }, [addToFavorites]);

  return (
    <>
      <Title style={{ textAlign: "left" }}>Улюблене</Title>
      {!data?.length > 0 ? (
        <div>Ваш список улюбленого пустий.</div>
      ) : (
        <CardsList
          data={data}
          isFetching={isFetching}
          isError={isError}
          isFavoritePage={true}
        />
      )}
    </>
  );
};

export default UserFavorites;
