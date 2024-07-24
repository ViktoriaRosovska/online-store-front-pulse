import Select from "react-select";

export const StreetSelect = ({
  options,
  onChange,
  onSearch,
  onBlur,
  placeholder,
  displayStreet,
  showPlaceholder,
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
      width: "100%",

      "&:hover": {
        border: "1px solid var(--black-text-color)",
      },
      "@media screen and (min-width: 1440px)": {
        ...baseStyles["@media screen and (min-width: 1440px)"],
        height: "60px",
      },
    }),
    placeholder: baseStyles => ({
      ...baseStyles,
      // backgroundColor: "black",
      // fontSize: "2em",
      // color: "black",
      // fontWeight: 400,
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
      width: "100%",
      padding: 0,
      margin: 0,
    }),

    option: baseStyles => ({
      ...baseStyles,

      color: "var(--black-text-color)",
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
        label: option.StreetsType + " " + option.Description,
      });
    }
  } else if (displayStreet) {
    modifiedOptions.push(displayStreet);
  }

  console.log("displayStreet", displayStreet, modifiedOptions);
  return (
    <div style={{ position: "relative" }}>
      <Select
        styles={style}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        onBlur={onBlur}
        placeholder={placeholder}
        value={displayStreet}
        noOptionsMessage={({ inputValue }) =>
          `No result found for "${inputValue}"`
        }
      />
      {displayStreet?.Description == undefined && showPlaceholder && (
        <span
          style={{
            color: "gray",
            position: "absolute",
            bottom: "14px",
            left: "16px",
          }}
        >
          Вулиця
        </span>
      )}
    </div>
  );
};
