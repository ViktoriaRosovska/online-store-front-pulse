import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { StyledNotificationWrapper } from "../ShopCart/ShopCart.styled";

import {
  StyledDeliveryForm,
  StyledDeliveryOrderWrapper,
  StyledDeliveryTitle,
  StyledLoginFormNameBtn,
  StyledOrderDeliveryWrapper,
} from "../ShopCartDelivery/ShopCartDelivery.styled";

import useMediaQuery from "../../../hooks/useMediaQuery";

import { DELIVERY } from "../../../utils/DELIVERY";
import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";
import { DeliveryCitySelect } from "./DeliveryCitySelect";
import { DeliveryChoiceType } from "./DeliveryChoiceType";
import { DepartmentDeliveryAddress } from "./DepartmentDeliveryAddress";
import { PoshtomatDeliveryAddress } from "./PoshtomatDeliveryAddress";
import { DeliveryPersonalDetails } from "./DeliveryPersonalInfo";
import { userShopCartValidationSchema } from "components/form/formHelpers/formValidation";
import { CourierDeliveryAddress } from "./CourierDeliveryAddress";
import { DeliveryCheckboxPolicy } from "./DeliveryCheckboxPolicy";
import { YourOrderPriceComponent } from "../ShopCart/YourOrderPriceComponent/YourOrderPriceComponent";
import { ShopCartProductsList } from "../ShopCartProductsList";
import { PromoCode } from "components/PromoCode";
import { useEffect, useState } from "react";
import { useFetchCurrentUserQuery } from "../../../redux/auth";
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";

import { ShopCartLoginForm } from "components/form/ShopCartLoginForm/ShopCartLoginForm";
import { ShopCartRegisterForm } from "components/form/ShopCartRegisterForm/ShopCartRegisterForm";

export const ShopCartDelivery = props => {
  let location = useLocation();
  const dispatch = useDispatch();
  const {
    products,
    deliveryType,
    address,
    addressDepartment,
    addressPoshtomat,
    city,
    street,
    flat,
    numberHouse,
    numberHoll,
  } = useSelector(selectUserShopCart);
  const { data, isLoading, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const [isActiveForm, setIsActiveForm] = useState(true);
  const onSubmit = (values, option) => {
    console.log(values, option);
    if (deliveryType === DELIVERY.department) {
      dispatch(
        addShopCartAddress(city.label + ", " + addressDepartment.Description)
      );
    }
    if (deliveryType === DELIVERY.poshtomat) {
      dispatch(
        addShopCartAddress(city.label + ", " + addressPoshtomat.Description)
      );
    }
    if (deliveryType === DELIVERY.courier) {
      dispatch(
        addShopCartAddress(
          city?.label +
            ", " +
            street?.Description +
            ", " +
            numberHouse +
            ", " +
            numberHoll +
            ", " +
            flat
        )
      );
    }
  };
  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log("address", address);
  console.log("addressDepartment", addressDepartment);

  console.log("addressPoshtomat", addressPoshtomat);

  console.log("city", city);
  return (
    <>
      <Title>{props.title}</Title>
      {products && products.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              validationSchema={userShopCartValidationSchema}
              onSubmit={onSubmit}
              initialValues={{
                firstName: data?.user.firstName || "",
                lastName: data?.user.lastName || "",
                phone: data?.user.phone || "",
                email: data?.user.email || "",
                address: "",
                street: "",
                numberHouse: "",
                numberHoll: "",
                comments: "",
                flat: "",
                condition: false,
                isMailing: false,
              }}
            >
              {formik => (
                <StyledDeliveryForm>
                  <DeliveryCitySelect />
                  <DeliveryChoiceType />

                  {deliveryType === DELIVERY.department && (
                    <DepartmentDeliveryAddress formik={formik} />
                  )}
                  {deliveryType === DELIVERY.courier && (
                    <CourierDeliveryAddress formik={formik} />
                  )}
                  {deliveryType === DELIVERY.poshtomat && (
                    <PoshtomatDeliveryAddress formik={formik} />
                  )}

                  <DeliveryPersonalDetails formik={formik} />
                  <DeliveryCheckboxPolicy />
                </StyledDeliveryForm>
              )}
            </Formik>

            <StyledShopCartButton
              text={"Продовжити оформлення"}
              route={ROUTES.SHOPCARTPAYMENT}
              state={{ from: location }}
              onClick={onSubmit}
            />
          </div>

          <StyledDeliveryOrderWrapper>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <div>
                <StyledDeliveryTitle>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "30px",
                      cursor: "default",
                    }}
                  >
                    <StyledLoginFormNameBtn
                      onClick={() => setIsActiveForm(!isActiveForm)}
                      $isActiveForm={isActiveForm}
                    >
                      ВХІД
                    </StyledLoginFormNameBtn>
                    |
                    <StyledLoginFormNameBtn
                      onClick={() => setIsActiveForm(!isActiveForm)}
                      $isActiveForm={!isActiveForm}
                    >
                      РЕЄСТРАЦІЯ
                    </StyledLoginFormNameBtn>
                  </p>
                </StyledDeliveryTitle>
                {isActiveForm && <ShopCartLoginForm />}
                {!isActiveForm && <ShopCartRegisterForm />}
              </div>

              <YourOrderPriceComponent />
              <PromoCode />
            </div>

            <ShopCartProductsList products={products} isDesktop={isDesktop} />
          </StyledDeliveryOrderWrapper>
        </StyledOrderDeliveryWrapper>
      ) : (
        <StyledNotificationWrapper>
          У вашому кошику ще немає товарів
        </StyledNotificationWrapper>
      )}
    </>
  );
};
