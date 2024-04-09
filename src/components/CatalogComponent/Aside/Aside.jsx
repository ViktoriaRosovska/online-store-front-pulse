import React, { useEffect } from 'react';
import { CheckboxList } from '../../CheckboxList/CheckboxList';
import brandList from '../../../data/brendList.json'; // Предположим, что это ваш файл с брендами
import seasonList from '../../../data/seasonList.json';
import sizeList from '../../../data/sizeList.json';
import colorList from '../../../data/colorList.json';
import { AsideList } from './Aside.styled';

export const Aside = (props) => {
  return (
    <AsideList>
      <CheckboxList
        items={brandList}
        title="Бренд"
        checked={props.selectedBrands}
        onChanged={(items) => props.onChanged('brand', items)}
      />
      <CheckboxList
        items={seasonList}
        title="Сезон"
        checked={props.selectedSeasons}
        onChanged={(items) => props.onChanged('season', items)}
      />
      <CheckboxList
        items={sizeList}
        title="Размер"
        checked={props.selectedSizes}
        onChanged={(items) => props.onChanged('size', items)}
      />
      <CheckboxList
        items={colorList}
        title="Цвет"
        checked={props.selectedColors}
        onChanged={(items) => props.onChanged('color', items)}
      />
    </AsideList>
  );
};
