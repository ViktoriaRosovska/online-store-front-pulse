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
  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const PoshtomatDeliveryAddress = ({ setFieldValue, errors, values }) => {
  useEffect(() => {
    dispatch(addShopCartAddress({ Description: values.city.label }));
  }, []);
  const { city, addressPoshtomat } = useSelector(selectUserShopCart);
  console.log("addressPoshtomat", addressPoshtomat);
  console.log("field addressDepartment", values.addressDepartment);
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
    dispatch(
      addShopCartAddress({
        Description: values.address.Description + ", " + value.Description,
      })
    );
    setFieldValue("addressPoshtomat", value.Description);
    dispatch(addShopCartAddressPoshtomat(value));
    setFieldValue("address", {
      Description: values.address.Description + ", " + value.Description,
    });
    setFieldValue("addressDepartment", {
      Description: values.address.Description + ", " + value.Description,
    });
    dispatch(addShopCartAddressDepartment(value));
    setFieldValue("addressDepartment", {
      Description: values.address.Description + ", " + value.Description,
    });
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
            isError={
              errors.addressPoshtomat ||
              values.addressPoshtomat.Description === undefined
            }
          />
          {(errors.addressPoshtomat ||
            values.addressPoshtomat.Description === undefined) && (
            <Error>{"Введіть адресу поштомату"}</Error>
          )}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
