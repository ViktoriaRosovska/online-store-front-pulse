import CustomInput from "components/form/formElements/CustomInput/CustomInput";

import { StyledDeliveryTitle } from "./ShopCartDelivery.styled";

import { useDispatch, useSelector } from "react-redux";
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryStreetSelect } from "./DeliveryStreetSelect";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const CourierDeliveryAddress = ({ values, setFieldValue, errors }) => {
  console.log("courier values", values);

  const dispatch = useDispatch();

  const { address } = useSelector(selectUserShopCart);

  const handleChange = (value, func) => {
    console.log(value);
    dispatch(func(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса доставки</StyledDeliveryTitle>

      <DeliveryStreetSelect errors={errors} setFieldValue={setFieldValue} />
      <div style={{ position: "relative" }}>
        <CustomInput
          type="text"
          label="Вкажіть номер будинку&#42;"
          placeholder="Номер будинку"
          name="address.numberHouse"
          onChange={e => {
            handleChange({ numberHouse: e.target.value }, addShopCartAddress);

            setFieldValue("address.numberHouse", e.target.value.trim());
            dispatch(
              addShopCartAddress({
                numberHouse: e.target.value.trim(),
              })
            );
          }}
          value={address?.numberHouse}
        />
        {errors.address?.numberHouse && (
          <Error>{"Вкажіть номер будинку"}</Error>
        )}
      </div>

      <CustomInput
        type="text"
        label="Вкажіть номер під'їзду"
        placeholder="Номер під'їзду"
        name="numberHoll"
        onChange={e => {
          handleChange(
            { numberHoll: e.target.value.replace(/[^0-9\-/\\]/g, "") },
            addShopCartAddress
          );

          setFieldValue(
            "address.numberHoll",
            e.target.value.replace(/[^0-9\-/\\]/g, "").trim()
          );
          dispatch(
            addShopCartAddress({
              numberHoll: e.target.value.replace(/[^0-9\-/\\]/g, "").trim(),
            })
          );
        }}
        value={address.numberHoll}
      />
      <CustomInput
        type="text"
        label="Вкажіть номер квартири"
        placeholder="Номер квартири"
        name="flat"
        onChange={e => {
          handleChange({ flat: e.target.value }, addShopCartAddress);

          setFieldValue("address.flat", e.target.value.trim());
          dispatch(
            addShopCartAddress({
              flat: e.target.value.trim(),
            })
          );
        }}
        value={address.flat}
      />

      <CustomInput
        as="textarea"
        name="comments"
        type="text"
        $textarea
        placeholder="Напишіть коментар"
        label="Коментарі для кур'єра"
        onChange={e => {
          handleChange({ comments: e.target.value }, addShopCartAddress);
          setFieldValue("address.comments", e.target.value);
          dispatch(
            addShopCartAddress({
              comments: e.target.value,
            })
          );
        }}
        value={address.comments}
      />
    </>
  );
};
