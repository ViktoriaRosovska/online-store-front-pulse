import Text from "../../text/text";

function SaleBadge() {
    const styles = {
        borderTopRightRadius: "16px",
        borderTopLeftRadius: "16px",
        backgroundColor: "var(--yellow-color)",
        fontSize: "14px",
        textTransform: "uppercase",
        padding: "7px 6px 0px 13px",
        width: "100%",
        position: "absolute",
        top: "0"
    }
    return (
        <div style={styles} className="sale__badge">
            <Text text="sale"/>
        </div>
    )
}

export default SaleBadge;
