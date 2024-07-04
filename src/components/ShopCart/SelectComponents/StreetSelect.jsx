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

    indicatorsContainer: baseStyles => {
      return {
        ...baseStyles,
        padding: "0px",
        paddingLeft: "0px",
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px",
        border: "1px solid red",
      };
    },

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
      paddingBottom: "14px",
      // color: "red",
      margin: 0,
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
        isClearable
      />
    </>
  );
};
