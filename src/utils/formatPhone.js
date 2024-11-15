export const formatPhone = number => {
  if (number) {
    const cc = number.substr(0, 3); // +38
    const ac = number.substr(3, 3); // 053
    const n1 = number.substr(6, 3); // 123
    const n2 = number.substr(9, 2); // 45
    const n3 = number.substr(11, 2); // 67

    let formatted = "";
    if (cc.length === 3) {
      if (ac.length > 0) formatted += "(" + ac;
      if (ac.length === 3) {
        if (n1.length > 0) formatted += ")" + n1;
        if (n1.length === 3) {
          if (n2.length > 0) formatted += "-" + n2;
          if (n2.length === 2 && n3.length > 0) formatted += "-" + n3;
        }
      }
    }

    return formatted;
  }
};
