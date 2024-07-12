import { useSelector } from "react-redux";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { createUserAddress } from "../../../utils/createUserAddress";

export const DeliveryCourierAddress = () => {
  const {
    address: { street, numberHoll, numberHouse, flat, comments },
  } = useSelector(selectUserShopCart);

  return (
    <>
      <p>{createUserAddress(street, numberHouse, numberHoll, flat)}</p>
      {comments ? <p>{comments}</p> : null}
    </>
  );
};
