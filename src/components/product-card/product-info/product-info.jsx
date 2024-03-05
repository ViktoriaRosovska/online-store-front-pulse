import ProductPrice from './product-price.jsx';
import ProductTittle from './product-tittle.jsx';

function ProductInfo(props) {
    const styles = {
        margin: "12px 0px",
        color: "var(--black-text-color)",
        fontSize: "16px"
    }
    return (
        <div style={styles} className="product__info">
            <ProductTittle tittle={props.tittle}/>
            <ProductPrice price={props.price}/>         
        </div>
    )
}

export default ProductInfo;
