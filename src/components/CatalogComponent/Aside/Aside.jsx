import { CheckboxList } from "../../CheckboxList/CheckboxList";
import brandList from "../../../data/brendList.json";
import sexList from "../../../data/sexList.json";
import seasonList from "../../../data/seasonList.json";
import sizeList from "../../../data/sizeList.json";
import colorList from "../../../data/colorList.json";
import { AsideList } from "./Aside.styled";
import { useState } from "react";

export const Aside = props => {
  // console.log(window.innerWidth);

  const screenWidth = (a, b) => {
    const screen = window.innerWidth;
    if (screen < 1440) {
      if (props.sex.length == 0) {
        return a;
      } else {
        return b;
      }
    }
    if (screen >= 1440) {
      return 10;
    }
  };

  let defaultShow = 3;
  const [valueSize, setValueSize] = useState(false);
  const onChangeShowAll = () => {
    const anyCollapsed = props.selectedBrands.length > defaultShow ||
      props.selectedSizes.length > defaultShow ||
      props.selectedColors.length > defaultShow
    // console.log(value);
    setValueSize(!anyCollapsed);
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
          // onChangeShowAll={onChangeShowAll}
          defaultShow={screenWidth(5, 8)}
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
          defaultShow={screenWidth(4, 4)}
        />
      </div>

      <div>
        <CheckboxList
          items={colorList}
          title="Колір"
          checked={props.selectedColors}
          onChanged={items => props.onChanged("color", items)}
          onChangeShowAll={onChangeShowAll}
          defaultShow={screenWidth(8, 8)}
        />
      </div>
    </AsideList>
  );
};
