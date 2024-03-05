import Text from "../../../../components/text/text";

function FooterTittleSecondary() {
    const styles = {
        fontSize: "24px",
        lineHeight: "140%",
        color: "var(--white-text-color)",
    }
    return (
        <div className="footer__tittle-secondary">
            <Text 
                text="Підпишись та отримай знижку -10 % за перш покупку"
                className="secondary__titte-text"
                style={styles}
            />
        </div>
    )
}

export default FooterTittleSecondary;
