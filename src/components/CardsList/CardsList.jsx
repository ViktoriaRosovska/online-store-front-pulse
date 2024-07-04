import { CardListWrapper, CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";
import { Pagination } from "components/Pagination/Pagination.jsx";

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
