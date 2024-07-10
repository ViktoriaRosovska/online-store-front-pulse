import { useField } from "formik";
import { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef(null);

  const isError = meta.error && meta.touched;

  const isPasswordInput =
    field.name === "password" || field.name === "passwordCheck";

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  useEffect(() => {
    if (inputRef.current && mask) {
      const inputElement = inputRef.current.inputElement;
      const startPosition = mask.indexOf("0") + 1; // После символа (
      inputElement.setSelectionRange(startPosition, startPosition);
    }
  }, [mask]);

  return (
    <div style={{ position: "relative" }}>
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
                $isError={isError}
                ref={inputRef}
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
        </InputField>
      </Box>
      {isError && <Error>{meta.error}</Error>}
    </div>
  );
};

export default CustomInput;
