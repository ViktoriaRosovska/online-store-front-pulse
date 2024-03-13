import "./Banner.css";
import Button from "../../../components/Buttons/Button.jsx";
const MyComponent = () => {
  return (
    <section className="banner">
      <h1 className="banner_1"> ЗНИЖКА ДО -50% НА </h1>
      <h2 className="banner_2">ЗИМОВЕ ВЗУТТЯ</h2>

      <div className="banner_btn">
        <Button text={"Каталог"} />
      </div>
    </section>
  );
};

export default MyComponent;
