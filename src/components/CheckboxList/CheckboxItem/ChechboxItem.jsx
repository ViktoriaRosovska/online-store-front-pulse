import { CheckboxItemWrapper } from "./CheckboxItem.styled";

const CheckboxItem = ({ item, handleInputChange, checked }) => {
  return (
    <CheckboxItemWrapper key={item} className="checkboxList-item">
      <input
        type="checkbox"
        value={item}
        id={"cbl_" + item}
        checked={checked}
        onChange={(e) => handleInputChange(e, item)}
      />
      <label htmlFor={"cbl_" + item} style={{ display: "inline-block", width: "100%" }}>
        {item}
      </label>
    </CheckboxItemWrapper>
  );
};
export { CheckboxItem };
