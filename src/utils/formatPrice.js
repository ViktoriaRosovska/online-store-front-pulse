export const formatPrice = price => {
  return (
    new Intl.NumberFormat("ru-Ru", {
      minimumFractionDigits: 0,
    }).format(price) + " грн."
  );
};
