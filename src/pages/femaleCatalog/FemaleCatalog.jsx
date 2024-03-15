import { useState } from "react";
// import { observer } from "mobx-react-lite";
import { Aside } from "../../components/Aside/Aside.jsx";
import { CatalogHeader } from "../../components/CatalogHeader/CatalogHeader.jsx";
import { Container, ContentWrapper, PageSection } from "../../main.styled.js";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation.jsx";
import { CardsList } from "../../components/CardsList/CardsList.jsx";

const FemaleCatalog = () => {
  const [brandList, setBrandList] = useState([]);
  const [seasonList, setSeasonList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  const onSelectionChanged = (type, items) => {
    console.log("onSelectionChanged", type, items);
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
    }
  };

  return (
    <PageSection>
      <Container>
        <CatalogNavigation title="Жіноче взуття" />

        {/* Компонент фільтрації */}
        <CatalogHeader brandList={brandList} seasonList={seasonList} sizeList={sizeList} title={"Жіноче взуття"} />

        {/* Компонент сторінки */}
        <ContentWrapper>
          <Aside onChanged={onSelectionChanged} />
          {/* дістати жіночі дані */}
          <CardsList />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
};

export default FemaleCatalog;
