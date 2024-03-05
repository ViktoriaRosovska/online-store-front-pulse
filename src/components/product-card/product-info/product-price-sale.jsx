import Text from "../../text/text";

function ProductPriceSale(props) {
    const styles = {
        productPriceSale: {
            marginTop: "12px"
        },
        fullPrice: {
            color: "var(--red-color)",
            textDecoration: "line-through",
            textDecorationColor: "var(--red-color)"
        },
        salePrice: {
            marginLeft: "10px"
        }
    }
    return (
        <div style={styles.productPriceSale} className="product__price-sale">
            <Text style={styles.fullPrice} text={`${props.fullPrice} грн`}/>
            <Text style={styles.salePrice} text={`${props.salePrice} грн`}/>
        </div>
    )
}

export default ProductPriceSale;
