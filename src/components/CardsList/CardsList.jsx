import { CardListWrapper, CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";
import { Pagination } from "components/Pagination/Pagination.jsx";
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesQuery,
} from "../../redux/user/userSlice/userApi.js";
import { useCallback } from "react";

export const CardsList = ({
  data,
  cardfeature,
  onPageChange,
  filterQuery,
  isFetching,
  isError,
  isFavoritePage,
  totalPages,
  page,
}) => {
  // const { data: favorites } = useGetFavoritesQuery();

  const { data: favorites, isError: isFavoriteError } = useGetFavoritesQuery();
  const [addToFavorites] = useAddToFavoritesMutation();
  const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

  const deletFav = useCallback(async ({ productId }) => {
    await deleteFromFavorites({ productId });
  }, [deleteFromFavorites]);

  const addFav = useCallback(({ productId }) => {
    addToFavorites({ productId });
  }, [addToFavorites]);

  if (isFetching) return <div>Йде завантаження даних...</div>;
  if (isError)
    return (
      <div>
        Виникла помилка на сервері. Перезавантажте сторінку або зайдіть у
        магазин пізніше
      </div>
    );
  return (
    <CardsListContainer>
      <ScrollToTop />
      <CardListWrapper>
        {!isFetching && data?.length > 0 ? (
          data?.map((el, idx) => {
            return (
              <Card
                key={el._id + "#" + idx}
                info={el.name}
                image={el.imgThumbnail}
                price={el.basePrice}
                id={el._id}
                sale={el.sale}
                cardfeature={cardfeature}
                filterQuery={filterQuery}
                favorites={isFavoriteError ? [] : favorites}
                deleteFromFavorites={deletFav}
                addToFavorites={addFav}
              />
            );
          })
        ) : (
          <div>За вашим запитом нічого не знайдено</div>
        )}
      </CardListWrapper>

      {!isFetching && data?.length > 0 && !isFavoritePage ? (
        <Pagination
          onChange={onPageChange}
          // page={parseInt(page)}
          page={page}
          totalPages={totalPages}
        />
      ) : null}
    </CardsListContainer>
  );
};
