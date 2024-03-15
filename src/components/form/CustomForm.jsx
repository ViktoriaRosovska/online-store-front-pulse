import './CustomForm.css'
import {Formik, Form} from 'formik'
import {initialValues, schemas} from "./helper.js";
import {InputCustom} from "../inputCustom/InputCustom.jsx";
import {v4 as uuidv4} from 'uuid'

const CustomForm = ({registr, seeMail}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => console.log('Success')} validationSchema={schemas.custom}>
      <Form action={''} className='form'>


        {registr && <InputCustom label='Імʼя' name='name' id={uuidv4()} placeholder='Ваше імʼя' type='text'/>}

        {registr  &&
          <InputCustom label='Прізвище' name='surname' id={uuidv4()} placeholder='Ваше прізвище' type='text'/>
        }



<InputCustom label='Email' name='email' id={uuidv4()} placeholder='Ваш Email' type='text'/>
        {!seeMail &&  <InputCustom label='Пароль' name='password' id={uuidv4()} placeholder='Пароль' type='password' />}


        {registr && <InputCustom label='Повторити пароль' name='passwordTwo' id={uuidv4()} placeholder='Пароль' type='password' />}
<button className='custom_form_button' type='submit'>{registr ? 'Реєстрація' : 'Увійти'}</button>
      </Form>
    </Formik>

  );
};

export default CustomForm;
