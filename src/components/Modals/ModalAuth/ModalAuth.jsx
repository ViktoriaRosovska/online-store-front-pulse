import CustomLoginForm from "components/form/LoginForm/CustomLoginForm"
import CustomRegisterForm from "components/form/RegisterForm/CustomRegisterForm"
import { useState } from "react"
import { Button, Navigation } from "./ModalAuth.styled"

const ModalAuth = ({onClose}) => {
    const [mode, setMode] = useState('login')

    const switchToLogin = () => {
        setMode('login')
    }

    const switchToRegister = () => {
        setMode('register')
    }

    return (
        <>
            <Navigation>
                <Button $login $active={mode === 'login'} type="button" onClick={switchToLogin}>Вхід</Button>
                <Button $active={mode === 'register'} type="button" onClick={switchToRegister}>Реєстрація</Button>
            </Navigation>
            {mode === 'login' ? (<CustomLoginForm onClose={onClose} />) : (<CustomRegisterForm/>)}
            
        </>
   )
}

export default ModalAuth