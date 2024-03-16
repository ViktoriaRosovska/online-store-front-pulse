import { CheckboxList } from "../CheckboxList/CheckboxList";
import brandList from "../../data/brendList.json";
import seasonList from "../../data/seasonList.json";
import sizeList from "../../data/sizeList.json";
import { AsideList } from "./Aside.styled";

export const Aside = (props) => {
  console.log(brandList);
  return (
    <AsideList>
      <CheckboxList items={brandList} title="Брeнд" onChanged={(items) => props.onChanged("brand", items)} />
      <CheckboxList items={seasonList} title="Сезон" onChanged={(items) => props.onChanged("season", items)} />
      <CheckboxList items={sizeList} title="Розмір" onChanged={(items) => props.onChanged("size", items)} />
    </AsideList>
  );
};
