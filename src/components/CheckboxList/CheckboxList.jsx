import { useState } from "react";

import {
  CheckboxListConrtainer,
  CheckboxListItems,
  CheckboxListTitle,
} from "./CheckboxList.styled";
import { ReactComponent as DownArrow } from "../../assets/svg/downArrow.svg";
import { ShowAllCheckboxButton } from "../Buttons/ShowAllCheckboxButton/ShowAllCheckboxButton.styled";
import { CheckboxItem } from "./CheckboxItem/ChechboxItem";

export const CheckboxList = props => {
  const [showAll, setShowAll] = useState(false);
  // const defaultShow = 5;
  const showAllByDefault = props.items.length <= props.defaultShow;
  const elementsToShow =
    showAll || showAllByDefault
      ? props.items
      : props.items.slice(0, props.defaultShow);
  
  const toggleShowAll = () => {
    setShowAll(prev => !prev)
  }

  const onChange = (e, item) => {
    if (!props.onChanged) return;

    let selected;

    if (e.target.checked) {
      if (props.checked.includes(item)) selected = props.checked;
      else selected = [...props.checked, item];
    } else {
      selected = props.checked.filter(i => i !== item);
    }

    props.onChanged(selected);
  };

  const getChecked = item => props.checked?.includes(item);

  return (
    <CheckboxListConrtainer>
      <CheckboxListTitle>{props.title}</CheckboxListTitle>
      <CheckboxListItems>
        {elementsToShow.length &&
          elementsToShow.map(item => {
            return (
              <CheckboxItem
                key={item}
                name={item}
                item={item}
                checked={getChecked(item)}
                onChange={onChange}
              />
            );
          })}
        {!showAllByDefault && (
          <ShowAllCheckboxButton
            onClick={toggleShowAll}
          >
            {showAll ? (
              <>
                <span>Сховати</span>
                <DownArrow className="rotateIcon" />
              </>
            ) : (
              <>
                <span>Показати все</span>
                <DownArrow />
              </>
            )}
          </ShowAllCheckboxButton>
        )}
      </CheckboxListItems>
    </CheckboxListConrtainer>
  );
};
