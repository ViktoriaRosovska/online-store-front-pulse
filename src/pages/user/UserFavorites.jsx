import { useAddToFavoritesMutation, useGetFavoritesQuery } from "../../redux/user/userSlice/userApi";
import { CardsList } from "../../components/CardsList/CardsList";
import { Title } from "../../components/Typography/Typography.styled";
import { useEffect } from "react";

const UserFavorites = () => {
  const { data, isFetching, isError } = useGetFavoritesQuery();
  console.log("UserFavorites  data", data)
  const [addToFavorites] = useAddToFavoritesMutation();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites && favorites.length > 0) {
      favorites.forEach(productId => {
          addToFavorites({productId})
      })
      localStorage.removeItem('favorites')
    }
  }, [addToFavorites])

  return (
    <>
      <Title style={{ textAlign: "left" }}>Улюблене</Title>
      {/* {data && data.length > 0 ? (
        <CardsList
          data={data}
          isFetching={isFetching}
          isError={isError}
          isFavoritePage={true}
        />
      ) : (
        <div>Ваш список улюбленого пустий.</div>
      )} */}
      {isError ? (
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
