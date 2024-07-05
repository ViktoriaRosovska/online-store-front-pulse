// import moment from "moment";
import {
  // StyledDate,
  StyledImageWrapper,
  StyledOrderDateInfoWrapper,
  StyledTextInfoWrapper,
  StyledTextPlacement,
} from "./DeliveryOrderDateInfo.styled";

export const DeliveryOrderDateInfo = ({ products, deliveryType }) => {
  console.log(products);
  const today = new Date();
  let nextDay = new Date();

  const hour = today.getHours();
  if (hour <= 12) {
    nextDay.setDate(nextDay.getDate() + 2);
  } else {
    today.setDate(today.getDate() + 1);
    nextDay.setDate(nextDay.getDate() + 3);
  }

  // const orderDay = moment(today).format("DD.MM");
  // const deliveryDay = moment(nextDay).format("DD.MM");

  return (
    <StyledOrderDateInfoWrapper>
      <StyledImageWrapper>
        <img src={products[0].data.imgThumbnail} />
      </StyledImageWrapper>

      <StyledTextInfoWrapper>
        <StyledTextPlacement>
          Твоє замовлення буде доставлено:
        </StyledTextPlacement>
        {/* <StyledDate>{orderDay + " - " + deliveryDay}</StyledDate> */}
        <p>{deliveryType}</p>
      </StyledTextInfoWrapper>
    </StyledOrderDateInfoWrapper>
  );
};
