import CustomInput from "components/form/formElements/CustomInput/CustomInput";
import { StreetSelect } from "../SelectComponents/StreetSelect";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { useGetStreetsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  addShopCartNumberHoll,
  addShopCartNumberHouse,
  addShopCartStreet,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const CourierDeliveryAddress = () => {
  const dispatch = useDispatch();
  const [getStreets, { data: streetsData }] = useGetStreetsMutation();
  const { city, numberHouse, flat, numberHoll } =
    useSelector(selectUserShopCart);

  const onSelectStreetSearch = (ref, value) => {
    console.log("onSelectStreetSearch", ref, value);
    getStreets(ref, value);
  };

  const onSelectStreetChange = value => {
    console.log("onSelectStreetChange", value);
    dispatch(addShopCartStreet(value.label));
  };

  const handleChange = (value, func) => {
    console.log(value);
    dispatch(func(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса доставки</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="street">
          Вкажіть назву вулиці
        </StyledSelectLabel>
        <StreetSelect
          options={streetsData?.data}
          placeholder="Вулиця"
          onChange={e => {
            onSelectStreetChange(e);
          }}
          onSearch={e => onSelectStreetSearch(city.Ref, e)}
          // value={selectStreetSearch}
          name="street"
        />
      </StyledSelectWrapper>

      <CustomInput
        type="text"
        label="Вкажіть номер будинку"
        placeholder="Номер будинку"
        name="numberHouse"
        onChange={e => handleChange(e.target.value, addShopCartNumberHouse)}
        value={numberHouse}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер під'їзду"
        placeholder="Номер під'їзду"
        name="numberHoll"
        onChange={e => handleChange(e.target.value, addShopCartNumberHoll)}
        value={numberHoll}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер квартири"
        placeholder="Номер квартири"
        name="flat"
      />

      <CustomInput
        as="textarea"
        name="comments"
        type="text"
        $textarea
        placeholder="Напишіть коментар"
        label="Коментарі для кур'єра"
      />
    </>
  );
};
