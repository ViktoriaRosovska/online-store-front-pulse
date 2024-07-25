import Select from "react-select";
import { selectStyle } from "./selectStyle";

export const StreetSelect = ({
  options,
  onChange,
  onSearch,
  onBlur,
  placeholder,
  displayStreet,
  isError,
  components,
  noOptionsMessage,
}) => {
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
        styles={selectStyle(isError)}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        onBlur={onBlur}
        placeholder={placeholder}
        value={displayStreet?.Description ? displayStreet : null}
        noOptionsMessage={noOptionsMessage}
        components={components}
      />
    </div>
  );
};
