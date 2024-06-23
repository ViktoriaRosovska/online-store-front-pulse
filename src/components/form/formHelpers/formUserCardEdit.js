export const formatDate = date => {
  const [month, year] = date.split("/");
  return `20${year}-${month}`;
};

export const editCardDateInInput = value => {
  const numbers = value?.replace(/\D/g, "");
  const parts = numbers?.match(/(\d{1,2})(\d{0,2})/);

  if (parts) {
    return parts[1] + (parts[2] ? "/" + parts[2] : "");
  }
  return "";
};

export const editCardNumberInInput = value => {
  const onlyNumbers = value?.replace(/\D/g, "");
  return onlyNumbers?.replace(/(\d{4}(?!\s))/g, "$1 ");
};

export const formatDateCard = cardDate => {
  if (!cardDate) return;
  const [year, month] = cardDate.split("-");
  return month + "/" + year.substring(2);
};
