import { useField } from "formik";
import { useState } from "react";
import VisiblePasswordIcon from "../VisiblePasswordIcon/VisiblePasswordIcon";
import { Box, Error, Input, InputField, InputWrapper } from "./CustomInput.styled";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const isError = meta.error && meta.touched;

  const isPasswordInput = field.name === "password" || field.name === "checkPassword";

  const togglePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <Box>
      <InputField >
        <label>{label}</label>
        <InputWrapper $isPassword={isPasswordInput}>
          <Input
            {...field}
            {...props}
            type={
              isPasswordInput
                ? visiblePassword
                  ? "text"
                  : "password"
                : props.type
            }
            autoComplete="off"
          />
          <div>
            {isPasswordInput && (
              <VisiblePasswordIcon
                visiblePassword={visiblePassword}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </InputWrapper>
      </InputField>
      {isError && <Error>{meta.error}</Error>}
    </Box>
  );
};

export default CustomInput;