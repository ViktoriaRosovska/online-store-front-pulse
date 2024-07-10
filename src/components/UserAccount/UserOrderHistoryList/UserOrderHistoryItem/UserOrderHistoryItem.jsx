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
import { ReactComponent as UpSvg } from "../../../../assets/svg/up.svg";
import { ReactComponent as DownSvg } from "../../../../assets/svg/down.svg";
import UserOrderHistoryDetailsList from "../../UserOrderHistoryDetailsList/UserOrderHistoryDetailsList";
import { calculateTotalPrice } from "../../../../utils/calculateTotalPrice";
import { formatOrderDate } from "../../../../utils/formatOrderDate";
import { formatPrice } from "../../../../utils/formatPrice";

const UserOrderHistoryItem = ({ item }) => {
  console.log("UserOrderHistoryItem  item", item)
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

  const arrowSvg = isOrderDetailsOpen ? <DownSvg /> : <UpSvg />;

  const toggleOrderDetailsMenu = () => {
    setIsOrderDetailsOpen(!isOrderDetailsOpen);
  };

  const imageCount = item?.products.length;

  const status = item?.status === 'pending' ? "Оформлений" : "Доставлений"

  return (
    <>
      <Item>
        <Box $status={status}>
          <Info>
            <OrderNumber>
              Замовлення №{(item._id).slice(0, 14)}, {formatOrderDate(item.orderDate)}
            </OrderNumber>
            <Status>{status}</Status>
          </Info>
          <div>
            <SumUp>Підсумок</SumUp>
            <p>{formatPrice(calculateTotalPrice(item.products))}</p>
          </div>
          <ImageThumb>
            {item?.products.map(product => (
              <Image
                key={product.productId._id}
                src={product.productId.imgThumbnail}
                alt={product.productId.name}
                $count={imageCount}
                style={{ width: "43" }}
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
