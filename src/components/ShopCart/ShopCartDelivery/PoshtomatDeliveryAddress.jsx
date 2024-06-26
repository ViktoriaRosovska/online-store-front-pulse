import { useDispatch, useSelector } from "react-redux";
import { departmentTypeFilter } from "../../../utils/departmentTypeFilter";
import { useGetDepartmentsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { addShopCartAddressPoshtomat } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";

export const PoshtomatDeliveryAddress = () => {
  const { city, addressPoshtomat } = useSelector(selectUserShopCart);
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
    dispatch(addShopCartAddressPoshtomat(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер поштомату
        </StyledSelectLabel>
        <DepartmentSelect
          options={departmentTypeFilter(data, ["Postomat"])}
          placeholder="Номер поштомату"
          onChange={e => onSelectDepartmentsChange(e)}
          displayDepartment={addressPoshtomat}
          name="address"
        />
      </StyledSelectWrapper>
    </>
  );
};
