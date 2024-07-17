import { DELIVERY } from "../../../utils/DELIVERY";
import * as Yup from "yup";

// const nameRegex = /^[A-Za-zа-яА-ЯіІїЇєЄґҐ' ]+(-[A-Za-zа-яА-ЯіІїЇєЄґҐ' ]+)?$/;

const nameRegex = /^[A-Za-zа-яА-ЯіІїЇєЄґҐ']+(-[A-Za-zа-яА-ЯіІїЇєЄґҐ']+)?$/;

// const emailRegex =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})*$/;

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})*$/;

// const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]*$/;

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z0-9!$#@])[A-Za-z\d!$#@]{8,20}$/;

const phoneRegex = /^\+38\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

const backendPhoneRegex = /^\+\d{12,20}$/;

const cardNameRegex = /^[A-Za-z ]+$/;

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
  password: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(passwordRegex, "Неправильний емейл або пароль")
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .required("Oбовʼязкове поле"),
});

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(nameRegex, "Повинні бути лише букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  lastName: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(nameRegex, "Повинні бути тільки букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
  password: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(
      passwordRegex,
      "Пароль має містити латинські літери і принаймі одну велику літеру та цифру. Без пробілів."
    )
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .required("Oбовʼязкове поле"),
  passwordCheck: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(
      passwordRegex,
      "Пароль має містити латинські літери і принаймі одну велику літеру та цифру. Без пробілів."
    )
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .required("Oбовʼязкове поле"),
});

export const userEditValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(nameRegex, "Повинні бути лише букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  lastName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(nameRegex, "Повинні бути лише букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
  password: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(
      passwordRegex,
      "Пароль має містити латинські літери і принаймі одну велику літеру та цифру. Без пробілів."
    )
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .nullable(),
  passwordCheck: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .nullable(),
  phone: Yup.string()
    .matches(phoneRegex, { message: "Введіть корректний номер телефону" })
    .nullable(),
});

export const userSubscribeValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
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
    .test("is-valid-month", "Місяць від 01 до 12", function (value) {
      if (!value) return false;
      const [month, year] = value.split("/");
      const monthNumber = parseInt(month, 10);
      return monthNumber >= 1 && monthNumber <= 12;
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
  cardName: Yup.string()
    .matches(cardNameRegex, "Ім'я повинно містити лише латинські букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(60, "Максимальна кількість 60 символів")
    .required("Поле обов'язкове"),
});

export const validationUserCardShopCardSchema = Yup.object().shape({
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
    .test("is-valid-month", "Місяць від 01 до 12", function (value) {
      if (!value) return false;
      const [month, year] = value.split("/");
      const monthNumber = parseInt(month, 10);
      return monthNumber >= 1 && monthNumber <= 12;
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
});

export const userSupportValidationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(nameRegex, "Повинні бути лише букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(61, "Максимальна кількість символів 61")
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
  subject: Yup.string()
    .min(1, "Мінімальна кількість символів 1")
    .max(50, "Максимальна кількість символів 50")
    .required("Oбовʼязкове поле"),
  message: Yup.string()
    .min(1, "Мінімальна кількість символів 1")
    .max(500, "Максимальна кількість символів 500")
    .required("Oбовʼязкове поле"),
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(
      passwordRegex,
      "Пароль має містити латинські літери і принаймі одну велику літеру та цифру. Без пробілів."
    )
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .required("Oбовʼязкове поле"),
  passwordCheck: Yup.string()
    .typeError("Поле повинно бути текстовим")
    .matches(
      passwordRegex,
      "Пароль має містити латинські літери і принаймі одну велику літеру та цифру. Без пробілів."
    )
    .min(8, "Пароль має бути не менш ніж 8 символів")
    .max(20, "Максимальна кількість 20 символів")
    .oneOf([Yup.ref("password")], "Паролі не співпадають")
    .required("Oбовʼязкове поле"),
});
export const userShopCartValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(nameRegex, "Повинні бути тільки букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  lastName: Yup.string()
    .typeError("Повинно бути строкою")
    .matches(nameRegex, "Повинні бути тільки букви")
    .min(1, "Мінімальна кількість символів 1")
    .max(30, "Максимальна кількість символів 30")
    .required("Oбовʼязкове поле"),
  email: Yup.string()
    .matches(emailRegex, "Введіть коректний email")
    .email("Введіть коректний email")
    .test(
      "is-not-ru",
      "Домени .ru заборонені",
      value => !value?.endsWith(".ru")
    )
    .required("Oбовʼязкове поле"),
  phone: Yup.string()
    // .matches(phoneRegex, {
    //   message: "Введіть корректний номер телефону",
    // })
    .nullable()
    .required("Вкажіть номер телефону"),

  condition: Yup.boolean()
    .required("Обов'язкове поле")
    .test("Прийміть політику конфіденційності", value =>
      value ? true : false
    ),
  isMailing: Yup.boolean(),
  address: Yup.object({
    Description: Yup.string().required(),
    city: Yup.object()
      .required()
      .test(value => Object.hasOwn(value, "Description")),
    street: Yup.object().when("deliveryType", ([deliveryType]) => {
      if (deliveryType == DELIVERY.courier)
        return Yup.object()
          .required()
          .test(value => Object.hasOwn(value, "Description"));
    }),
    numberHouse: Yup.string().when("deliveryType", ([deliveryType]) => {
      if (deliveryType == DELIVERY.courier)
        return Yup.string().required("Вкажіть номер будинку");
    }),
    numberHoll: Yup.string(),
    flat: Yup.string(),
    comments: Yup.string(),
    deliveryType: Yup.string(),
  }).test(value => Object.hasOwn(value, "Description")),

  addressDepartment: Yup.object().shape({
    Description: Yup.string().when(
      "deliveryType",
      (deliveryType, schema, ctx) => {
        deliveryType = ctx.context.address.deliveryType;
        if (deliveryType == DELIVERY.department) return schema.required();
      }
    ),
  }),
  addressPoshtomat: Yup.object().shape({
    Description: Yup.string().when(
      "deliveryType",
      (deliveryType, schema, ctx) => {
        deliveryType = ctx.context.address.deliveryType;
        if (deliveryType == DELIVERY.poshtomat) return schema.required();
      }
    ),
  }),
});
