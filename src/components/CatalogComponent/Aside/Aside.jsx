import { CheckboxList } from "../../CheckboxList/CheckboxList";
import brandList from "../../../data/brendList.json";
import sexList from "../../../data/sexList.json";
import seasonList from "../../../data/seasonList.json";
import sizeList from "../../../data/sizeList.json";
import colorList from "../../../data/colorList.json";
import { AsideList } from "./Aside.styled";
import { useState } from "react";

export const Aside = props => {
  let defaultShow = 3;
  const [valueSize, setValueSize] = useState(true);
  const onChangeShowAll = value => {
    console.log(value);
    setValueSize(value);
  };
  return (
    <AsideList $valueSize={valueSize} $onAsideShow={props.onAsideShow}>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {props.sex.length == 0 && (
          <CheckboxList
            items={sexList}
            title="Стать"
            checked={props.selectedSex}
            onChanged={items => props.onChanged("sex", items)}
            defaultShow={defaultShow}
          />
        )}
        <CheckboxList
          items={brandList}
          title="Брeнд"
          checked={props.selectedBrands}
          onChanged={items => props.onChanged("brand", items)}
          onChangeShowAll={onChangeShowAll}
          defaultShow={5}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <CheckboxList
          items={seasonList}
          title="Сезон"
          checked={props.selectedSeasons}
          onChanged={items => props.onChanged("season", items)}
          defaultShow={defaultShow}
        />
        <CheckboxList
          items={sizeList}
          title="Розмір"
          checked={props.selectedSizes}
          onChanged={items => props.onChanged("size", items)}
          onChangeShowAll={onChangeShowAll}
          defaultShow={4}
        />
      </div>

      <div>
        <CheckboxList
          items={colorList}
          title="Колір"
          checked={props.selectedColors}
          onChanged={items => props.onChanged("color", items)}
          onChangeShowAll={onChangeShowAll}
          defaultShow={8}
        />
      </div>
    </AsideList>
  );
};
