export const formatPhoneNumber = phoneNumber => {
  const formattedNumber =
    phoneNumber &&
    phoneNumber.replace(
      /^(\+38)(\d{3})(\d{3})(\d{2})(\d{2})$/,
      "$1($2)$3-$4-$5"
    );
  return formattedNumber;
};
