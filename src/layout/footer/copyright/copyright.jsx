import Text from "../../../components/text/text";

function Copyright() {
    const styles = {
        section: {
            marginTop: "120px",
            textAlign: "center"
        },
        text: {
            color: "var(--white-text-color)",
            fontSize: "14px"
        }
    }
    
    return (
        <div className="copyright__section" style={styles.section}>
            <Text
                style={styles.text}
                className="copyright__section-text" 
                text="© 2024 PulseRun. Всі права захищені."
            />
        </div>
    )
}

export default Copyright;