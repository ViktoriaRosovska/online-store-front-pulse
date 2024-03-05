import Text from "../../text/text";

function ProductTittle(props) {
    const styles = {
        display: "block"
    }
    return (
        <Text style={styles} text={props.tittle}/>
    )
}

export default ProductTittle;
