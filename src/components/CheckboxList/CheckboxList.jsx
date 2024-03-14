import { useReducer, useState } from "react";

export const CheckboxList = (props) => {
  const [showAll, setShowAll] = useState(false);
  const defaultShow = 10;
  const showAllByDefault = props.items.length <= defaultShow;
  const elementsToShow = showAll || showAllByDefault ? props.items : props.items.slice(0, defaultShow);
  const [checked] = useState(new Set());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleInputChange = (e, item) => {
    if (e.target.checked) checked.add(item);
    else checked.delete(item);

    forceUpdate();

    if (props.onChanged) props.onChanged([...checked]);
  };

  const getChecked = (i) => checked.has(i);

  return (
    <div className="checkboxList-wrapper">
      <h3 className="checkboxList-title">{props.title}</h3>
      <div className="checkboxList-items">
        {elementsToShow.length &&
          elementsToShow.map((item) => {
            return (
              <div key={item} className="checkboxList-item">
                <input
                  type="checkbox"
                  value={item}
                  id={"cbl_" + item}
                  checked={getChecked(item)}
                  onChange={(e) => handleInputChange(e, item)}
                />
                <label htmlFor={"cbl_" + item}> {item}</label>
              </div>
            );
          })}
        {showAllByDefault ? null : (
          <button onClick={() => setShowAll((prev) => !prev)}>{showAll ? "Сховати ^" : "Показати все v"}</button>
        )}
      </div>
    </div>
  );
};
