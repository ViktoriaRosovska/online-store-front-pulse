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
// import { calculateTotalPrice } from "../../../../utils/calculateTotalPrice";
import { formatOrderDate } from "../../../../utils/formatOrderDate";
import { formatPrice } from "../../../../utils/formatPrice";

const UserOrderHistoryItem = ({ item }) => {
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

  const arrowSvg = isOrderDetailsOpen ? <DownSvg /> : <UpSvg />;

  const toggleOrderDetailsMenu = () => {
    setIsOrderDetailsOpen(!isOrderDetailsOpen);
  };

  // const imageCount = 1;

  const status = item?.status === "pending" ? "Оформлений" : "Доставлений";

  return (
    <>
      <Item>
        <Box $status={status}>
          <Info>
            <OrderNumber>
              <span>Замовлення №{item._id.slice(0, 14)},</span>
              <span>{formatOrderDate(item.orderDate)}</span>
            </OrderNumber>
            <Status>{status}</Status>
          </Info>

          <div style={{ minWidth: "70px", whiteSpace: "nowrap" }}>
            <SumUp>Підсумок</SumUp>

            <p>{formatPrice(item.priceSum)}</p>
          </div>
          <ImageThumb>
            <Image
              key={item.products[0].productId?._id}
              src={item.products[0].productId?.imgThumbnail}
              alt={item.products[0].productId?.name}
              // $count={imageCount}
              // style={{ width: "43" }}
            />
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
