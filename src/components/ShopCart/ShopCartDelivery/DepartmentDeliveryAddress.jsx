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
import { useEffect } from "react";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
import { SingleValue } from "./showPlaceholder";

export const DepartmentDeliveryAddress = ({ setFieldValue, errors }) => {
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
    if (!address?.city) return;
    getDepartments(address?.city.Ref);
  }, [address?.city, getDepartments]);

  const onSelectDepartmentsChange = async value => {
    await setFieldValue("addressDepartment", value);
    dispatch(addShopCartAddressDepartment(value));
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
            isError={errors.addressDepartment}
            components={{ SingleValue }}
            noOptionsMessage={initialValues =>
              initialValues ? null : "За вашим запитом нічого не знайдено"
            }
            errors={errors?.addressDepartment}
          />
          {errors.addressDepartment && (
            <Error>{"Вкажіть номер відділення"}</Error>
          )}
        </div>
      </StyledSelectWrapper>
    </>
  );
};
