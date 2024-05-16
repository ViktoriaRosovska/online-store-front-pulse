import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректний email")
    .required("Oбовʼязкове поле"),
  password: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/^(?=.*[a-z])(?=.*\d)/, {
      message: "Пароль має містити літери та цифри",
    })
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("Oбовʼязкове поле"),
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("Oбовʼязкове поле"),
  surname: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .email("Введіть коректний email")
    .required("Oбовʼязкове поле"),
  password: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/^(?=.*[a-z])(?=.*\d)/, {
      message: "Пароль має містити літери та цифри",
    })
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("Oбовʼязкове поле"),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .min(6, "Пароль має бути не менш ніж 6 символів")
    .max(10, "Максимальна кількість 10 символів")
    .required("Oбовʼязкове поле"),
});

export const userEditValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("Oбовʼязкове поле"),
  lastName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .email("Введіть коректний email")
    .required("Oбовʼязкове поле"),
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
    .required("Oбовʼязкове поле"),
});

export const validationUserCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .transform(value => value.replace(/\s/g, "")) // Удалить пробелы
    .matches(/^[45]/, "Visa або MasterCard")
    .test("is-valid", "Невірний номер карти", value => /^\d{16}$/.test(value)) // Проверка на 16 цифр
    .required("Поле обов'язкове"),
  cardDate: Yup.string()
    .matches(/^\d{2}\/\d{2}$/, {
      message: "Формат дати ММ/YY.",
      excludeEmptyString: true,
    })
    .test("is-future-date", "Термін дії закінчився.", function (value) {
      if (!value) return false;
      const currentDate = new Date();
      const [month, year] = value.split("/");
      const cardExpireDate = new Date(`20${year}`, month - 1);
      return cardExpireDate >= currentDate;
    })
    .required("Поле обов'язкове"),
  cardCVC: Yup.string()
    .matches(/^\d{3}$/, {
      message: "CVV - три цифри.",
      excludeEmptyString: true,
    })
    .required("Поле обов'язкове"),
  cardName: Yup.string().required("Поле обов'язкове"),
});

export const userSupportValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(/([а-яА-яa-zA-z])/, { message: "Повинні бути тільки букви" })
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .email("Введіть коректний email")
    .required("Oбовʼязкове поле"),
  subject: Yup.string().required("Oбовʼязкове поле"),
  message: Yup.string().required("Oбовʼязкове поле"),
});
