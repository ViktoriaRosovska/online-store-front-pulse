import { CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";
import { Pagination } from "components/Pagination/Pagination.jsx";

export const CardsList = ({ asyncData, cardfeature }) => {
  console.log(asyncData);
  // console.log(totalPages);
  if (!asyncData) return <div>Загрузка данных...</div>;
  return (
    <CardsListContainer>
      <ScrollToTop />
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
      <Pagination // onPageChange={onPageChange}
        // currentPage={page}
        totalPages={asyncData?.totalPages}
      />
    </CardsListContainer>
  );
};
