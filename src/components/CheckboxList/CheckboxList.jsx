import { useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckboxListConrtainer, CheckboxListItems, CheckboxListTitle } from "./CheckboxList.styled";

export const CheckboxList = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.toString());

  const [showAll, setShowAll] = useState(false);
  const defaultShow = 10;
  const showAllByDefault = props.items.length <= defaultShow;
  const elementsToShow = showAll || showAllByDefault ? props.items : props.items.slice(0, defaultShow);
  const [checked] = useState(new Set());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleInputChange = (e, item) => {
    if (e.target.checked) {
      checked.add(item);
      searchParams.set("brand", `${item}`);
      setSearchParams(searchParams);
    } else checked.delete(item);

    forceUpdate();

    if (props.onChanged) props.onChanged([...checked]);
  };

  const getChecked = (i) => checked.has(i);

  return (
    <CheckboxListConrtainer>
      <CheckboxListTitle>{props.title}</CheckboxListTitle>
      <CheckboxListItems>
        {elementsToShow.length &&
          elementsToShow.map((item) => {
            {
              /* Компонент одного чекбокса */
            }
            return (
              <div key={item} className="checkboxList-item">
                <input
                  type="checkbox"
                  value={item}
                  id={"cbl_" + item}
                  checked={getChecked(item)}
                  onChange={(e) => handleInputChange(e, item)}
                />
                <label htmlFor={"cbl_" + item} style={{ display: "inline-block", width: "100%" }}>
                  {item}
                </label>
              </div>
            );
          })}
        {showAllByDefault ? null : (
          <button onClick={() => setShowAll((prev) => !prev)}>{showAll ? "Сховати ^" : "Показати все v"}</button>
        )}
      </CheckboxListItems>
    </CheckboxListConrtainer>
  );
};
