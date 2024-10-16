import { ROUTES } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { Formik } from "formik";

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
import { selectUserToken, useFetchCurrentUserQuery } from "../../../redux/auth";

import { ShopCartLoginForm } from "components/form/ShopCartLoginForm/ShopCartLoginForm";
import { ShopCartRegisterForm } from "components/form/ShopCartRegisterForm/ShopCartRegisterForm";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import ModalForgotPassword from "components/Modals/ModalForgotPassword/ModalForgotPassword";
import { StyledLoginFormButton } from "components/form/ShopCartLoginForm/ShopCartLoginForm.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  addShopCartEmail,
  addShopCartFirstName,
  addShopCartLastName,
  addShopCartPhone,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { EmptyShopCart } from "../EmptyShopCart/EmptyShopCart";
import { formatPhoneNumber } from "components/form/formHelpers/formatPhoneNumber";

export const ShopCartDelivery = props => {
  const navigate = useNavigate();

  const { data, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isLoggedIn = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const cart = useSelector(selectUserShopCart);
  const {
    products,
    deliveryType,
    address,
    addressDepartment,
    addressPoshtomat,
    priceSum,
    totalPriceSum,
    countQuantity,
  } = cart;

  let firstName;
  if (data?.user && !cart.firstName) {
    firstName = data.user.firstName;
    dispatch(addShopCartFirstName(firstName));
  } else firstName = cart.firstName;

  let lastName;
  if (data?.user && !cart.lastName) {
    lastName = data.user.lastName;
    dispatch(addShopCartLastName(lastName));
  } else lastName = cart.lastName;

  let phone;
  if (data?.user && !cart.phone) {
    phone = data.user.phone;
    dispatch(addShopCartPhone(phone));
  } else phone = cart.phone;

  let email;
  if (data?.user && !cart.email) {
    email = data.user.email;
    dispatch(addShopCartEmail(email));
  } else email = cart.email;

  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };

  // console.log("address", address);
  //console.log(data);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isActiveForm, setIsActiveForm] = useState(true);

  const onSubmit = (values, option) => {
    values.firstName = firstName
      .trim()
      .split(" ")
      .filter(el => el !== " ")
      .join(" ");
    values.lastName = lastName
      .trim()
      .split(" ")
      .filter(el => el !== " ")
      .join(" ");
    // console.log(values, option);

    // console.log(values.firstName);
    // console.log(values.lastName);

    navigate(ROUTES.SHOPCARTPAYMENT);
  };

  return (
    <>
      <Title>{props.title}</Title>
      {products && products.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              //enableReinitialize
              validationSchema={userShopCartValidationSchema}
              onSubmit={onSubmit}
              initialValues={{
                firstName: firstName,
                lastName: lastName,
                // phone: phone === "0000000000" ? "" : formatPhoneNumber(phone),
                phone: phone,
                email: email,
                address: {
                  Description: address.Description || "",
                  city: address.city || null,
                  street: address.street || {},
                  numberHouse: address.numberHouse || "",
                  numberHoll: address.numberHoll || "",
                  flat: address.flat || "",
                  comments: address.comments || "",
                  deliveryType: deliveryType || "",
                },
                addressDepartment: addressDepartment || {
                  Description: "",
                },

                addressPoshtomat: addressPoshtomat || {
                  Description: "",
                },

                condition: false,
                isMailing: false,
              }}
              validateOnBlur={false}
              validateOnChange={true}
              //validateOnChange={false}
            >
              {({ errors, values, setFieldValue, setErrors }) => (
                <StyledDeliveryForm>
                  <DeliveryCitySelect
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                  <DeliveryChoiceType
                    setFieldValue={setFieldValue}
                    values={values}
                  />

                  {deliveryType === DELIVERY.department && (
                    <DepartmentDeliveryAddress
                      setFieldValue={setFieldValue}
                      errors={errors}
                      values={values}
                    />
                  )}
                  {deliveryType === DELIVERY.courier && (
                    <CourierDeliveryAddress
                      values={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                    />
                  )}
                  {deliveryType === DELIVERY.poshtomat && (
                    <PoshtomatDeliveryAddress
                      setFieldValue={setFieldValue}
                      errors={errors}
                      values={values}
                    />
                  )}

                  <DeliveryPersonalDetails
                    setFieldValue={setFieldValue}
                    values={values}
                  />
                  <DeliveryCheckboxPolicy
                    setFieldValue={setFieldValue}
                    values={values}
                    errors={errors}
                    setErrors={setErrors}
                  />

                  <StyledLoginFormButton type="submit">
                    Продовжити оформлення
                  </StyledLoginFormButton>
                </StyledDeliveryForm>
              )}
            </Formik>
          </div>

          <StyledDeliveryOrderWrapper>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {!isLoggedIn && (
                <div>
                  <StyledDeliveryTitle>
                    <span
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
                    </span>
                  </StyledDeliveryTitle>
                  {isActiveForm && (
                    <ShopCartLoginForm
                      openForgotPasswordModal={openForgotPasswordModal}
                    />
                  )}
                  {!isActiveForm && <ShopCartRegisterForm />}
                </div>
              )}
              <YourOrderPriceComponent
                priceSum={priceSum}
                totalPriceSum={totalPriceSum}
                countQuantity={countQuantity}
              />
              <PromoCode />
            </div>

            <ShopCartProductsList products={products} isDesktop={isDesktop} />
          </StyledDeliveryOrderWrapper>
        </StyledOrderDeliveryWrapper>
      ) : (
        <EmptyShopCart />
      )}
      <Portal isOpen={isForgotPasswordModalOpen}>
        <CommonModal
          onClose={closeForgotPasswordModal}
          padding="68px 164px"
          top="68px"
        >
          <ModalForgotPassword
            onClose={closeForgotPasswordModal}
            openLoginModal={() => setIsForgotPasswordModalOpen(false)}
          />
        </CommonModal>
      </Portal>
    </>
  );
};
