import Select from "react-select";

export const CitySelect = ({
  options,
  onChange,
  onSearch,
  placeholder,
  displayCity,
  errors,
  values,
}) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      border: errors.city
        ? "1px solid red"
        : "1px solid var(--black-text-color)",
      borderRadius: "16px",

      height: "48px",
      padding: "14px 16px",

      "&:hover": {
        border: errors.city
          ? "1px solid red"
          : "1px solid var(--black-text-color)",
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
      padding: 0,
      //   width: "120px",
    }),
  };
  const modifiedOptions = [];

  if (options) {
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
  } else if (displayCity) {
    modifiedOptions.push(displayCity);
  }

  return (
    <>
      <Select
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
        value={displayCity}
        defaultValue={values?.city}
      />
    </>
  );
};
