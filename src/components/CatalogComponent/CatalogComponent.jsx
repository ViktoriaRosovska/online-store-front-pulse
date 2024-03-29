import { useEffect, useState } from "react";
import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "../Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "../CatalogHeader/CatalogHeader";
import { CatalogNavigation } from "../CatalogNavigation/CatalogNavigation";
// import { useLocation } from "react-router-dom";

export const CatalogComponent = (props) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setselectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  // const [selectedSex] = useState([props.sex]);
  const [asyncData, setAsyncData] = useState([]);
  console.log(asyncData);
  const [filterQuery, setFilterQuery] = useState({
    sex: props.sex,
    brand: "",
    season: "",
    size: "",
    color: "",
  });
  // console.log(filterQuery);

  // const location = useLocation().pathname;
  // console.log(location);
  useEffect(() => {
    props
      .loader(filterQuery)
      .then((res) => setAsyncData(res))
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
      });
  }, [props, filterQuery]);

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
        return;
    }

    const newFilter = { ...filterQuery };
    newFilter[type] = items.join(",");
    setFilterQuery(newFilter);
  };
  const onClearFiltersButton = () => {
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setselectedSizes([]);
    setSelectedColors([]);
    const newFilter = { ...filterQuery };
    const newFilterKeys = Object.keys(newFilter);
    newFilterKeys.forEach((key) => {
      if (key !== "sex") {
        newFilter[key] = [].join(",");
        console.log(`${key}:${newFilter[key]}`);
      }
      if (key === "sex") {
        newFilter[key] = props.sex;
        console.log(`${key}:${newFilter[key]}`);
      }
    });
    setFilterQuery(newFilter);
  };

  const onClearOneFilterButton = (type) => {
    switch (type) {
      case "brand":
        setSelectedBrands([]);

        break;
      case "season":
        setSelectedSeasons([]);

        break;
      case "size":
        setselectedSizes([]);

        break;
      case "color":
        setSelectedColors([]);

        break;
      default:
        return;
    }
    const newFilter = { ...filterQuery };
    newFilter[type] = [].join(",");
    setFilterQuery(newFilter);
  };
  return (
    <PageSection>
      <Container>
        <CatalogNavigation title={props.title} />
        <CatalogHeader
          selectedBrands={selectedBrands}
          selectedSeasons={selectedSeasons}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          title={props.title}
          onClearFiltersButton={onClearFiltersButton}
          onClearOneFilterButton={onClearOneFilterButton}
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
