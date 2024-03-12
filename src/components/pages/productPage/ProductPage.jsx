import "./ProductPage.css";
import { useParams } from "react-router-dom";
// import {host} from "../../../http/index.jsx";
// import {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
// import {Context} from "../../../main.jsx";
import { fetchOneDevice } from "../../../http/ProductsApi.jsx";
import { useEffect, useState } from "react";

const ProductPage = observer(() => {
  const { id } = useParams();
  // const {store} = useContext(Context)
  const [cross, setCross] = useState({});

  console.log(id);

  // const fetchOneDevice = async (id) => {
  //   const {data} = await host.get('products/' + id);
  //
  //   return data;
  // };

  useEffect(() => {
    fetchOneDevice(id).then((res) => {
      setCross(res);
    });
  }, []);

  console.log(cross.imgGallery?.map((el) => el));

  return (
    <div className="product_page">
      <div>
        {cross.imgGallery?.map((img, i) => (
          <img className="product_page_img_cross" src={img} key={i} style={{ width: "341px", height: "369px" }} />
        ))}
      </div>
    </div>
  );
});

export default ProductPage;
