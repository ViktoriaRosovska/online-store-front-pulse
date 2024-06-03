// import { Formik } from 'formik';
// import '../../layout/modals/ModalAuth.css'
// import './FormContainer.css'
// const Basic = () => (
//   <div>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//           values,
//           errors,
//           touched,
//           handleChange  ,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//         <form onSubmit={handleSubmit}>
//           <p className='email'>{'Ваш Email'}</p>
//           <input
//             className='form_container_input'
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <p className='email'>{'Ваш пароль'}</p>
//           <input
//             className='form_container_input'
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}

//           <button className='button_modal' type="submit" disabled={isSubmitting}>
//             УвійтиУвійти
//             Увійти          </button>

//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;
