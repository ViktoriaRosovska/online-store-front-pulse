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

export const DepartmentDeliveryAddress = ({ setFieldValue, errors }) => {
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

  useEffect(() => {
    dispatch(addShopCartAddress({}));
  }, []);

  const onSelectDepartmentsChange = value => {
    dispatch(addShopCartAddress(value));
    setFieldValue("address", value);
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер відділення&#42;
        </StyledSelectLabel>
        <DepartmentSelect
          options={departmentTypeFilter(data, ["Branch", "Store"])}
          placeholder="Номер відділення"
          onChange={e => onSelectDepartmentsChange(e)}
          displayDepartment={address}
          name="address"
        />
        {errors.address && <Error>{errors.address}</Error>}
      </StyledSelectWrapper>
    </>
  );
};
