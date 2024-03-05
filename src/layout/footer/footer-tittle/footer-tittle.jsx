import "./footer-tittle.css"
import FooterTittleMain from "./footer-tittle-main/footer-tittle-main";
import FooterTittleSecondary from "./footer-tittle-secondary/footer-tittle-secondary";
import Input from "../../../components/input/input";
import Button from "../../../components/button/button";

function FooterTittle() {
    const styles = {
        position: "relative",
        padding: "48px 0px 24px 0px"
    }
    return (
        <div className="container">
            <div className="footer__inner" style={styles}>
                <div className="footer__tittle">
                    <FooterTittleMain />
                    <FooterTittleSecondary />
                    <Input 
                        type="text"
                        placeholder="Email"
                        className="footer__tittle-input"
                    />
                    <Button 
                        btnText="Підписатися"
                        btnType="submit"
                        className="footer__tittle-btn"
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterTittle;
