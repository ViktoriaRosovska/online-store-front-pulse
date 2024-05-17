import { useField } from "formik";
import { useState } from "react";
import VisiblePasswordIcon from "../VisiblePasswordIcon/VisiblePasswordIcon";
import {
  Box,
  Error,
  Input,
  InputField,
  InputWrapper,
  StyledPassIconWrapper,
} from "./CustomInput.styled";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const isError = meta.error && meta.touched;

  const isPasswordInput =
    field.name === "password" || field.name === "passwordCheck";

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <Box>
      <InputField>
        <label>{label}</label>
        <InputWrapper $isPassword={isPasswordInput}>
          <Input
            {...field}
            {...props}
            $isPassword={isPasswordInput}
            as={props.$textarea ? 'textarea' : 'input'}
            type={
              isPasswordInput
                ? visiblePassword
                  ? "text"
                  : "password"
                : props.type
            }
            autoComplete="off"
            onChange={props.onChange}
          />
          <StyledPassIconWrapper>
            {isPasswordInput && (
              <VisiblePasswordIcon
                visiblePassword={visiblePassword}
                onClick={togglePasswordVisibility}
              />
            )}
          </StyledPassIconWrapper>
        </InputWrapper>
      </InputField>
      {isError && <Error>{meta.error}</Error>}
    </Box>
  );
};

export default CustomInput;
