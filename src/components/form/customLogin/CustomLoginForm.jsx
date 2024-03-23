import './CustomLoginForm.css'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import { FaEye } from "react-icons/fa";
import {useState} from "react";
const CustomLoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }



  const validationsShema = Yup.object().shape({


    email: Yup.string().email('Введіть коректний email').required('обовʼязкове поле'),
    password: Yup.string()
      .typeError('Повинно бути строкою').matches(/^(?=.*[a-z])(?=.*\d)/,
        {message: 'Пароль має містити літери та цифри'}
      )
      .min(6, 'Пароль має бути не менш ніж 6 символів')
      .max(10, 'Максимальна кількість 10 символів').required('обовʼязкове поле'),

  })

  return (
    <>
      <Formik initialValues={{

        email:'',
        password:'',

      }} validateOnBlur
              validationSchema={validationsShema}
              onSubmit={(values) => console.log(values)}>

        {({values, errors,
            touched, handleChange,
            handleBlur, isValid, handleSubmit,
            dirty
          }) => (
          <div className={'input_container form'}>





            <p>
              <label htmlFor={'email'}>
                {'Email'}
              </label>
              <input
                id={'email'}

                placeholder={'email'}
                type="text"
                name={'email'}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}

              />
            </p>
            {touched.email && errors.email && <p style={{color: 'red'}}>{errors.email}</p>}


            <p>
              <label htmlFor={'password'}>
                <FaEye className={'eyes'} style={{cursor: 'pointer'}} onClick={handleClickShowPassword}/>
                {'Пароль'}
              </label>
              <input
                id={'password'}

                placeholder={'Пароль'}
                type={!showPassword ? "password" : 'text'}
                name={'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}

              />

            </p>
            {touched.password && errors.password && <p style={{color: 'red'}}>{errors.password}</p>}




            <button
              className={'custom_form_button'}
              onClick={handleSubmit}
              type={'submit'}
              disabled={!isValid && !dirty}
            >Увійти
            </button>
          </div>
        )}
      </Formik>
    </>
  )

};

export default CustomLoginForm;
