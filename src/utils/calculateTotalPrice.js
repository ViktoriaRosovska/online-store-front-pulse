export const calculateTotalPrice = products => {
    return products.reduce((total, product) => {
      return total + product.quantity * product.priceByOne;
    }, 0);
  };