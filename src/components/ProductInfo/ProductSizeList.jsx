import {
  SizeSelectorItem,
  SizeSelectorLabel,
  SizeSelectorList,
} from "./ProductInfo.styled";

const ProductSizeList = ({ sizes, onSizeSelect, currentValue }) => {
  const uniqueSizes = sizes.reduce(
    (acc, item) =>
      !acc.some(({ _id }) => item._id === _id) ? [...acc, item] : acc,
    []
  );

  return (
    <SizeSelectorList>
      {uniqueSizes.map(({ _id, value }) => (
        <SizeSelectorItem key={_id}>
          <SizeSelectorLabel $selected={currentValue === value}>
            {value}
            <input
              hidden
              type="radio"
              name="size"
              value={value}
              onChange={onSizeSelect}
            />
          </SizeSelectorLabel>
        </SizeSelectorItem>
      ))}
    </SizeSelectorList>
  );
};

export default ProductSizeList;
