import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const DeliveryCourierAddress = () => {
  const { street, numberHouse, numberHoll, flat } =
    useSelector(selectUserShopCart);
  return (
    <p>
      {street?.StreetsType +
        " " +
        street?.Description +
        ", " +
        "будинок " +
        numberHouse +
        ", " +
        "під'їзд " +
        numberHoll +
        ", " +
        "квартира " +
        flat}
    </p>
  );
};
