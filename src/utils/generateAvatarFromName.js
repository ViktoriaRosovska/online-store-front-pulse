export const generateAvatarFromName = (name, surname) => {
    if (name && surname) {
      return `${name.charAt(0).toUpperCase()}${surname
        .charAt(0)
        .toUpperCase()}`;
    } else {
      return "";
    }
  };