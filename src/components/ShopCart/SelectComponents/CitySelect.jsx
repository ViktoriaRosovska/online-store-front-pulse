import Select from "react-select";

export const CitySelect = ({
  options,
  onChange,
  onSearch,
  placeholder,
  displayCity,
  errors,
  values,
  $isDesktop,
  components,
}) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      border: errors.city
        ? "1px solid red"
        : "1px solid var(--black-text-color)",
      borderRadius: "16px",

      "&:hover": {
        border: errors.city
          ? "1px solid red"
          : "1px solid var(--black-text-color)",
      },
      boxShadow: "none",
    }),
    menu: baseStyles => ({
      ...baseStyles,
      "&::-webkit-scrollbar": {
        width: "5px",
      },
    }),
    menuList: baseStyles => ({
      ...baseStyles,
      "&::-webkit-scrollbar": {
        width: "5px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        width: "2px",
        backgroundColor: "black",
        borderRadius: "2px",
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
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      // height: "60px",
      borderBottom: state.isFocused
        ? "1px solid var(--black-text-color)"
        : "1px solid var(--grey-text-color)",
      color: "var(--black-text-color)",

      boxShadow: "none",
      cursor: "pointer",

      paddingTop: "16px",
      paddingBottom: "16px",
      backgroundColor: state.isSelected
        ? "transparent!important"
        : "transparent!important",
    }),
    singleValue: baseStyles => ({
      ...baseStyles,
      width: "100%",
      margin: 0,
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
        $isDesktop={$isDesktop}
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
        // value={displayCity}
        // defaultValue={values?.city}
        components={components}
      />
    </>
  );
};
