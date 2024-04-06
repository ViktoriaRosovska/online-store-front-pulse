import { PriceDiscount, PriceNew, PriceOld } from "./ProductInfo.styled";

const ProductPrice = ({ sale, basePrice, price }) => {
  const isDiscounted = sale === 0;
  return (
    <>
      <span>
        {!isDiscounted && <PriceOld>{basePrice} грн</PriceOld>}
        <PriceNew $sale={!isDiscounted}>{price} грн.</PriceNew>
      </span>
      {!isDiscounted && <PriceDiscount>-{sale}%</PriceDiscount>}
    </>
  );
};

export default ProductPrice;
