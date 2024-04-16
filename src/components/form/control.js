import './CustomForm.css'
import {Formik, Form} from 'formik'
import {initialValues, schemas} from "./helper.js";
import {InputCustom} from "../inputCustom/InputCustom.jsx";
import {v4 as uuidv4} from 'uuid'
import {useState} from "react";
import { FaRegEye } from "react-icons/fa";
import {set} from "mobx";

const CustomForm = ({registr, seeMail}) => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordTwo, setShowPasswordTwo] = useState(false)
  const [passwordMatchError, setPasswordMatchError] = useState(false)
  const [lenghtError, setLenghtError] = useState(false)
  const [passwordStrench, setPasswordStrench] = useState(null)
  const [checkName, setCheckName] = useState(null)
  const [checkSurname, setCheckSurname] = useState(null)
  const [lengthName, setLengthName] = useState(false)

  const [nameDirty, setNameDirty] = useState(false)
  const [surnameDirty, setSurnameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [passwordTwoDirty, setPasswordTwoDirty] = useState(false)
  const [nameError, setNameError] = useState('імʼя не може бути порожнім')
  const [surnameError, setSurnameError] = useState('прізвище не може бути порожнім')
  const [emailError, setEmailError] = useState('email не може бути порожнім')
  const [passwordError, setPasswordError] = useState('пароль не може бути порожнім')
  const [passwordTwoError, setPasswordTwoError] = useState('пароль не може бути порожнім')

  const click = (e) => {
    e.preventDefault();
    // console.log(name, surname, password, passwordTwo)
    setEmail('')
    setLogin('')
    setName('')
    setSurname('')
    setPassword('')
    setPasswordTwo('')
  }

  const handleInputChangeName = (e) => {
    const name = e.target.value

    checkNameStrench(name)
    blueHandler(e)
    nameHandler(e)

  }

  const handleInputChangeSurname = (e) => {
    const surname = e.target.value

    blueHandler(e)
  }

  const handleInputChangeEmail = (e) => {
    const email = e.target.value
    blueHandler(e)
    emailHandler(e)
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const newPassword = e.target.value
    setPassword(newPassword)
    checkPasswordStrench(newPassword)
    checkPasswordMatchError(newPassword)
    blueHandler(e)

  }

  const handleInputChangeTwo = (e) => {
    e.preventDefault();
    const newPasswordTwo = e.target.value
    setPasswordTwo(newPasswordTwo)
    checkPasswordStrench(newPasswordTwo)
    checkPasswordMatchError(newPasswordTwo)
    blueHandler(e)
  }
  const checkPasswordMatchError = (newRepeatePassword) => {
    setPasswordMatchError(newRepeatePassword !== password)
  }

  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const handleClickShowPasswordTwo = () => setShowPasswordTwo(!showPasswordTwo)

  const checkNameStrench = (newName) => {
    const minLength = 2
    setLengthName(newName.length < minLength)
    const isLengthValid = newName.length >= minLength
    const hasLetters = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/.test(newName)
    const hasUpperCase = /[а-яА-яa-zA-z]/
    const hasNumber = /[0-9]/

    const strength = isLengthValid + hasLetters + hasLetters + hasUpperCase + hasNumber
    setCheckName(strength)

  }

  const checkPasswordStrench = (newPassword) => {
    const minLength = 8
    setLenghtError(newPassword.length < minLength)
    const isLengthValid = newPassword.length >= minLength
    const hasLetters = /[a-z]/.test(newPassword)
    const hasUppercase = /[A-Z]/.test(newPassword)
    const hasNumber = /\d/.test(newPassword)
    const hasSymbol = /[@$!%*?&#()_+{}[\]:;<>,.~\\/-]/.test(newPassword)

    const strength = hasLetters + hasUppercase + hasNumber + hasSymbol + isLengthValid
    setPasswordStrench(strength)
  }

  const getStrengthColor = () => {
    if(lenghtError) {
      return "red"
    }
    else if(passwordStrench === null) {
      return ""
    }
    else if(passwordStrench <= 1) {
      return "red"
    }
    else if(passwordStrench <= 2) {
      return "blue"
    }
    else if(passwordStrench <= 3) {
      return "grey"
    } else if(passwordStrench <= 4) {
      return "green"
    }
  }

  const blueHandler = (e) => {
    switch (e.target.name) {
      case 'name' :  setNameDirty(true)

        break;
      case'surname' :
        setSurnameDirty(true)
        break;
      case 'email' :
        setEmailDirty(true)
        break;
      case 'password' :
        setPasswordDirty(true)
        break;
      case 'passwordTwo' :
        setPasswordTwoDirty(true)
        break;

    }

  }

  const nameHandler = (e) => {
    setName(e.target.value)

    const re =   /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig
    if(!re.test(String(e.target.value).toLowerCase())) {
      setNameError('не коректне імʼя')
    }
    else {
      setNameError('')
    }
  }




  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('не коректний email')
    }
    else {
      setEmailError('')
    }

  }


  return (

    <>
      <div className='input_container'>
        <form className='form'>
          <input  placeholder={'name'} className='input_custom_field' value={name} name='name' type='text'
                  onChange={ handleInputChangeName}/>
          <div>
            {lengthName && <p  className='error'>Мінімальна кількість символів 2</p>}
            {nameDirty && nameError && <p style={{color: 'red'}}>{nameError}</p>}
          </div>
          <input  placeholder={'surname'} className='input_custom_field' value={surname} name='surname' type='text'
                  onChange={handleInputChangeSurname}/>
          <div>
            {checkSurname && <p  className='error'>Мінімальна кількість символів 2</p>}
            {surnameDirty && surnameError && <p style={{color:'red'}}>{surnameError}</p>}
          </div>
          <input  placeholder={'email'} className='input_custom_field' value={email} name='email' type='text'
                  onChange={ handleInputChangeEmail}/>
          <div>
            {emailDirty && emailError && <p style={{color:'red'}}>{emailError}</p>}
          </div>
          <input  placeholder={'password'} className='input_custom_field' value={password} name='password' type={!showPassword ? 'password'
            : 'text'}
                  onChange={handleInputChange}/>
          <div>
            {passwordDirty && passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
          </div>
          <FaRegEye onClick={handleClickShowPassword}/>
          <input  placeholder={'repeat password'} className='input_custom_field' value={passwordTwo} name='passwordTwo' type={!showPasswordTwo ? 'password'
            : 'text'}
                  onChange={handleInputChangeTwo}/>
          <FaRegEye onClick={handleClickShowPasswordTwo}/>
          <div>
            {lenghtError && <p  className='error'>Мінімальна кількість символів 8</p>}
            {passwordMatchError && <p className='error'>Паролі не співпадають</p>}</div>
          {passwordTwoDirty && passwordTwoError && <p style={{color: 'red'}}>{passwordTwoError}</p>}

          {passwordStrench !== null && !lenghtError && (
            <p style={{color: getStrengthColor()}}>
              {passwordStrench === 1 && 'дуже простий пароль'}
              {passwordStrench === 2 && ' простий пароль'}
              {passwordStrench === 3 && 'нормальний пароль'}
              {passwordStrench === 4 && 'добрий пароль'}
              {passwordStrench === 5 && 'надійний  пароль'}
            </p>
          )}

          <button disabled={lenghtError || passwordMatchError} className='custom_form_button' onClick={click}>{registr ? 'Реєстрація' : 'Увійти'}</button>
        </form>
      </div>


    </>

  );
};

export default CustomForm;