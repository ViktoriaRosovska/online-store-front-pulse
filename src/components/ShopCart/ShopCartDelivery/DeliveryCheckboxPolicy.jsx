import { StyledConditionsLinks } from "components/Links/Links.styled";
import { ROUTES } from "../../../utils/routes";
import {
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
} from "./ShopCartDelivery.styled";
import { CheckboxItem } from "components/CheckboxList/CheckboxItem/ChechboxItem";
import { useDispatch } from "react-redux";
import {
  addShopCartCondition,
  addShopCartIsMailing,
} from "../../../redux/user/userShopCart/userShopCartSlice";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";
// import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const DeliveryCheckboxPolicy = ({ setFieldValue, errors }) => {
  const dispatch = useDispatch();
  // const { condition, isMailing } = useSelector(selectUserShopCart);

  return (
    <StyledCheckboxWrapper>
      <StyledCheckboxLabel>
        <CheckboxItem
          name="condition"
          item=""
          onChange={e => {
            dispatch(addShopCartCondition(e.target.checked));
            console.log(e.target.checked);
            setFieldValue("condition", e.target.checked);
          }}
        />
        <div
          style={{
            height: "30px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span>
            Я приймаю&nbsp;
            <StyledConditionsLinks to={ROUTES.POLICY}>
              Політику конфіденційності
            </StyledConditionsLinks>
            &nbsp;
          </span>
          <span>
            і&nbsp;
            <StyledConditionsLinks to={ROUTES.CONDITIONS}>
              Умови продажу
            </StyledConditionsLinks>
          </span>
        </div>
      </StyledCheckboxLabel>
      {errors.condition && (
        <Error>{"Прийміть політику конфіденційності"}</Error>
      )}
      <StyledCheckboxLabel>
        <CheckboxItem
          name="isMailing"
          item=""
          onChange={e => {
            dispatch(addShopCartIsMailing(e.target.checked));
            setFieldValue("isMailing", e.target.checked);
          }}
        />
        Я хочу отримувати інформацію про новинки, акції
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
};
