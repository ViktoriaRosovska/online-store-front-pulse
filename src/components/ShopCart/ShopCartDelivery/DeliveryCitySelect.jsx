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
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const DeliveryCitySelect = ({ errors, values, setFieldValue }) => {
  console.log("errors", errors, values);
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
    setFieldValue("city", value);
    dispatch(addShopCartCity(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Обери адресу доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="city">
          Населений пункт&#42;
        </StyledSelectLabel>
        <CitySelect
          options={data?.data}
          placeholder={"Введіть населений пункт"}
          onChange={e => onSelectCityChange(e)}
          onSearch={e => onSelectCitySearch(e)}
          displayCity={city}
          name="city"
          // value={values.city}
        />
        {errors.city && <Error>{errors.city}</Error>}
      </StyledSelectWrapper>
    </>
  );
};
