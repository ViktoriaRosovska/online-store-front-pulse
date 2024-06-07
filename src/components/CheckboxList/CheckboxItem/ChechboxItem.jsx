import { CheckboxItemWrapper } from "./CheckboxItem.styled";

const CheckboxItem = ({ name, item, onChange, checked }) => {
  return (
    <CheckboxItemWrapper key={name} className="checkboxList-item">
      <input
        type="checkbox"
        value={item}
        id={"cbl_" + name}
        checked={checked}
        onChange={e => onChange(e, name)}
      />
      <label htmlFor={"cbl_" + name}>{item}</label>
    </CheckboxItemWrapper>
  );
};
export { CheckboxItem };
