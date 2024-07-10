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
import {
  addShopCartAddress,
  addShopCartAddressDepartment,
  addShopCartAddressPoshtomat,
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
    city,
    street,
    flat,
    numberHouse,
    numberHoll,
    comments,
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

  if (deliveryType === DELIVERY.courier) {
    dispatch(addShopCartAddressDepartment(address));
    dispatch(addShopCartAddressPoshtomat(address));
  }

  const onSubmit = (values, option) => {
    console.log(values, option);

    if (deliveryType === DELIVERY.courier) {
      dispatch(
        addShopCartAddressDepartment({ Description: address.Description })
      );
      dispatch(
        addShopCartAddressPoshtomat({ Description: address.Description })
      );
    }
    navigate(ROUTES.SHOPCARTPAYMENT);
  };
  useEffect(() => {
    refetch();
    if (deliveryType === DELIVERY.courier) {
      dispatch(addShopCartAddressDepartment(address));
      dispatch(addShopCartAddressPoshtomat(address));
    }
  }, [refetch, address, dispatch, deliveryType]);

  // console.log("address", address);
  // console.log("addressDepartment", addressDepartment);

  // console.log("addressPoshtomat", addressPoshtomat);

  console.log("city", city);

  console.log("address", address);
  console.log("stringify", JSON.stringify(address));
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
                city: city || {},
                firstName: data?.user.firstName || "",
                lastName: data?.user.lastName || "",
                phone: data?.user.phone || "",
                email: data?.user.email || "",
                address: {
                  Description: "",
                  city: city || {},
                  street: street || {},
                  numberHouse: numberHouse || "",
                  numberHoll: numberHoll || "",
                  flat: flat || "",
                  comments: comments || "",
                },
                addressDepartment: {
                  Description: addressDepartment.Description || {},
                },
                addressPoshtomat:
                  { Description: addressPoshtomat.Description } || {},
                street: street || {},
                numberHouse: numberHouse || "",
                numberHoll: numberHoll || "",
                comments: comments || "",
                flat: flat || "",
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
