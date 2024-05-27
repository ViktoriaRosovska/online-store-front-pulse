import Select from "react-select";

export const CitySelect = ({ options, onChange, onSearch, placeholder }) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      border: "1px solid var(--black-text-color)",
      borderRadius: "16px",
      //   backgroundColor: "transparent",
      //   boxShadow: "none",
      //   border: "1px solid transparent",
      //   minHeight: "20px",
      height: "48px",
      padding: "14px 16px",

      //   "&:hover": {
      //     border: "1px solid transparent",
      //     color: "var(--grey-text-color)",
      //   },
    }),
    menu: baseStyles => ({
      ...baseStyles,
      //   width: "180px",
      //   backgroundColor: "white",
      //   border: "1px solid var(--black-bg-color)",
      //   padding: "5px 12px",
      //   borderRadius: "16px",
      //   boxShadow: "none",
      //   right: 0,
      //   "&::-webkit-scrollbar": {
      //     width: "0px",
      //   },
    }),
    menuList: baseStyles => ({
      ...baseStyles,
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    }),
    dropdownIndicator: baseStyles => ({
      ...baseStyles,
      display: "none",
    }),
    indicatorSeparator: baseStyles => ({
      ...baseStyles,
      display: "none",
    }),

    input: baseStyles => ({
      ...baseStyles,
      padding: 0,
      margin: 0,
      //   height: "20px",
    }),
    option: baseStyles => ({
      ...baseStyles,
      //   fontSize: "14px",
      //   padding: "4px 0 10px 0",

      //   backgroundColor: "none",
      color: "var(--black-text-color)",
      //   borderBottom: "1px solid var(--black-bg-color)",
      //   "&:hover": {
      //     color: "var(--grey-text-color)",
      //   },
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      padding: 0,
      margin: 0,
      //   width: "110px",

      //   "&:hover": {
      //     color: "var(--grey-text-color)",
      //   },
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,
      padding: 0,
      //   width: "120px",
    }),
  };
  const modifiedOptions = [];

  for (const option of options) {
    modifiedOptions.push({
      ...option,
      value: option.Ref,
      label:
        option.SettlementTypeDescription +
        " " +
        option.Description +
        ", " +
        option.AreaDescription +
        " обл",
    });
  }

  return (
    <>
      <Select
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
      />
    </>
  );
};
