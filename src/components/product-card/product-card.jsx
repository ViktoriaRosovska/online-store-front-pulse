import FavoriteButton from '../favorite-button/favorite-button';
import ButtonBuy from './button-buy/button-buy';
import './product-card.css';
import SaleBadge from './sale-badge/sale-badge';
import ProductTittle from './product-info/product-tittle';
import ProductPrice from './product-info/product-price';
import ProductPriceSale from './product-info/product-price-sale';

function ProductCard(props) {
    return (
        <div className={`product__card ${props.type == "catalog" ? "catalog" : ""}`}>
            <div className={`product__img-block ${props.type == "catalog" ? "catalog" : ""}`}>
                <img className={`product__img ${props.type == "catalog" ? "catalog" : ""}`}src={props.productImage} alt="" />
                <FavoriteButton className={`favorite__button ${props.type == "sale" ? "sale" : ""}`}/>
                {props.type == 'sale' && <SaleBadge />}
            </div>
            <div className="product__info">
                <ProductTittle tittle={props.tittle} />
                {props.type == 'sale' ? <ProductPriceSale 
                                            fullPrice={props.fullPrice} 
                                            salePrice={props.salePrice} 
                                            />
                    : <ProductPrice price={props.price} />
                }
            </div>
            <ButtonBuy />
        </div>
    )
}

export default  ProductCard;