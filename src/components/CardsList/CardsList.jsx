import { CardListWrapper, CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";
import { Pagination } from "components/Pagination/Pagination.jsx";
import { useGetFavoritesQuery } from "../../redux/user/userSlice/userApi.js";

export const CardsList = ({
  data,
  cardfeature,
  onPageChange,
  filterQuery,
  isFetching,
  isError,
  isFavoritePage,
}) => {
  const { data: favorites } = useGetFavoritesQuery();

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
          data?.map(el => {
            return (
              <Card
                key={el._id}
                info={el.name}
                image={el.imgThumbnail}
                price={el.basePrice}
                id={el._id}
                sale={el.sale}
                cardfeature={cardfeature}
                filterQuery={filterQuery}
                favorites={favorites}
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
          page={parseInt(data?.page)}
          totalPages={data?.totalPages}
        />
      ) : null}
    </CardsListContainer>
  );
};
