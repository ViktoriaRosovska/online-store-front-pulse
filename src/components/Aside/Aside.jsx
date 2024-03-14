import { CheckboxList } from "../CheckboxList/CheckboxList";
import brandList from "../../data/brendList.json";
import season from "../../data/season.json";
import size from "../../data/size.json";

export const Aside = (props) => {
  return (
    <div className="manCatalog-aside-list">
      <CheckboxList items={brandList} onChanged={(items) => props.onChanged("brand", items)} title="Брeнд" />
      <CheckboxList items={season} onChanged={(items) => props.onChanged("season", items)} title="Сезон" />
      <CheckboxList items={size} onChanged={(items) => props.onChanged("size", items)} title="Розмір" />
    </div>
  );
};
