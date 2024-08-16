import { formatPrice } from "../../../../utils/formatPrice";
import {
  Box,
  Image,
  InfoContainer,
  Item,
  Price,
  Quantity,
  Size,
} from "./UserOrderHistoryDetailsItem.styled";

const UserOrderHistoryDetailsItem = ({ product }) => {
  // const calculateTotalPrice = product => {
  //   return product?.priceByOne * product?.quantity;
  // };

  return (
    <>
      <Item>
        <Image
          src={product?.productId.imgThumbnail}
          alt={product?.productId.name}
        />
        <InfoContainer>
          <Box>
            <h3>{product?.productId.name}</h3>
            <Size>{product?.sizeId.value} розмір</Size>
          </Box>
          <Quantity>{product?.quantity} шт.</Quantity>
        </InfoContainer>
        {/* <Price>{formatPrice(calculateTotalPrice(product))}</Price> */}
        <Price>{formatPrice(product.priceByOne)}</Price>
      </Item>
    </>
  );
};

export default UserOrderHistoryDetailsItem;
