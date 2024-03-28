import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
// import { Context } from "../main.jsx";
import { brandNew } from "../../http/ProductsApi.jsx";
import Card_slider from "../Card_slider/Card_slider.jsx";

const AsyncSlider = observer(() => {
  // const { store } = useContext(Context);
  const [asyncData, setAsyncData] = useState([]);

  useEffect(() => {
    brandNew().then((res) => setAsyncData(res));
  }, []);

  return (
    <>
      {asyncData.products?.map((el) => {
        return <Card_slider key={el._id} info={el.name} image={el.imgThumbnail} price={el.price} id={el._id} />;
      })}
    </>
  );
});

export default AsyncSlider;
