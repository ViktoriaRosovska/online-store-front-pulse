import { useDispatch, useSelector } from "react-redux";
import { departmentTypeFilter } from "../../../utils/departmentTypeFilter";
import { useGetDepartmentsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import {
  addShopCartAddress,
  addShopCartAddressPoshtomat,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import { SingleValue } from "./showPlaceholder";

export const PoshtomatDeliveryAddress = ({ setFieldValue, errors, values }) => {
  useEffect(() => {
    dispatch(addShopCartAddress({ Description: values.address.city.label }));
  }, []);

  const { addressPoshtomat, address } = useSelector(selectUserShopCart);

  const dispatch = useDispatch();
  const [getDepartments, { data }] = useGetDepartmentsMutation();

  useEffect(() => {
    if (address?.city.Ref) getDepartments(address?.city.Ref);
  }, [address?.city, getDepartments]);

  const onSelectDepartmentsChange = async value => {
    await setFieldValue("addressPoshtomat", value);
    dispatch(addShopCartAddressPoshtomat(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер поштомату&#42;
        </StyledSelectLabel>
        <div style={{ position: "relative" }}>
          <DepartmentSelect
            options={departmentTypeFilter(data, ["Postomat"])}
            placeholder="Номер поштомату"
            onChange={e => onSelectDepartmentsChange(e)}
            displayDepartment={addressPoshtomat}
            name="address"
            isError={errors.addressPoshtomat}
            components={{ SingleValue }}
            noOptionsMessage={initialValues =>
              initialValues ? null : "За вашим запитом нічого не знайдено"
            }
          />
          {errors.addressPoshtomat && (
            <Error>{"Введіть адресу поштомату"}</Error>
          )}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
