export const CheckboxList = (props) => {
  const searchArray = [];
  const addSearchArray = (value) => {
    if (searchArray.includes(value)) {
      let idx = searchArray.findIndex((el) => el === value);
      console.log(idx, value);
      searchArray.splice(idx, 1);
      console.log(searchArray);
      return;
    }
    if (!searchArray.includes(value)) {
      searchArray.push(value);
      console.log(searchArray);
      return;
    }
    console.log(searchArray);
  };
  console.log(props.items);
  return (
    <div className="checkboxList-wrapper">
      <h3 className="checkboxList-title">{props.title}</h3>
      <div className="checkboxList-items">
        {props.items.length &&
          props.items.map((item) => {
            return (
              <div key={item} className="checkboxList-item">
                <input type="checkbox" value={item} id={item} onChange={(e) => addSearchArray(e.target.value)} />
                <label htmlFor={item}> {item}</label>
              </div>
            );
          })}
      </div>
    </div>
  );
};
