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
// import { selectUserShopCart } from "../../../redux/user/userShopCart/userShopCartSelector";

export const DeliveryCheckboxPolicy = () => {
  const dispatch = useDispatch();
  // const { condition, isMailing } = useSelector(selectUserShopCart);

  return (
    <StyledCheckboxWrapper>
      <StyledCheckboxLabel>
        <CheckboxItem
          required
          name="condition"
          item=""
          onChange={e => {
            dispatch(addShopCartCondition(e.target.checked));
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

      <StyledCheckboxLabel>
        <CheckboxItem
          name="isMailing"
          item=""
          onChange={e => {
            dispatch(addShopCartIsMailing(e.target.checked));
          }}
        />
        Я хочу отримувати інформацію про новинки, акції
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
};
