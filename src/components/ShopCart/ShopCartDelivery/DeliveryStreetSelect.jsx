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

  const onSelectStreetSearch = value => {
    // console.log("onSelectStreetSearch", value, streetSearch);
    if (value !== "") setStreetSearch(value?.Description);
  };

  const onSelectStreetChange = value => {
    // console.log("onSelectStreetChange", value);
    dispatch(addShopCartStreet(value));
  };

  const onSelectStreetBlur = e => {
    const search = e.target.value;
    //console.log("onSelectStreetBlur", search, e.target.value);
    if (search) {
      const street = { value: search, label: search, Description: search };
      dispatch(addShopCartStreet(street));
    }
  };

  useEffect(() => {
    if (city && city.Ref) getStreets(city.Ref, streetSearch);
  }, [streetSearch, getStreets, city]);

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel htmlFor="street">
        Вкажіть назву вулиці&#42;
      </StyledSelectLabel>
      <StreetSelect
        options={data?.data}
        placeholder="Вулиця"
        onChange={e => onSelectStreetChange(e)}
        onSearch={e => onSelectStreetSearch(e)}
        onBlur={e => onSelectStreetBlur(e)}
        // value={selectStreetSearch}
        name="street"
        displayStreet={street}
      />
    </StyledSelectWrapper>
  );
};
