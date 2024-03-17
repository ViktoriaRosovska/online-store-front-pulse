import "./ProductPage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { fetchOneDevice } from "../../http/ProductsApi.jsx";
import ProductInfo from "../../components/product-page/product-info/ProductInfo.jsx";
import ProductGallery from "../../components/product-page/product-gallery/ProductGallery.jsx";
import ProductDescription from "../../components/product-page/product-description/product-description.jsx";
import ProductCharacteristics from "../../components/product-page/product-characteristics/product-characteristics.jsx";
import ProductBreadcrumb from "../../components/product-page/product-link/ProductLink.jsx";

const ProductPage = observer(() => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchOneDevice(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Загрузка данных...</div>;
  }

  const middleIndex = Math.ceil(product.imgGallery.length / 2);
  const topPhotos = product.imgGallery.slice(0, middleIndex);
  const bottomPhotos = product.imgGallery.slice(middleIndex);

  return (
    <div className="product-page">
      <div className="container">
        <ProductBreadcrumb
          category={product.categories.sex}
          productName={product.name}
        />{" "}
        <div className="product-сontainer">
          <ProductGallery topPhotos={topPhotos} bottomPhotos={bottomPhotos} />
          <ProductInfo
            productName={product.name}
            productCode={product._id}
            productPrice={product.price}
            productSizes={[
              "41",
              "41.5",
              "42",
              "42.5",
              "43",
              "43.5",
              "44",
              "45",
            ]}
          />
        </div>
        <ProductDescription description={product.description} />{" "}
        <ProductCharacteristics features={product.features} />{" "}
      </div>
    </div>
  );
});

export default ProductPage;
