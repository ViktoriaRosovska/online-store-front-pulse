import { ROUTES } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
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
import { selectUserToken, useFetchCurrentUserQuery } from "../../../redux/auth";
import {
  addShopCartEmail,
  addShopCartFirstName,
  addShopCartLastName,
  addShopCartPhone,
} from "../../../redux/user/userShopCart/userShopCartSlice";

import { ShopCartLoginForm } from "components/form/ShopCartLoginForm/ShopCartLoginForm";
import { ShopCartRegisterForm } from "components/form/ShopCartRegisterForm/ShopCartRegisterForm";
import { Portal } from "components/Modals/helpersForModal/modalPortal";
import CommonModal from "components/Modals/CommonModal";
import ModalForgotPassword from "components/Modals/ModalForgotPassword/ModalForgotPassword";
import { StyledLoginFormButton } from "components/form/ShopCartLoginForm/ShopCartLoginForm.styled";

export const ShopCartDelivery = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    products,
    deliveryType,
    address,
    addressDepartment,
    addressPoshtomat,
  } = useSelector(selectUserShopCart);
  console.log(address);
  const { data, refetch } = useFetchCurrentUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const isLoggedIn = useSelector(selectUserToken);
  // console.log(isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) refetch();
  }, [refetch, isLoggedIn]);

  useEffect(() => {
    if (data?.user) {
      dispatch(addShopCartFirstName(data?.user?.firstName || ""));
      dispatch(addShopCartLastName(data?.user?.lastName || ""));
      dispatch(addShopCartPhone(data?.user?.phone || ""));
      dispatch(addShopCartEmail(data?.user?.email || ""));
    }
  }, [data, dispatch]);

  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  // const location = useLocation();

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };

  // console.log(data);

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const [isActiveForm, setIsActiveForm] = useState(true);

  const onSubmit = (values, option) => {
    console.log(values, option);

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
                firstName: data?.user.firstName || "",
                lastName: data?.user.lastName || "",
                phone: data?.user.phone || "",
                email: data?.user.email || "",
                address: {
                  Description: address.Description || "",
                  city: address.city || {},
                  street: address.street || {},
                  numberHouse: address.numberHouse || "",
                  numberHoll: address.numberHoll || "",
                  flat: address.flat || "",
                  comments: address.comments || "",
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
                  <DeliveryChoiceType setFieldValue={setFieldValue} />

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
            {!isLoggedIn && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
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
                  {isActiveForm && (
                    <ShopCartLoginForm
                      openForgotPasswordModal={openForgotPasswordModal}
                    />
                  )}
                  {!isActiveForm && <ShopCartRegisterForm />}
                </div>

                <YourOrderPriceComponent />
                <PromoCode />
              </div>
            )}

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
