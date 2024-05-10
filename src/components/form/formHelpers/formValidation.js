import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректний email")
    .required("обовʼязкове поле"),
  password: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/^(?=.*[a-z])(?=.*\d)/, {
      message: "Пароль має містити літери та цифри",
    })
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("обовʼязкове поле"),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("обовʼязкове поле"),
  surname: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("обовʼязкове поле"),
  email: Yup.string()
    .email("Введіть коректний email")
    .required("обовʼязкове поле"),
  password: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/^(?=.*[a-z])(?=.*\d)/, {
      message: "Пароль має містити літери та цифри",
    })
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("обовʼязкове поле"),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("обовʼязкове поле"),
});

export const userEditValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("обовʼязкове поле"),
  lastName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("обовʼязкове поле"),
  email: Yup.string()
    .email("Введіть коректний email")
    .required("обовʼязкове поле"),
  password: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/^(?=.*[a-z])(?=.*\d)/, {
      message: "Пароль має містити літери та цифри",
    })
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .nullable(),
  checkPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .nullable(),
  phone: Yup.string()
    .matches(/^\d{9}$/, { message: "Введіть корректний номер телефону" })
    .nullable(),
});

export const userSubscribeValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректний email")
    .required("обовʼязкове поле"),
});
