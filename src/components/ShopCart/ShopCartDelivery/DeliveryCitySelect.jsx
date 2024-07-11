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
import { DELIVERY } from "../../../utils/DELIVERY";

export const DeliveryCitySelect = ({ errors, values, setFieldValue }) => {
  console.log("errors", errors, values);

  const dispatch = useDispatch();
  const { deliveryType, address } = useSelector(selectUserShopCart);

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

  const onSelectCityChange = value => {
    console.log("city value", value);

    setFieldValue("address.city", value);
    setFieldValue("address.Description", value?.label);
    dispatch(
      addShopCartAddress({
        Description: value?.label,
        city: value,
      })
    );

    setFieldValue("address.street", {});
    dispatch(addShopCartAddress({ street: {} }));

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
