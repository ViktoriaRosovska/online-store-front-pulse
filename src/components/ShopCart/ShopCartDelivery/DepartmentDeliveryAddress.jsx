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
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const DepartmentDeliveryAddress = ({
  setFieldValue,
  errors,
  values,
}) => {
  const { city, address, addressDepartment } = useSelector(selectUserShopCart);
  console.log("addressDepartment", addressDepartment);
  console.log(values?.addressDepartment);
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
    dispatch(addShopCartAddress({ Description: values.city.label }));
  }, []);

  const onSelectDepartmentsChange = value => {
    dispatch(
      addShopCartAddress({
        Description: values.address.Description + ", " + value.Description,
      })
    );
    setFieldValue("addressDepartment", value);
    setFieldValue("address", {
      Description: values.address.Description + ", " + value.Description,
    });
    dispatch(addShopCartAddressDepartment(value));
    setFieldValue("addressPoshtomat", {
      Description: values.address.Description + ", " + value.Description,
    });
  };

  return (
    <>
      <StyledDeliveryTitle>Адреса відділення</StyledDeliveryTitle>

      <StyledSelectWrapper>
        <StyledSelectLabel htmlFor="address">
          Оберіть номер відділення&#42;
        </StyledSelectLabel>
        <div style={{ position: "relative" }}>
          <DepartmentSelect
            options={departmentTypeFilter(data, ["Branch", "Store"])}
            placeholder="Номер відділення"
            onChange={e => onSelectDepartmentsChange(e)}
            displayDepartment={addressDepartment}
            name="address"
            isError={
              errors.addressDepartment ||
              values.addressDepartment.Description === undefined
            }
          />
          {(errors.addressDepartment ||
            values.addressDepartment.Description === undefined) && (
            <Error>{"Вкажіть номер відділення"}</Error>
          )}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
