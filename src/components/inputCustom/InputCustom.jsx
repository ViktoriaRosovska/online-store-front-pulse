import './InputCustom.css'
import {Field, ErrorMessage as Error} from "formik";

export const InputCustom = ({id, label, name, placeholder, type}) => {
  return (
    <div className='input_container'>
      <label htmlFor={id}>{label}</label>
      <Field className='input_custom_field' type='text' name={name} placeholder={placeholder} id={id} type={type}/>
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
}