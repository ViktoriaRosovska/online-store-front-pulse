export const createUserAddress = (street, numberHouse, numberHoll, flat) => {
  const addressArr = [];
  addressArr.push(street.label, "будинок: " + numberHouse);
  if (numberHoll) addressArr.push("під'їзд: " + numberHoll);
  if (flat) addressArr.push("квартира: " + flat);
  return addressArr.join(", ");
};
