import './Button.css'
const Button = ({text, click}) => {

  return (
    <div className='button' onClick={click}>

     <p> {text}</p>
    </div>
  );
};

export default Button;
