import CustomInput from "components/form/formElements/CustomInput/CustomInput";

import { StyledDeliveryTitle } from "./ShopCartDelivery.styled";

import { useDispatch, useSelector } from "react-redux";
import {
  addShopCartComments,
  addShopCartFlat,
  addShopCartNumberHoll,
  addShopCartNumberHouse,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryStreetSelect } from "./DeliveryStreetSelect";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const CourierDeliveryAddress = ({ values, setFieldValue, errors }) => {
  console.log("courier values", values);
  console.log("values.address", values.address);

  const dispatch = useDispatch();

  const { numberHouse, flat, numberHoll, comments } =
    useSelector(selectUserShopCart);

  const handleChange = (value, func) => {
    console.log(value);
    dispatch(func(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса доставки</StyledDeliveryTitle>

      <DeliveryStreetSelect
        values={values}
        errors={errors}
        setFieldValue={setFieldValue}
      />
      <div style={{ position: "relative" }}>
        <CustomInput
          type="text"
          label="Вкажіть номер будинку&#42;"
          placeholder="Номер будинку"
          name="numberHouse"
          onChange={e => {
            handleChange(e.target.value, addShopCartNumberHouse);
            setFieldValue("numberHouse", e.target.value.trim());
            setFieldValue("address.numberHouse", e.target.value.trim());
          }}
          value={numberHouse}
        />
        {(values.numberHouse.length < 1 || errors.numberHouse) && (
          <Error>{"Вкажіть номер будинку"}</Error>
        )}
      </div>

      <CustomInput
        type="text"
        label="Вкажіть номер під'їзду"
        placeholder="Номер під'їзду"
        name="numberHoll"
        onChange={e => {
          handleChange(e.target.value, addShopCartNumberHoll);
          setFieldValue("numberHoll", e.target.value);
          setFieldValue("address.numberHoll", e.target.value.trim());
        }}
        value={numberHoll}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер квартири"
        placeholder="Номер квартири"
        name="flat"
        onChange={e => {
          handleChange(e.target.value, addShopCartFlat);
          setFieldValue("flat", e.target.value);
          setFieldValue("address.flat", e.target.value.trim());
        }}
        value={flat}
      />

      <CustomInput
        as="textarea"
        name="comments"
        type="text"
        $textarea
        placeholder="Напишіть коментар"
        label="Коментарі для кур'єра"
        onChange={e => {
          handleChange(e.target.value, addShopCartComments);
          setFieldValue("address.comments", e.target.value.trim());
        }}
        value={comments}
      />
    </>
  );
};
