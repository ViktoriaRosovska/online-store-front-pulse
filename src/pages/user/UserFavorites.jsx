import { useGetFavoritesQuery } from "../../redux/user/userSlice/userApi";
import { CardsList } from "../../components/CardsList/CardsList";

const UserFavorites = () => {
    const { data, isFetching, isError } = useGetFavoritesQuery();
  console.log("UserFavorites  data", data);
    
    return (
        <>
            <h1>Улюблене</h1>
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