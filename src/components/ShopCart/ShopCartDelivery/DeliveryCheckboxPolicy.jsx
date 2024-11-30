import { StyledConditionsLinks } from "components/Links/Links.styled";
import { ROUTES } from "../../../utils/routes";
import {
  StyledCheckboxLabel,
  StyledCheckboxWrapper,
} from "./ShopCartDelivery.styled";
import { CheckboxItem } from "components/CheckboxList/CheckboxItem/ChechboxItem";
import { useDispatch } from "react-redux";
import { addShopCartIsMailing } from "../../../redux/user/userShopCart/userShopCartSlice";
import { Error } from "components/form/formElements/CustomInput/CustomInput.styled";

export const DeliveryCheckboxPolicy = ({
  setFieldValue,
  errors,
  values,
  setErrors,
}) => {
  const dispatch = useDispatch();

  return (
    <StyledCheckboxWrapper>
      <div style={{ position: "relative" }}>
        <StyledCheckboxLabel>
          <CheckboxItem
            name="condition"
            id="condition"
            item=""
            onChange={async e => {
              if (e.target.checked) setErrors({});
              await setFieldValue("condition", e.target.checked);
            }}
          />
          <div
            style={{
              height: "30px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              position: "relative",
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
        {errors.condition && <Error>{errors.condition}</Error>}
      </div>
      <StyledCheckboxLabel>
        <CheckboxItem
          name="isMailing"
          item=""
          onChange={async e => {
            dispatch(addShopCartIsMailing(e.target.checked));
            await setFieldValue("isMailing", e.target.checked);
          }}
          value={values.condition}
        />
        Я хочу отримувати інформацію про новинки, акції
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
};
