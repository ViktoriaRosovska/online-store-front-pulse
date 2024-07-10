import Select from "react-select";

export const StreetSelect = ({
  options,
  onChange,
  onSearch,
  onBlur,
  placeholder,
  displayStreet,
}) => {
  const style = {
    control: baseStyles => ({
      ...baseStyles,
      border: "1px solid var(--black-text-color)",
      borderRadius: "16px",
      //   backgroundColor: "transparent",
      //   boxShadow: "none",
      //   border: "1px solid transparent",
      //   minHeight: "20px",
      // height: "48px",
      // padding: "14px 16px",

      "&:hover": {
        border: "1px solid var(--black-text-color)",
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
    }),

    option: baseStyles => ({
      ...baseStyles,

      color: "var(--black-text-color)",
    }),

    singleValue: baseStyles => ({
      ...baseStyles,

      margin: 0,
    }),
    valueContainer: baseStyles => ({
      ...baseStyles,

      padding: "14px 16px",
      height: "48px",
    }),
  };

  const modifiedOptions = [];

  if (options) {
    for (const option of options) {
      modifiedOptions.push({
        ...option,
        value: option.Ref,
        label: option.StreetsType + " " + option.Description,
      });
    }
  } else if (displayStreet) {
    modifiedOptions.push(displayStreet);
  }

  return (
    <>
      <Select
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        onBlur={onBlur}
        placeholder={placeholder}
        value={displayStreet}
        // isClearable
      />
    </>
  );
};
