import './ModalAuth.css'
import close from '../../../public/icons/Group 176.png'
import CustomForm from "../../components/form/CustomForm.jsx";
import {useState} from "react";
import icon from '../../../public/icons/Group 47879.png'
import icon2 from '../../../public/icons/Group 47880.png'
import CustomLoginForm from "../../components/form/customLogin/CustomLoginForm.jsx";
const ModalAuth = ({modalOn,seeOnMail }) => {


  const [registr, setRegistr] = useState(false)
  const [login, setLoggin] = useState(true)

  const registrOn = () => {
    setRegistr((e) =>!e);

  }




  return (<>

      <div className={registr ? 'modal_auth_on' : 'modal_auth'}>
        <img onClick={ modalOn} className='modal_auth_close' src={close}/>
        <div className='modal_auth_text'>
          <p className='modal_auth_text_entrance' onClick={registrOn}
             style={!registr ? {fontWeight: 'normal'} : {fontWeight: 'lighter'}}
          >Вхід</p>
          <p className='modal_auth_text_auth' onClick={registrOn}
             style={registr ? {fontWeight: 'normal'} : {fontWeight: 'lighter'}}
          >Реєстрація</p>
        </div>
        <div className='modal_auth_text_line'></div>

        {registr ? <CustomForm registr={registr} /> : <CustomLoginForm /> }



        <p className='modal_auth_text4' onClick={() => seeOnMail()}>Забули пароль?</p>

        {!registr ? <p className='modal_auth_text2'>Немає облікового запису?</p> : ''}

        {!registr && <div className='modal_auth_text3'>
          <p onClick={registrOn}>Заєреструватися</p>
        </div>}


        <div className='modal_auth_container' style={registr ? {marginTop: -50} : {marginTop: 0}}>

          <div className='modal_auth_container_line'></div>
          <p className='modal_container_line_text'>Або</p>
          <div className='modal_auth_container_line1'></div>
        </div>
        <div className='modal_auth_container_social' style={registr ? {marginTop: -50} : {marginTop: 96}}>
          <img src={icon}/>
          <img src={icon2}/>
        </div>

      </div>
    </>

  );
};

export default ModalAuth;
