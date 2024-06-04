import {
  StyledChoosePaymentWrapper,
  StyledInnerCircle,
  StyledOuterCircle,
} from "./CustomRadioButton.styled";

export const CustomRadioButton = ({
  text,
  value,
  onChange,
  selected,
  children,
}) => {
  return (
    <div
      onClick={() => onChange(value)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <StyledChoosePaymentWrapper>
        <StyledOuterCircle>
          <StyledInnerCircle $selected={selected}></StyledInnerCircle>
        </StyledOuterCircle>
        <div>{text}</div>
      </StyledChoosePaymentWrapper>

      {children}
    </div>
  );
};
