import Text from "../../../components/text/text";
import "./copyright.css";

function Copyright() {
  return (
    <div className="copyright__section">
      <Text
        className="copyright__section-text"
        text="© 2024 PulseRun. Всі права захищені."
      />
    </div>
  );
}

export default Copyright;
