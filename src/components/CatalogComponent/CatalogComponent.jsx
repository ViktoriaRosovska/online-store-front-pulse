import { useState } from "react";

import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "./Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";
import { CatalogNavigation } from "./CatalogNavigation/CatalogNavigation";
import { useDispatch } from "react-redux";

import { getFilterQuery } from "../../redux/filterQuery/filterQuerySlice";

export const CatalogComponent = ({
  title,
  sex,
  cardfeature,
  brand,
  sortNewest,
  data,
  isError,
  isFetching,
  filterQuery,
}) => {
  const [selectedBrands, setSelectedBrands] = useState(brand ? [brand] : []);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSex, setSelectedSex] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  // const [asyncData, setAsyncData] = useState(null);
  const [showAside, setShowAside] = useState(false);
  // const [filterQuery, setFilterQuery] = useState({
  //   sex: sex,
  //   brand: brand,
  //   season: "",
  //   size: "",
  //   color: "",
  //   page: 1,
  // });

  const dispatch = useDispatch();

  const onPageChange = page => {
    // const newFilter = { ...filterQuery, page: page };
    const newFilter = { ...filterQuery, page: page };

    // setFilterQuery(newFilter);
    dispatch(getFilterQuery(newFilter));
  };

  const onSortOrderChanged = value => {
    setSortOrder(value);

    let sortQuery = "";
    let sortOrder = "";
    if (value === "createdAt") {
      sortQuery = value;
      sortOrder = "";
    } else {
      sortQuery = "price";
      sortOrder = value;
    }
    // const newFilter = { ...filterQuery, sort: sortQuery, order: sortOrder };
    const newFilter = { ...filterQuery, sort: sortQuery, order: sortOrder };
    // setFilterQuery(newFilter);
    dispatch(getFilterQuery(newFilter));
  };

  const onSelectionChanged = (type, items) => {
    switch (type) {
      case "sex":
        setSelectedSex(items);
        break;
      case "brand":
        setSelectedBrands(items);
        break;
      case "season":
        setSelectedSeasons(items);
        break;
      case "size":
        setSelectedSizes(items);
        break;
      case "color":
        setSelectedColors(items);
        break;
      default:
        return;
    }

    // const newFilter = { ...filterQuery };

    const newFilter = { ...filterQuery };

    newFilter[type] = items.join(",");
    // setFilterQuery(newFilter);
    dispatch(getFilterQuery(newFilter));
  };

  const onClearFiltersButton = () => {
    setSelectedSex([]);
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    // const newFilter = {
    //   sex: filterQuery.sex,
    //   order: filterQuery.order,
    //   sort: filterQuery.sort,
    // };
    // setFilterQuery(newFilter);
    const newFilter = {
      sex: filterQuery.sex,
      order: filterQuery.order,
      sort: filterQuery.sort,
    };
    dispatch(getFilterQuery(newFilter));
  };

  const onClearOneFilterButton = type => onSelectionChanged(type, []);
  const onAsideShow = () => {
    return setShowAside(!showAside);
  };

  return (
    <PageSection>
      <Container>
        <CatalogNavigation title={title} />

        <CatalogHeader
          selectedBrands={selectedBrands}
          selectedSeasons={selectedSeasons}
          selectedSizes={selectedSizes}
          selectedColors={selectedColors}
          selectedSex={selectedSex}
          title={title}
          onClearFiltersButton={onClearFiltersButton}
          onClearOneFilterButton={onClearOneFilterButton}
          sortOrder={sortOrder}
          onSortOrderChanged={onSortOrderChanged}
          onAsideShow={onAsideShow}
          sortNewest={sortNewest}
        />
        <ContentWrapper>
          <Aside
            onAsideShow={showAside}
            selectedBrands={selectedBrands}
            selectedSizes={selectedSizes}
            selectedSeasons={selectedSeasons}
            selectedColors={selectedColors}
            selectedSex={selectedSex}
            onChanged={onSelectionChanged}
            sex={sex}
          />

          <CardsList
            data={data}
            cardfeature={cardfeature}
            onPageChange={onPageChange}
            filterQuery={filterQuery}
            isFetching={isFetching}
            isError={isError}
          />
        </ContentWrapper>
      </Container>
    </PageSection>
  );
};
