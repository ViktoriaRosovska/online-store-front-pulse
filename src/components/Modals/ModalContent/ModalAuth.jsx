import "./ModalAuth.css";
import CustomForm from "../../form/RegisterForm/CustomRegisterForm.jsx/index.js";
import { useState } from "react";
import icon from "../../../../public/icons/Group 47879.png";
import icon2 from "../../../../public/icons/Group 47880.png";
import CustomLoginForm from "../../form/LoginForm/CustomLoginForm.jsx";

const ModalAuth = ({ seeOnMail }) => {
  const [registr, setRegistr] = useState(false);

  const registrOn = () => {
    setRegistr(e => !e);
  };

  return (
    <>
      <div className="modal_auth_text">
        <p
          className="modal_auth_text_entrance"
          onClick={registrOn}
          style={
            !registr ? { fontWeight: "normal" } : { fontWeight: "lighter" }
          }
        >
          Вхід
        </p>
        <p
          className="modal_auth_text_auth"
          onClick={registrOn}
          style={registr ? { fontWeight: "normal" } : { fontWeight: "lighter" }}
        >
          Реєстрація
        </p>
      </div>
      <div className="modal_auth_text_line"></div>

      {registr ? <CustomForm registr={registr} /> : <CustomLoginForm />}

      <p className="modal_auth_text4" onClick={() => seeOnMail()}>
        Забули пароль?
      </p>

      {!registr ? (
        <p className="modal_auth_text2">Немає облікового запису?</p>
      ) : (
        ""
      )}

      {!registr && (
        <div className="modal_auth_text3">
          <p onClick={registrOn}>Заєреструватися</p>
        </div>
      )}

      <div
        className="modal_auth_container"
        style={registr ? { marginTop: -50 } : { marginTop: 0 }}
      >
        <div className="modal_auth_container_line"></div>
        <p className="modal_container_line_text">Або</p>
        <div className="modal_auth_container_line1"></div>
      </div>
      <div
        className="modal_auth_container_social"
        style={registr ? { marginTop: -50 } : { marginTop: 96 }}
      >
        <img src={icon} />
        <img src={icon2} />
      </div>
    </>
  );
};

export default ModalAuth;
