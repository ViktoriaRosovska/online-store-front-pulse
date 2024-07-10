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
import {
  addShopCartAddress,
  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
  addShopCartCity,
  addShopCartStreet,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import { DELIVERY } from "../../../utils/DELIVERY";

export const DeliveryCitySelect = ({ errors, values, setFieldValue }) => {
  console.log("errors", errors, values);
  console.log(values.city);
  const dispatch = useDispatch();
  const { city, deliveryType } = useSelector(selectUserShopCart);
  console.log(city);
  const [
    getCities,
    {
      data,
      // isError, isLoading
    },
  ] = useGetCitiesMutation();

  const [citySearch, setCitySearch] = useState(city?.Description);
  useEffect(() => {
    getCities(citySearch);
  }, [citySearch, getCities]);

  const onSelectCitySearch = value => {
    if (value !== "") setCitySearch(value);
  };

  const onSelectCityChange = value => {
    console.log(value);
    setFieldValue("city", value);

    setFieldValue("address", { Description: value?.label, city: value?.label });
    setFieldValue("street", {});
    if (deliveryType === DELIVERY.courier) {
      setFieldValue("addressDepartment", { Description: value?.label });
      setFieldValue("addressPoshtomat", { Description: value?.label });
      dispatch(addShopCartAddressDepartment({ Description: value?.label }));
      dispatch(addShopCartAddressPoshtomat({ Description: value?.label }));
    } else {
      setFieldValue("addressPoshtomat", {});
      setFieldValue("addressDepartment", {});
      dispatch(addShopCartAddressDepartment({}));
      dispatch(addShopCartAddressPoshtomat({}));
    }

    dispatch(addShopCartCity(value));
    dispatch(addShopCartStreet({}));

    dispatch(
      addShopCartAddress({ Description: value?.label, city: value?.label })
    );
  };

  return (
    <>
      <StyledDeliveryTitle>Обери адресу доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="city">
          Населений пункт&#42;
        </StyledSelectLabel>
        <div style={{ position: "relative" }}>
          <CitySelect
            errors={errors}
            options={data?.data}
            placeholder={"Введіть населений пункт"}
            onChange={e => onSelectCityChange(e)}
            onSearch={e => onSelectCitySearch(e)}
            displayCity={city}
            name="city"
          />
          {errors.city && <Error>{"Вкажіть населений пункт"}</Error>}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
