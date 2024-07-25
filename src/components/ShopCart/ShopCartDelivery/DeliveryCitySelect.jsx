import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { CitySelect } from "../SelectComponents/CitySelect";
import { useLazyGetCitiesQuery } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import {
  addShopCartAddress,
  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import useMediaQuery from "../../../hooks/useMediaQuery";

import { SingleValue } from "./showPlaceholder";

export const DeliveryCitySelect = ({ errors, setFieldValue }) => {
  const dispatch = useDispatch();
  const { address } = useSelector(selectUserShopCart);

  const [
    getCities,
    {
      data,
      // isError, isLoading
    },
  ] = useLazyGetCitiesQuery();

  const [citySearch, setCitySearch] = useState(address?.city?.Description);
  useEffect(() => {
    if (citySearch) getCities(citySearch);
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
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      <StyledDeliveryTitle>Обери адресу доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address.city">
          Населений пункт&#42;
        </StyledSelectLabel>
        <div style={{ position: "relative" }}>
          <CitySelect
            isError={errors?.city}
            options={data?.data}
            placeholder={"Введіть населений пункт"}
            onChange={e => onSelectCityChange(e)}
            onSearch={e => onSelectCitySearch(e)}
            displayCity={address.city}
            name="address.city"
            $isDesktop={isDesktop}
            components={{ SingleValue }}
            noOptionsMessage={initialValues =>
              initialValues ? "За вашим запитом нічого не знайдено" : null
            }
          />
          {errors.address?.city && <Error>{"Вкажіть населений пункт"}</Error>}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
