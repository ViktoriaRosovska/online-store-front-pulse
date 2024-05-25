import { useGetFavoritesQuery } from "../../redux/user/userSlice/userApi";
import { CardsList } from "../../components/CardsList/CardsList";
import { Title } from "../../components/Typography/Typography.styled";

const UserFavorites = () => {
  const { data, isFetching, isError } = useGetFavoritesQuery();

  return (
    <>
      <Title style={{ textAlign: "left" }}>Улюблене</Title>
      {data ? (
        <CardsList
          data={data}
          isFetching={isFetching}
          isError={isError}
          isFavoritePage={true}
        />
      ) : (
        <div>Ваш список улюбленого пустий.</div>
      )}
    </>
  );
};

export default UserFavorites;
