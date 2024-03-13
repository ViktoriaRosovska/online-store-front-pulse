import { CheckboxList } from "../CheckboxList/CheckboxList";
import brandList from "../../data/brendList.json";
import season from "../../data/season.json";
import size from "../../data/size.json";

export const Aside = () => {
  console.log(brandList);
  return (
    <div className="manCatalog-aside-list">
      <CheckboxList items={brandList} title="Брeнд" />
      <CheckboxList items={season} title="Сезон" />
      <CheckboxList items={size} title="Розмір" />
    </div>
  );
};
