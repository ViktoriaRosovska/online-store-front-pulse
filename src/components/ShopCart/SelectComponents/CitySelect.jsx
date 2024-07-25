import Select from "react-select";
import { selectStyle } from "./selectStyle";

export const CitySelect = ({
  options,
  onChange,
  onSearch,
  placeholder,
  displayCity,
  // errors,
  $isDesktop,
  components,
  isError,
  noOptionsMessage,
}) => {
  let modifiedOptions = [];

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
        styles={selectStyle(isError)}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
        value={displayCity.Description ? displayCity : null}
        components={components}
        noOptionsMessage={noOptionsMessage}
      />
    </>
  );
};
