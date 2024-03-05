import './Cards_sale.css'
import Button from "../Buttons/Button.jsx";
const CardsSale = ({image, info, price, sale}) => {
  return (
    <>
      <div className='card_sale'>
        <div className='card_line'>
          <p className='card_price-sale'>SALE</p>
        </div>
        <img src={image}/>
        <p className='card_info'>{info}</p>
        <span className='card_price'>{`${price} грн`}  </span>
        <span className='card_price-sale'>{`${sale} грн`}</span>
        <Button text={'Купити'}/>
      </div>
    </>
  );
};

export default CardsSale;
