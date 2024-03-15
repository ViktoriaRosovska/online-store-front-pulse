import Carousel from "../Carousel/Carousel.jsx";
import "./Slider.css";

import { observer } from "mobx-react-lite";
// import {Context} from "../../main.jsx";
import AsyncSlider from "../../asyncSlider/AsyncSlider.jsx";

const Slider = observer(() => {

  return (
    <>
      <div className="main_block_carausel">
        <Carousel>
          <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />
          <AsyncSlider />
        </Carousel>


      </div>
    </>
  );
});

export default Slider;
