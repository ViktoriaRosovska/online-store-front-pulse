import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { CitySelect } from "../SelectComponents/CitySelect";
import { useGetCitiesMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { addShopCartCity } from "../../../redux/user/userShopCart/userShopCartSlice";

export const DeliveryCitySelect = () => {
  const dispatch = useDispatch();
  const { city } = useSelector(selectUserShopCart);

  const [
    getCities,
    {
      data,
      // isError, isLoading
    },
  ] = useGetCitiesMutation();

  const [citySearch, setCitySearch] = useState(city.Description);
  useEffect(() => {
    getCities(citySearch);
  }, [citySearch, getCities]);

  const onSelectCitySearch = value => {
    if (value !== "") setCitySearch(value);
  };

  const onSelectCityChange = value => {
    dispatch(addShopCartCity(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Обери адресу доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="city">Населений пункт</StyledSelectLabel>
        <CitySelect
          options={data?.data}
          placeholder={"Введіть населений пункт"}
          onChange={e => onSelectCityChange(e)}
          onSearch={e => onSelectCitySearch(e)}
          displayCity={city}
          name="city"
        />
      </StyledSelectWrapper>
    </>
  );
};
