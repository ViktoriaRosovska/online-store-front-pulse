import Select from "react-select";

export const DepartmentSelect = ({
  options,
  onChange,
  onSearch,
  placeholder,
  displayDepartment,
  isError,
}) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      border: isError ? "1px solid red" : "1px solid var(--black-text-color)",
      borderRadius: "16px",

      // height: "48px",
      // padding: "14px 16px",

      "&:hover": {
        border: isError ? "1px solid red" : "1px solid var(--black-text-color)",
      },
      "@media screen and (min-width: 1440px)": {
        ...baseStyles["@media screen and (min-width: 1440px)"],
        height: "60px",
      },
    }),
    menu: baseStyles => ({
      ...baseStyles,
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
      padding: "14px 16px",
      height: "48px",
      width: "100%",
      "@media screen and (min-width: 1440px)": {
        ...baseStyles["@media screen and (min-width: 1440px)"],
        height: "60px",
      },
    }),
  };
  const modifiedOptions = [];
  if (options) {
    for (const option of options) {
      modifiedOptions.push({
        ...option,
        value: option.Ref,
        label: option.Description,
      });
    }
  } else if (displayDepartment) {
    modifiedOptions.push(displayDepartment);
  }

  return (
    <>
      <Select
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
        value={displayDepartment}
      />
    </>
  );
};
