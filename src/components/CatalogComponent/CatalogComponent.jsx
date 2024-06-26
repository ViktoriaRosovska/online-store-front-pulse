import { useEffect, useState } from "react";

import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "./Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";
import { LastView } from "components/LastView/LastView";
// import { useLocation } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs";
import { BREADCRUMBS } from "../../utils/breadcrumbsVocabulary";

function getFromSearchParams(prop, def = [], proj = null) {
  const params = new URLSearchParams(location.search);
  const value = params.get(prop);
  if (!value) return def;

  const arr = value.split(",");
  if (proj) return arr.map(proj);
  return arr;
}

function getSortOrder() {
  const params = new URLSearchParams(location.search);
  const sort = params.get("sort");
  const order = params.get("order");
  if (!sort) return null;
  return sort == "createdAt" ? sort : order;
}

function getInitialFilter(def) {
  const filter = {
    sex: "",
    brand: "",
    season: "",
    size: "",
    color: "",
    page: 1,
    sort: "",
    order: "",
    ...def,
  };

  const params = new URLSearchParams(location.search);
  for (const key of Object.keys(filter)) {
    if (!params.has(key)) continue;
    const value = params.get(key);
    if (!value) continue;
    filter[key] = value;
  }

  return filter;
}

export const CatalogComponent = ({
  title,
  sex,
  cardfeature,
  brand,
  sortNewest,
  data,
  isError,
  isFetching,
  loader,
  page,
  totalPages,
}) => {
  const [selectedBrands, setSelectedBrands] = useState(
    getFromSearchParams("brand", brand ? [brand] : [])
  );
  const [selectedSeasons, setSelectedSeasons] = useState(
    getFromSearchParams("season")
  );
  const [selectedSizes, setSelectedSizes] = useState(
    getFromSearchParams("size", [], parseFloat)
  );
  const [selectedColors, setSelectedColors] = useState(
    getFromSearchParams("color")
  );
  const [selectedSex, setSelectedSex] = useState(getFromSearchParams("sex"));
  const [sortOrder, setSortOrder] = useState(getSortOrder());
  const [showAside, setShowAside] = useState(false);
  const [filterQuery, setFilterQuery] = useState(
    getInitialFilter({ sex: sex, brand: brand || "" })
  );

  useEffect(() => {
    const href = location.href.replace(/\?.+$/, "");

    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(filterQuery)) {
      if (!value) continue;
      params.set(key, value);
    }

    history.replaceState(history.state, "", href + "?" + params.toString());

    loader(filterQuery);
  }, [loader, filterQuery]);

  const onPageChange = page => {
    const newFilter = { ...filterQuery, page: page };
    setFilterQuery(newFilter);
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

    const newFilter = { ...filterQuery, sort: sortQuery, order: sortOrder };
    setFilterQuery(newFilter);
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

    const newFilter = { ...filterQuery, page: 1 };

    newFilter[type] = items.join(",");
    setFilterQuery(newFilter);
  };

  const onClearFiltersButton = () => {
    setSelectedSex([]);
    setSelectedBrands([]);
    setSelectedSeasons([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    const newFilter = {
      sex: filterQuery.sex,
      order: filterQuery.order,
      sort: filterQuery.sort,
    };
    setFilterQuery(newFilter);
  };

  const onClearOneFilterButton = type => onSelectionChanged(type, []);
  const onAsideShow = () => {
    return setShowAside(!showAside);
  };

  return (
    <PageSection>
      <Container>
        <Breadcrumbs current={title} BREADCRUMBS={BREADCRUMBS} />

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
            isFavoritePage={false}
            totalPages={totalPages}
            page={page}
          />
        </ContentWrapper>
      </Container>
      <LastView />
    </PageSection>
  );
};
