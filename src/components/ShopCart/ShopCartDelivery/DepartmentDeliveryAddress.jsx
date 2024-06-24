import { useDispatch, useSelector } from "react-redux";
import { departmentTypeFilter } from "../../../utils/departmentTypeFilter";
import { useGetDepartmentsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { addShopCartAddressDepartment } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect, useState } from "react";
import { Formik } from "formik";

export const DepartmentDeliveryAddress = ({ formik }) => {
  const { city, addressDepartment } = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  const [
    getDepartments,
    {
      data,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  const [search, setSearch] = useState(addressDepartment?.Description);
  useEffect(() => {
    getDepartments(city.Ref, search);
  }, [city, search, getDepartments]);

  const onSelectDepartmentSearch = (ref, value) => {
    if (value !== "") setSearch(value);
  };

  const onSelectDepartmentsChange = value => {
    dispatch(addShopCartAddressDepartment(value));
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
          onChange={e => {
            onSelectDepartmentsChange(e);
            formik.setFieldValue("");
          }}
          onSearch={e => onSelectDepartmentSearch(city.Ref, e)}
          displayDepartment={addressDepartment}
          name="address"
        />
      </StyledSelectWrapper>
    </>
  );
};
