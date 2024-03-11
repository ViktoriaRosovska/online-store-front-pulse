import './Cards.css'
import Button from "../Buttons/Button.jsx";
import {useNavigate} from "react-router-dom";

const Card = ({info, image, price, id}) => {
const navigate = useNavigate()





  const aLink = () => {navigate('/man/' + id)}

  return (
    <>
<div className='card'>
  <img src={image}/>
  <p>{info}</p>
  <p>{`${price} грн`}</p>
  <Button text={'Купити'} click={aLink}/>
</div>
    </>
  );
};

export default Card;
