import Text from "../../text/text";

function ProductPrice(props) {
    const styles = {
        display: "block",
        marginTop: "16px"
    }
    return (
        <Text style={styles} text={`${props.price} грн`}/>
    )
}

export default ProductPrice;
