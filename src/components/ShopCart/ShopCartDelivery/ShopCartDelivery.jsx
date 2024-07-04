import { StyledShopCartButton } from "components/Buttons/ShopCartButton/ShopCartButton.styled";
import { ROUTES } from "../../../utils/routes";
import { useLocation, useNavigate } from "react-router-dom";
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
import { addShopCartAddress } from "../../../redux/user/userShopCart/userShopCartSlice";

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
    // address,
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
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector(selectUserToken);

  const openForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(true);
    // setIsLoginModalOpen(false);
  };

  const closeForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
    // setIsLoginModalOpen(true);
  };

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
    navigate(ROUTES.SHOPCARTPAYMENT);
  };
  useEffect(() => {
    refetch();
  }, [refetch]);

  // console.log("address", address);
  // console.log("addressDepartment", addressDepartment);

  // console.log("addressPoshtomat", addressPoshtomat);

  // console.log("city", city);

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
                city: null,
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
                  <DeliveryChoiceType />

                  {deliveryType === DELIVERY.department && (
                    <DepartmentDeliveryAddress />
                  )}
                  {deliveryType === DELIVERY.courier && (
                    <CourierDeliveryAddress />
                  )}
                  {deliveryType === DELIVERY.poshtomat && (
                    <PoshtomatDeliveryAddress />
                  )}

                  <DeliveryPersonalDetails />
                  <DeliveryCheckboxPolicy />

                  <StyledLoginFormButton type="submit">
                    Продовжити оформлення
                  </StyledLoginFormButton>
                </StyledDeliveryForm>
              )}
            </Formik>

            {/* <StyledShopCartButton
              text={"Продовжити оформлення"}
              route={ROUTES.SHOPCARTPAYMENT}
              state={{ from: location }}
              onClick={() => onSubmit()}
            /> */}
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
