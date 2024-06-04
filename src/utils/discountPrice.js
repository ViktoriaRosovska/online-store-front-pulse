export const discountPrice = (price, discount) => {
  return (price - (discount * price) / 100).toFixed(2);
};
