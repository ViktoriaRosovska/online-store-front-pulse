import { useEffect, useState } from "react";
import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "../Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "../CatalogHeader/CatalogHeader";
import { CatalogNavigation } from "../CatalogNavigation/CatalogNavigation";
import { brandNew, brandSales, querySearch } from "../../http/ProductsApi";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../ScrollToTop";

export const CatalogComponent = (props) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setselectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSex] = useState([props.sex]);
  const [asyncData, setAsyncData] = useState([]);
  console.log(asyncData);
  const [filterQuery, setFilterQuery] = useState({ sex: props.sex, brand: "" });
  console.log(filterQuery);

  const location = useLocation().pathname;
  console.log(location);
  useEffect(() => {
    if (location === "/newbrands") {
      brandNew()
        .then((res) => setAsyncData(res))
        .catch((error) => {
          console.error("Ошибка загрузки данных:", error);
        });
    }

    if (location === "/sales") {
      brandSales()
        .then((res) => setAsyncData(res))
        .catch((error) => {
          console.error("Ошибка загрузки данных:", error);
        });
    }
    if (location === "/malecatalog" || location === "/femalecatalog" || location === "/catalog") {
      querySearch(filterQuery)
        .then((res) => setAsyncData(res))
        .catch((error) => {
          console.error("Ошибка загрузки данных:", error);
        });
    }
    // Для брендів зробити окрему перевірку
  }, [filterQuery, location]);
  const onSelectionChanged = (type, items) => {
    switch (type) {
      case "brand":
        setSelectedBrands(items);
        setFilterQuery({
          sex: selectedSex.join(","),
          brand: selectedBrands.join(","),
        });
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
        <ScrollToTop />
        <CatalogNavigation title={props.title} />
        <CatalogHeader
          selectedBrands={selectedBrands}
          selectedSeasons={selectedSeasons}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          title={props.title}
          onClearFiltersButton={onClearFiltersButton}
        />
        <ContentWrapper>
          <Aside
            selectedBrands={selectedBrands}
            selectedSizes={selectedSizes}
            selectedSeasons={selectedSeasons}
            selectedColors={selectedColors}
            onChanged={onSelectionChanged}
          />

          <CardsList asyncData={asyncData} />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
};
