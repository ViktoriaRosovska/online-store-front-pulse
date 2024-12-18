import { useDispatch, useSelector } from "react-redux";
import { StreetSelect } from "../SelectComponents/StreetSelect";
import {
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useLazyGetStreetsQuery } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { useEffect, useState } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import { SingleValue } from "./showPlaceholder";

export const DeliveryStreetSelect = ({ setFieldValue, errors }) => {
  const { address } = useSelector(selectUserShopCart);
  const [streetSearch, setStreetSearch] = useState(
    address?.street?.Description
  );

  const dispatch = useDispatch();
  const [getStreets, { data }] = useLazyGetStreetsQuery();

  useEffect(() => {
    if (address?.city?.label?.length > 0) {
      dispatch(addShopCartAddress({ Description: address?.city?.label }));
    }
  }, [dispatch, address?.city?.label]);

  const onSelectStreetSearch = value => {
    if (value !== "") setStreetSearch(value?.Description);
  };

  const onSelectStreetChange = value => {
    setFieldValue("address.street", value);
    dispatch(addShopCartAddress({ street: value }));
  };

  const onSelectStreetBlur = e => {
    const search = e.target.value;

    if (search) {
      const street = { value: search, label: search, Description: search };
      dispatch(addShopCartAddress({ street: street }));
      setFieldValue("address.street", street);
    }
  };

  useEffect(() => {
    if (address?.city && address?.city.Ref)
      getStreets(address?.city.Ref, streetSearch);
  }, [streetSearch, getStreets, address?.city]);

  return (
    <StyledSelectWrapper>
      <StyledSelectLabel htmlFor="address.street">
        Вкажіть назву вулиці&#42;
      </StyledSelectLabel>
      <div style={{ position: "relative" }}>
        <StreetSelect
          options={data?.data}
          placeholder="Вулиця"
          onChange={e => onSelectStreetChange(e)}
          onSearch={e => onSelectStreetSearch(e)}
          onBlur={e => onSelectStreetBlur(e)}
          name="address.street"
          displayStreet={address.street}
          components={{ SingleValue }}
          noOptionsMessage={initialValues =>
            initialValues ? null : "За вашим запитом нічого не знайдено"
          }
          isError={errors?.street}
        />
        {errors.address?.street && <Error>{"Вкажіть назву вулиці"}</Error>}
      </div>
    </StyledSelectWrapper>
  );
};
