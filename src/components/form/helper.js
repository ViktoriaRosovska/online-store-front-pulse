import * as Yup from 'yup'

const regx = {
  email: / [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  name: /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig,
  surname: /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig,
  passwordTwo: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

}

const email = Yup.string().matches(regx.email, 'Формат example@email.com')
  .required('Введіть email')

const password = Yup.string().matches(regx.password,'password').required('Введіть пароль')

const name = Yup.string().matches(regx.name, 'name' ).required('Введіть імʼя')

const surname = Yup.string().matches(regx.surname, 'surname' ).required('Введіть Прізвище')


const passwordTwo = Yup.string().matches(regx.passwordTwo, 'password' ).required('Введіть пароль')
export const schemas = {
  custom: Yup.object().shape({email, password, name, surname, passwordTwo})
}
export const initialValues = {
  email: '',
  password: '',
  name: '',
  surname: '',
  passwordTwo: '',

}