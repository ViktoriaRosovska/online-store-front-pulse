import Text from "../../../../components/text/text";

function FooterTittleMain() {
    const styles = {
        fontSize: "36px",
        lineHeight: "140%",
        color: "var(--white-text-color)",
        fontFamily: "var(--tittle-font)"
    }

    return (
        <div className="footer__tittle-main">
            <Text 
                text="Підпишись" 
                className="main__tittle-text"   
                style={styles} 
            />
        </div>
    )
}

export default FooterTittleMain;
