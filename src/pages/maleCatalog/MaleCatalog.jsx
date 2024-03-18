import { useState } from "react";
// import { observer } from "mobx-react-lite";

import "./MaleCatalog.css";
import { Aside } from "../../components/Aside/Aside.jsx";
import { CatalogHeader } from "../../components/CatalogHeader/CatalogHeader.jsx";
import { Container, ContentWrapper, PageSection } from "../../main.styled.js";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation.jsx";
import { CardsList } from "../../components/CardsList/CardsList.jsx";
import { observer } from "mobx-react-lite";

const MaleCatalog = observer(() => {
  const [brandList, setBrandList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [colorList, setColorList] = useState([]);

  const onSelectionChanged = (type, items) => {
    switch (type) {
      case "brand":
        setBrandList(items);
        break;
      case "season":
        setSeasonList(items);
        break;
      case "size":
        setSizeList(items);
        break;
      case "color":
        setColorList(items);
        break;
      default:
        break;
    }
  };
  const onClearFiltersButton = () => {
    setBrandList([]);
    setSeasonList([]);
    setSizeList([]);
    setColorList([]);
  };
  return (
    <PageSection>
      <Container>
        <CatalogNavigation title="Чоловіче взуття" />

        {/* Компонент фільтрації */}
        <CatalogHeader
          brandList={brandList}
          seasonList={seasonList}
          sizeList={sizeList}
          colorList={colorList}
          title={"Чоловіче взуття"}
          onClearFiltersButton={onClearFiltersButton}
        />

        {/* Компонент сторінки */}
        <ContentWrapper>
          <Aside selectedBrands={brandList} onChanged={onSelectionChanged} />
          <CardsList />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
});

export default MaleCatalog;
