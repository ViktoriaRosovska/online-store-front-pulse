import { CardListWrapper, CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";
import { Pagination } from "components/Pagination/Pagination.jsx";

export const CardsList = ({ asyncData, cardfeature, onPageChange }) => {
  console.log("asyncData", asyncData);
  // console.log(totalPages);
  if (!asyncData) return <div>Загрузка данных...</div>;
  return (
    <CardsListContainer>
      <ScrollToTop />
      <CardListWrapper>
        {asyncData.products && asyncData.products.length > 0 ? (
          asyncData.products.map(el => {
            return (
              <Card
                key={el._id}
                info={el.name}
                image={el.imgThumbnail}
                price={el.basePrice}
                id={el._id}
                sale={el.sale}
                cardfeature={cardfeature}
              />
            );
          })
        ) : (
          <div>За вашим запитом нічого не знайдено</div>
        )}
      </CardListWrapper>

      <Pagination
        onChange={onPageChange}
        page={parseInt(asyncData?.page)}
        totalPages={asyncData?.totalPages}
      />
    </CardsListContainer>
  );
};
