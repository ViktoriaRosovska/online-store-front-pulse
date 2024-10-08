import { useField } from "formik";
import { useState } from "react";
import VisiblePasswordIcon from "../VisiblePasswordIcon/VisiblePasswordIcon";
import {
  Box,
  Error,
  Input,
  InputField,
  InputWrapper,
  StyledMaskedInput,
  StyledPassIconWrapper,
} from "./CustomInput.styled";

const CustomInput = ({ label, mask, ...props }) => {
  const [field, meta] = useField(props);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const isError = meta.error && meta.touched;

  const isPasswordInput =
    field.name === "password" || field.name === "passwordCheck";

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <>
      <Box>
        <InputField>
          <label>{label}</label>
          <InputWrapper $isPassword={isPasswordInput}>
            {mask ? (
              <StyledMaskedInput
                {...field}
                {...props}
                mask={mask}
                autoComplete="on"
                showMask={true}
              />
            ) : (
              <Input
                onChange={field.onChange}
                {...field}
                {...props}
                $isPassword={isPasswordInput}
                as={props.$textarea ? "textarea" : "input"}
                type={
                  isPasswordInput
                    ? visiblePassword
                      ? "text"
                      : "password"
                    : props.type
                }
                autoComplete="off"
                $isError={isError}
              />
            )}
            <StyledPassIconWrapper>
              {isPasswordInput && (
                <VisiblePasswordIcon
                  visiblePassword={visiblePassword}
                  onClick={togglePasswordVisibility}
                />
              )}
            </StyledPassIconWrapper>
          </InputWrapper>
          {isError && <Error>{meta.error}</Error>}
        </InputField>
      </Box>
    </>
  );
};

export default CustomInput;
