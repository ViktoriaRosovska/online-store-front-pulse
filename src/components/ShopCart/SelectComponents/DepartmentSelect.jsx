import Select from "react-select";
import { selectStyle } from "./selectStyle";

export const DepartmentSelect = ({
  options,
  onChange,
  onSearch,
  placeholder,
  displayDepartment,
  isError,
  noOptionsMessage,
  components,
}) => {
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
        styles={selectStyle(isError)}
        options={modifiedOptions}
        onChange={onChange}
        onInputChange={onSearch}
        placeholder={placeholder}
        value={displayDepartment.Description ? displayDepartment : null}
        components={components}
        noOptionsMessage={noOptionsMessage}
      />
    </>
  );
};
