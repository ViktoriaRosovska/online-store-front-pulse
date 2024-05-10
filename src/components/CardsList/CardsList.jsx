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
}) => {
  // console.log("data", data?.products);
  // console.log(totalPages);
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
