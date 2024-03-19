import Carousel from "../Carousel/Carousel.jsx";
import "./Slider.css";

import { observer } from "mobx-react-lite";
// import {Context} from "../../main.jsx";
import AsyncSlider from "../../asyncSlider/AsyncSlider.jsx";

const Slider = observer(() => {
  return (
    <>

        <Carousel>
          <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />
        </Carousel>

    </>
  );
});

export default Slider;
