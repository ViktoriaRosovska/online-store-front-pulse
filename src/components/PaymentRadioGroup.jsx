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
import { addShopCartPaymentMethod } from "../redux/user/userShopCart/userShopCartSlice";
import { selectUserShopCart } from "../redux/user/userShopCart/userShopCartSelector";

import { ShopCartCardPaymentForm } from "./form/ShopCartCardPaymentForm/ShopCartCardPaymentForm";
import { usePostOrdersMutation } from "../redux/products/productsApi";
import { number } from "yup";

export const PaymentRadioGroup = () => {
  const [selected, setSelected] = useState("card");
  const [isVisible, setIsVisible] = useState(false);
  const [postOrders] = usePostOrdersMutation();
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
    numberHouse,
    numberHoll,
    flat,
    comments,
  } = useSelector(selectUserShopCart);

  const newProducts = [
    ...products.map(el => ({
      productId: el._id,
      quantity: el.quantity,
      priceByOne: el.price,
      sizeId: el.sizeId,
    })),
  ];

  const shop = {
    priceSum: totalPriceSum,
    orderDate: new Date().toString(),
    products: newProducts,
    deliveryAddress: JSON.stringify(address),

    paymentMethod: paymentMethod,
    discount: discount,
    promoCode: promocode,
    name: firstName + " " + lastName,
    email: email,
    isMailing: isMailing,
    phone: phone.replace(/[\s()-]/g, ""),
  };

  // console.log(paymentMethod);
  //console.log(products);
  useEffect(() => {
    if (selected === "card" || selected === "online") {
      dispatch(addShopCartPaymentMethod("card"));
    } else {
      dispatch(addShopCartPaymentMethod("cash on delivery"));
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
                setIsVisible(true);
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
              onClick={() => navigate(`${ROUTES.SHOPCARTSUCCESSFUL}`)}
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
