import { useDispatch, useSelector } from "react-redux";
import { departmentTypeFilter } from "../../../utils/departmentTypeFilter";
import { useGetDepartmentsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const PoshtomatDeliveryAddress = ({ setFieldValue, errors }) => {
  useEffect(() => {
    dispatch(addShopCartAddress({}));
  }, []);
  const { city, address } = useSelector(selectUserShopCart);
  console.log("address", address);
  const dispatch = useDispatch();
  const [
    getDepartments,
    {
      data,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  useEffect(() => {
    getDepartments(city.Ref);
  }, [city, getDepartments]);

  const onSelectDepartmentsChange = value => {
    dispatch(addShopCartAddress(value));
    setFieldValue("address", value);
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер поштомату&#42;
        </StyledSelectLabel>
        <DepartmentSelect
          options={departmentTypeFilter(data, ["Postomat"])}
          placeholder="Номер поштомату"
          onChange={e => onSelectDepartmentsChange(e)}
          displayDepartment={address}
          name="address"
        />
        {errors.address && <Error>{"Введіть адресу поштомату"}</Error>}
      </StyledSelectWrapper>
    </>
  );
};
