import { CheckboxList } from "../CheckboxList/CheckboxList";
import brandList from "../../data/brendList.json";
import season from "../../data/season.json";
import size from "../../data/size.json";
import { AsideList } from "./Aside.styled";

export const Aside = (props) => {
  console.log(brandList);
  return (
    <AsideList>
      <CheckboxList items={brandList} title="Брeнд" onChanged={(items) => props.onChanged("brand", items)} />
      <CheckboxList items={season} title="Сезон" onChanged={(items) => props.onChanged("brand", items)} />
      <CheckboxList items={size} title="Розмір" onChanged={(items) => props.onChanged("brand", items)} />
    </AsideList>
  );
};
