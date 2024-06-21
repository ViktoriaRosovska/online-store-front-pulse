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
import { useEffect, useState } from "react";

export const DepartmentDeliveryAddress = () => {
  const { city, address } = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  const [
    getDepartments,
    {
      data,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  const [search, setSearch] = useState(address.Description);
  useEffect(() => {
    getDepartments(city.Ref, search);
  }, [city, search, getDepartments]);

  const onSelectDepartmentSearch = (ref, value) => {
    console.log("onSelectDepartmentSearch", ref, value);
    if (value !== "") setSearch(value);
  };

  const onSelectDepartmentsChange = value => {
    console.log("onSelectDepartmentsChange", value);
    dispatch(addShopCartAddress(value));
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер відділення
        </StyledSelectLabel>
        <DepartmentSelect
          options={departmentTypeFilter(data, ["Branch", "Store"])}
          placeholder="Номер відділення"
          onChange={e => onSelectDepartmentsChange(e)}
          onSearch={e => onSelectDepartmentSearch(city.Ref, e)}
          displayDepartment={address}
          name="address"
        />
      </StyledSelectWrapper>
    </>
  );
};
