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
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const DeliveryCitySelect = ({ errors, setFieldValue }) => {
  const dispatch = useDispatch();
  const { address } = useSelector(selectUserShopCart);

  const [
    getCities,
    {
      data,
      // isError, isLoading
    },
  ] = useGetCitiesMutation();

  const [citySearch, setCitySearch] = useState(address?.city?.Description);
  useEffect(() => {
    getCities(citySearch);
  }, [citySearch, getCities]);

  const onSelectCitySearch = value => {
    if (value !== "") setCitySearch(value);
  };

  const onSelectCityChange = async value => {
    await setFieldValue("address.city", value);
    await setFieldValue("address.Description", value?.label);

    dispatch(
      addShopCartAddress({
        Description: value?.label,
        city: value,
      })
    );

    await setFieldValue("address.street", {});
    dispatch(addShopCartAddress({ street: {} }));

    await setFieldValue("addressPoshtomat", {});
    await setFieldValue("addressDepartment", {});
    dispatch(addShopCartAddressDepartment({}));
    dispatch(addShopCartAddressPoshtomat({}));
  };

  return (
    <>
      <StyledDeliveryTitle>Обери адресу доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address.city">
          Населений пункт&#42;
        </StyledSelectLabel>
        <div style={{ position: "relative" }}>
          <CitySelect
            errors={errors}
            options={data?.data}
            placeholder={"Введіть населений пункт"}
            onChange={e => onSelectCityChange(e)}
            onSearch={e => onSelectCitySearch(e)}
            displayCity={address.city}
            name="address.city"
          />
          {errors.address?.city && <Error>{"Вкажіть населений пункт"}</Error>}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
