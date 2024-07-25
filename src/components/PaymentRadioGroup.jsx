import { useEffect, useState } from "react";

import { CustomRadioButton } from "./CustomRadioButton/CustomRadioButton";

import { ReactComponent as Visa } from "../assets/svg/visa.svg";
import { ReactComponent as Mastercard } from "../assets/svg/master.svg";
import { ReactComponent as ApplePay } from "../assets/svg/applePay.svg";
import { ReactComponent as GooglePay } from "../assets/svg/googlePay.svg";
import { ReactComponent as GooglePayBtn } from "../assets/svg/googlePay_btn.svg";
import {
  StyledCardIconWrapper,
  StyledOfflinePaymentText,
  StyledOfflinePaymentWrapper,
  StyledOnlinePaymentWrapper,
  StyledPayButton,
} from "./CustomRadioButton/CustomRadioButton.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes";
import { Portal } from "./Modals/helpersForModal/modalPortal";
import CommonModal from "./Modals/CommonModal";
import { ModalSuccessfulPayment } from "./Modals/ModalSuccessfulPayment/ModalSuccessfulPayment";
import {
  addShopCartPaymentMethod,
  clearShopCart,
} from "../redux/user/userShopCart/userShopCartSlice";
import {
  selectUserShopCart,
  selectUserShopCartState,
} from "../redux/user/userShopCart/userShopCartSelector";

import { ShopCartCardPaymentForm } from "./form/ShopCartCardPaymentForm/ShopCartCardPaymentForm";
import { usePostOrdersMutation } from "../redux/products/productsApi";

import { DELIVERY } from "../utils/DELIVERY";
import { createUserAddress } from "../utils/createUserAddress";
import { clearPromoCode } from "../redux/promoCode/promoCodeSlice";
import { copyShopCart } from "../redux/user/userShopCart/userCopyShopCart";

export const PaymentRadioGroup = () => {
  const [selected, setSelected] = useState("card");
  const [isVisible, setIsVisible] = useState(false);
  const [postOrders] = usePostOrdersMutation();
  const userShopCart = useSelector(selectUserShopCartState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    paymentMethod,
    products,
    promocode,
    address,
    firstName,
    lastName,
    phone,
    isMailing,
    totalPriceSum,
    discount,
    email,

    deliveryType,
    addressDepartment,
    addressPoshtomat,
  } = useSelector(selectUserShopCart);

  const newProducts = [
    ...products.map(el => ({
      productId: el._id,
      quantity: el.quantity,
      priceByOne: el.price,
      sizeId: el.sizeId,
    })),
  ];

  const newAddress = address => {
    const newUserAddress = [];
    newUserAddress.push(address.city.label);
    if (deliveryType == DELIVERY.department) {
      newUserAddress.push(addressDepartment.Description);
    }
    if (deliveryType == DELIVERY.poshtomat) {
      newUserAddress.push(addressPoshtomat.Description);
    }
    if (deliveryType == DELIVERY.courier) {
      newUserAddress.push(
        createUserAddress(
          address.street,
          address.numberHouse,
          address.numberHoll,
          address.flat
        )
      );
      if (address.comments) {
        newUserAddress.push(address.comments);
      }
    }

    return newUserAddress.join(", ");
  };

  const shop = {
    priceSum: totalPriceSum,
    orderDate: new Date().toString(),
    products: newProducts,
    deliveryAddress: newAddress(address),

    paymentMethod: paymentMethod,
    discount: discount,
    promoCode: promocode,
    name: firstName + " " + lastName,
    email: email,
    isMailing: isMailing,
    phone: phone.replace(/[\s()-]/g, ""),
  };

  useEffect(() => {
    if (selected === "card" || selected === "online") {
      dispatch(addShopCartPaymentMethod("card"));
    } else {
      dispatch(addShopCartPaymentMethod("cash"));
    }
  }, [dispatch, selected]);

  return (
    <>
      <CustomRadioButton
        value="online"
        selected={selected === "online"}
        text="Оплатити карткою онлайн"
        onChange={setSelected}
      >
        <StyledOnlinePaymentWrapper>
          <StyledCardIconWrapper>
            <button>
              <Visa />
            </button>
            <button>
              <Mastercard />
            </button>
            <button>
              <ApplePay />
            </button>
            <button>
              <GooglePay />
            </button>
          </StyledCardIconWrapper>

          <StyledPayButton
            onClick={() => {
              try {
                postOrders(shop);
                dispatch(copyShopCart(userShopCart));
                dispatch(clearShopCart());
                dispatch(clearPromoCode());
                setIsVisible(true);
                navigate(`${ROUTES.SHOPCARTSUCCESSFUL}`);
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            <GooglePayBtn />
          </StyledPayButton>
        </StyledOnlinePaymentWrapper>
      </CustomRadioButton>
      <CustomRadioButton
        value="card"
        selected={selected === "card"}
        onChange={setSelected}
        text="Оплатити банківською карткою"
      >
        <ShopCartCardPaymentForm shop={shop} showModal={setIsVisible} />
      </CustomRadioButton>
      <CustomRadioButton
        value="offline"
        selected={selected === "offline"}
        text="Оплатити при отриманні"
        onChange={setSelected}
      >
        {selected === "offline" && (
          <StyledOfflinePaymentWrapper>
            <StyledOfflinePaymentText>
              При отриманні замовлення у відділенні “Нова пошта“, а також при
              виборі кур&apos;єрської доставки “Нова пошта”, можна оплатити
              карткою або готівкою. Додаткова комісія за грошовий переказ: 20
              грн. + 2% від суми переказу.
            </StyledOfflinePaymentText>
            <StyledPayButton
              onClick={() => {
                try {
                  postOrders(shop);
                  dispatch(copyShopCart(userShopCart));
                  dispatch(clearShopCart());
                  dispatch(clearPromoCode());
                  setIsVisible(true);
                  navigate(`${ROUTES.SHOPCARTSUCCESSFUL}`);
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              Підтвердити замовлення
            </StyledPayButton>
          </StyledOfflinePaymentWrapper>
        )}
      </CustomRadioButton>
      <Portal isOpen={isVisible}>
        <CommonModal
          onClose={() => {}}
          isSizeModal={true}
          padding="20px 20px"
          showClose={false}
        >
          <ModalSuccessfulPayment />
        </CommonModal>
      </Portal>
    </>
  );
};
