import { useDispatch, useSelector } from "react-redux";
import { departmentTypeFilter } from "../../../utils/departmentTypeFilter";
import {
  StyledDeliveryTitle,
  StyledSelectLabel,
  StyledSelectWrapper,
} from "./ShopCartDelivery.styled";
import { DepartmentSelect } from "../SelectComponents/DepartmentSelect";
import { useGetDepartmentsMutation } from "../../../redux/novaPoshta/novaPoshtaAPI";
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const PoshtomatDeliveryAddress = () => {
  const { city } = useSelector(selectUserShopCart);
  const dispatch = useDispatch();
  const [
    getDepartments,
    {
      data: departmentData,
      // isError: departmentIsError,
      // isLoading: departmentIsLoading,
    },
  ] = useGetDepartmentsMutation();

  const onSelectDepartmentSearch = (ref, value) => {
    console.log("onSelectDepartmentSearch", ref, value);
    getDepartments(ref, value);
  };

  const onSelectDepartmentsChange = value => {
    console.log("onSelectDepartmentsChange", value);
    dispatch(addShopCartAddress(value.label));
  };
  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>
      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер поштомату
        </StyledSelectLabel>
        <DepartmentSelect
          options={departmentTypeFilter(departmentData, ["Postomat"])}
          placeholder="Номер поштомату"
          onChange={e => {
            onSelectDepartmentsChange(e);
          }}
          onSearch={e => onSelectDepartmentSearch(city.Ref, e)}
          name="address"
        />
      </StyledSelectWrapper>
    </>
  );
};
