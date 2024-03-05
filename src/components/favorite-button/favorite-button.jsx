import Button from './../button/button.jsx';
import favoriteIcon from '/icons/favorites-icon.svg';
import './favorite-button.css';

function FavoriteButton(props) {
    return (
        <Button className={props.className}>
            <img className='buttonImg' src={favoriteIcon} alt="" />
        </Button>
    )
}

export default FavoriteButton;
