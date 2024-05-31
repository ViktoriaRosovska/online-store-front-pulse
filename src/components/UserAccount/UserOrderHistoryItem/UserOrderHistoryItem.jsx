import { useState } from "react";
import {
  Box,
  Button,
  Image,
  ImageThumb,
  Info,
  Item,
  OrderNumber,
  Status,
  SumUp,
} from "./UserOrderHistoryItem.styled";
import { ReactComponent as UpSvg } from "../../../assets/svg/up.svg";
import { ReactComponent as DownSvg } from "../../../assets/svg/down.svg";
import UserOrderHistoryDetailsList from "../UserOrderHistoryDetailsList/UserOrderHistoryDetailsList";
import { calculateTotalPrice } from "../../../utils/calculateTotalPrice";

const UserOrderHistoryItem = ({ item }) => {
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

  const arrowSvg = isOrderDetailsOpen ? <DownSvg /> : <UpSvg />;

  const toggleOrderDetailsMenu = () => {
    setIsOrderDetailsOpen(!isOrderDetailsOpen);
  };

  const imageCount = item?.products.length;

  //   const calculateTotalPrice = products => {
  //     return products.reduce((total, product) => {
  //       return total + product.quantity * product.priceByOne;
  //     }, 0);
  //   };

  return (
    <>
      <Item>
        <Box>
          <Info>
            <OrderNumber>
              Замовлення №{item._id}2345-45637, {item.date}
            </OrderNumber>
            <Status>{item.status}</Status>
          </Info>
          <div>
            <SumUp>Підсумок</SumUp>
            <p>{calculateTotalPrice(item.products)} грн.</p>
          </div>
          <ImageThumb>
            {item?.products.map(product => (
              <Image
                key={product.productId._id}
                src={product.productId.imgThumbnail}
                alt={product.productId.name}
                    $count={imageCount}
                    style={{width: '43'}}
              />
            ))}
          </ImageThumb>
        </Box>
        <Button type="button" onClick={toggleOrderDetailsMenu}>
          {arrowSvg}
        </Button>
      </Item>
      {isOrderDetailsOpen && <UserOrderHistoryDetailsList item={item} />}
    </>
  );
};

export default UserOrderHistoryItem;
