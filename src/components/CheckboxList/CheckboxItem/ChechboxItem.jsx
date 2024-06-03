import { CheckboxItemWrapper } from "./CheckboxItem.styled";

const CheckboxItem = ({ name, item, handleInputChange, checked }) => {
  return (
    <CheckboxItemWrapper key={name} className="checkboxList-item">
      <input
        type="checkbox"
        value={item}
        id={"cbl_" + name}
        checked={checked}
        onChange={e => handleInputChange(e, name)}
      />
      <label htmlFor={"cbl_" + name}>{item}</label>
    </CheckboxItemWrapper>
  );
};
export { CheckboxItem };
