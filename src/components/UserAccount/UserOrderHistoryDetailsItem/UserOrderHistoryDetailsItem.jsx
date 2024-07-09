import { formatPrice } from "../../../utils/formatPrice";
import { Box, Image, InfoContainer, Item, Price, Quantity, Size } from "./UserOrderHistoryDetailsItem.styled";

const UserOrderHistoryDetailsItem = ({ product }) => {
console.log("UserOrderHistoryDetailsItem  product", product)

  const calculateTotalPrice = product => {
    return product?.priceByOne * product?.quantity;
  };

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
            <Size>{product?.sizeId} розмір</Size>
          </Box>
          <Quantity>{product?.quantity} шт.</Quantity>
        </InfoContainer>
        <Price>{formatPrice(calculateTotalPrice(product))}</Price>
      </Item>
    </>
  );
};

export default UserOrderHistoryDetailsItem;
