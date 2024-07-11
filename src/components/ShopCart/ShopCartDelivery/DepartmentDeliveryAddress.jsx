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
  addShopCartStreet,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const DepartmentDeliveryAddress = ({
  setFieldValue,
  errors,
  values,
}) => {
  const { address, addressDepartment } = useSelector(selectUserShopCart);
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
    getDepartments(address?.city.Ref);
  }, [address?.city, getDepartments]);

  const onSelectDepartmentsChange = value => {
    setFieldValue("address.Description", value.Description);
    dispatch(
      addShopCartAddress({
        Description: value.Description,
      })
    );

    setFieldValue("addressDepartment", value);
    dispatch(addShopCartAddressDepartment(value));

    setFieldValue("street", { Description: value.Description });
    dispatch(addShopCartStreet({ Description: value.Description }));
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
