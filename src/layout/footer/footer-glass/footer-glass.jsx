import logoFooterImg from '/logo-footer.svg';
import FooterGlassInfo from './footer-glass-info/footer-glass-info';
import Copyright from '../copyright/copyright';

function FooterGlass() {
    const styles = {
        footer__glass: {
            position: "relative",
            background: "var(--footer-glass-bg-color)",
            backdropFilter: "blur(30px)",
            borderTopLeftRadius: "36px",
            borderRopRightRadius: "36px"
        },
        footer__glass_inner: {
            padding: "30px 0px 0px 0px"
        }
    }
    return (
        <div className="footer__glass" style={styles.footer__glass}>
            <div className="container">
                <div className="footer__glas-inner" style={styles.footer__glass_inner}>
                    <div className="footer__glass-logo">
                        <img src={logoFooterImg} alt="" />
                    </div>
                    <FooterGlassInfo />
                    <Copyright />
                </div>
            </div>
        </div>

        
    )
}

export default FooterGlass;
