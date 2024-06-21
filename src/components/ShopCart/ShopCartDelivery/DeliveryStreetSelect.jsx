import { useDispatch, useSelector } from "react-redux";
import { StreetSelect } from "../SelectComponents/StreetSelect";
import {
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { addShopCartStreet } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useGetStreetsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { useEffect, useState } from "react";

export const DeliveryStreetSelect = () => {
  const { city, street } = useSelector(selectUserShopCart);
  const [streetSearch, setStreetSearch] = useState(street?.Description);
  const dispatch = useDispatch();
  const [getStreets, { data }] = useGetStreetsMutation();

  const onSelectStreetSearch = (ref, value) => {
    // console.log("onSelectStreetSearch", ref, value);
    if (value !== "") setStreetSearch(value?.Description);
  };

  const onSelectStreetChange = value => {
    // console.log("onSelectStreetChange", value);
    dispatch(addShopCartStreet(value));
  };

  useEffect(() => {
    getStreets(city.Ref, streetSearch);
  }, [streetSearch, getStreets]);
  return (
    <StyledSelectWrapper>
      <StyledSelectLabel htmlFor="street">
        Вкажіть назву вулиці
      </StyledSelectLabel>
      <StreetSelect
        options={data?.data}
        placeholder="Вулиця"
        onChange={e => {
          onSelectStreetChange(e);
        }}
        onSearch={e => onSelectStreetSearch(city.Ref, e)}
        // value={selectStreetSearch}
        name="street"
        displayStreet={street}
      />
    </StyledSelectWrapper>
  );
};
