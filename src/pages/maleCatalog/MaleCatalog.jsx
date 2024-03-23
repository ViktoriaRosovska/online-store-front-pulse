import { useEffect, useState } from "react";
// import { observer } from "mobx-react-lite";

import "./MaleCatalog.css";
import { Aside } from "../../components/Aside/Aside.jsx";
import { CatalogHeader } from "../../components/CatalogHeader/CatalogHeader.jsx";
import { Container, ContentWrapper, PageSection } from "../../main.styled.js";
import { CatalogNavigation } from "../../components/CatalogNavigation/CatalogNavigation.jsx";
import { CardsList } from "../../components/CardsList/CardsList.jsx";
import { observer } from "mobx-react-lite";
import { querySearch } from "../../http/ProductsApi.jsx";

const MaleCatalog = observer(() => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setselectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSex] = useState(["Чоловік"]);
  const [asyncData, setAsyncData] = useState([]);
  console.log(asyncData);

  const filterQuery = {
    sex: selectedSex.join(","),
    brand: selectedBrands.join(","),
  };
  useEffect(() => {
    querySearch(filterQuery)
      .then((res) => setAsyncData(res))
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, []);
  const onSelectionChanged = (type, items) => {
    switch (type) {
      case "brand":
        setSelectedBrands(items);
        break;
      case "season":
        setSelectedSeasons(items);
        break;
      case "size":
        setselectedSizes(items);
        break;
      case "color":
        setSelectedColors(items);
        break;
      default:
        break;
    }
  };
  const onClearFiltersButton = () => {
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setselectedSizes([]);
    setSelectedColors([]);
  };
  return (
    <PageSection>
      <Container>
        <CatalogNavigation title="Чоловіче взуття" />

        {/* Компонент фільтрації */}
        <CatalogHeader
          selectedBrands={selectedBrands}
          selectedSeasons={selectedSeasons}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          title={"Чоловіче взуття"}
          onClearFiltersButton={onClearFiltersButton}
        />

        {/* Компонент сторінки */}
        <ContentWrapper>
          <Aside
            selectedBrands={selectedBrands}
            selectedSizes={selectedSizes}
            selectedSeasons={selectedSeasons}
            selectedColors={selectedColors}
            onChanged={onSelectionChanged}
          />
          {/* Дістати чоловічі дані */}
          <CardsList asyncData={asyncData} />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
});

export default MaleCatalog;
