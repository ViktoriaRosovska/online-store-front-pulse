import { ROUTES } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { Title } from "components/Typography/Typography.styled";
import { Formik } from "formik";

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

export const ShopCartDelivery = props => {
  const navigate = useNavigate();
  const {
    products,
    deliveryType,
    address,
    addressDepartment,
    addressPoshtomat,
    firstName,
    lastName,
    phone,
    email,
  } = useSelector(selectUserShopCart);
  console.log(address);
  const { data, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isLoggedIn = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    // if (!isLoggedIn) refetch();
    // else {
    if (data?.user) {
      if (firstName === "")
        dispatch(addShopCartFirstName(data?.user.firstName));
      if (lastName === "") dispatch(addShopCartLastName(data?.user.lastName));
      if (phone === "") dispatch(addShopCartPhone(data?.user.phone));
      if (email === "") dispatch(addShopCartEmail(data?.user.email));
    }
    // }
  }, [data, firstName, lastName, phone, email, dispatch]);

  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };

  // console.log("address", address);

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const [isActiveForm, setIsActiveForm] = useState(true);

  const onSubmit = (values, option) => {
    console.log(values, option);

    console.log(values.phone);

    navigate(ROUTES.SHOPCARTPAYMENT);
  };

  return (
    <>
      <Title>{props.title}</Title>
      {products && products.length > 0 ? (
        <StyledOrderDeliveryWrapper>
          <div>
            <Formik
              enableReinitialize
              validationSchema={userShopCartValidationSchema}
              onSubmit={onSubmit}
              initialValues={{
                firstName: firstName,
                lastName: lastName,
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
            >
              {({ errors, values, setFieldValue }) => (
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

                  <DeliveryPersonalDetails setFieldValue={setFieldValue} />
                  <DeliveryCheckboxPolicy
                    setFieldValue={setFieldValue}
                    errors={errors}
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
