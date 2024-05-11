import { useGetFavoritesQuery } from "../../redux/user/userSlice/userApi";
import { CardsList } from "../../components/CardsList/CardsList";
import { Title } from "../../components/Typography/Typography.styled";

const UserFavorites = () => {
    const { data, isFetching, isError } = useGetFavoritesQuery();
  console.log("UserFavorites  data", data);
    
    return (
        <>
            <Title style={{textAlign: "left"}}>Улюблене</Title>
            <CardsList
                data={data}
                isFetching={isFetching}
                isError={isError}
                isFavoritePage
            />
        </>
    )
}

export default UserFavorites