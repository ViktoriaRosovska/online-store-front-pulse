import './Cards.css'
import Button from "../Buttons/Button.jsx";
const Card = ({info, image, price}) => {
  return (
    <>
<div className='card'>
  <img src={image}/>
  <p>{info}</p>
  <p>{`${price} грн`}</p>
  <Button text={'Купити'}/>
</div>
    </>
  );
};

export default Card;
