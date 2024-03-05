import './ModalAuth.css'
import FormContainerInput from "../../components/formContainerInput/FormContainerInput.jsx";
import InputForm from "../../components/formContainer/InputForm.jsx";
import CustomForm from "../../components/form/CustomForm.jsx";
import {useState} from "react";
const ModalAuth = ({modalOn,seeOnMail }) => {


  const [registr, setRegistr] = useState(false)

  const registrOn = () => {
    setRegistr((e) =>!e);

  }




  return (<>

      <div className={registr ? 'modal_auth_on' : 'modal_auth'}>
        <img onClick={() => modalOn()} className='modal_auth_close' src='public/icons/Group 176.png'/>
        <div className='modal_auth_text'>
          <p className='modal_auth_text_entrance' onClick={registrOn}
             style={!registr ? {fontWeight: 'normal'} : {fontWeight: 'lighter'}}
          >Вхід</p>
          <p className='modal_auth_text_auth' onClick={registrOn}
             style={registr ? {fontWeight: 'normal'} : {fontWeight: 'lighter'}}
          >Реєстрація</p>
        </div>
        <div className='modal_auth_text_line'></div>


        <CustomForm registr={registr} />

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
          <img src='public/icons/Group 47879.png'/>
          <img src='public/icons/Group 47880.png'/>
        </div>

      </div>
    </>

  );
};

export default ModalAuth;
