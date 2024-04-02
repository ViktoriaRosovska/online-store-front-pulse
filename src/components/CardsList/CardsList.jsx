import { CardsListContainer } from "./CardsList.styled.js";
import Card from "../Card/Card.jsx";
import { ScrollToTop } from "../../components/ScrollToTop.js";

export const CardsList = (props) => {
  console.log(props.asyncData);

  if (!props.asyncData) return <div>Загрузка данных...</div>;
  return (
    <CardsListContainer>
      <ScrollToTop />
      {props.asyncData.products && props.asyncData.products.length > 0 ? (
        props.asyncData.products.map((el) => {
          return (
            <Card key={el._id} info={el.name} image={el.imgThumbnail} price={el.basePrice} id={el._id} sale={el.sale} />
          );
        })
      ) : (
        <div>За вашим запитом нічого не знайдено</div>
      )}
    </CardsListContainer>
  );
};
