import './FormContainerInput.css'
import Button from "../Buttons/Button.jsx";
const FormContainerInput = ({text, placeholder, type} ) => {
  return (
    <>
      <p className='email'>{text}</p>
      <input className='form_container_input' placeholder={placeholder} type={type}/>

    </>


  );
};

export default FormContainerInput;
