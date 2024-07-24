import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "./Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";
import { LastView } from "components/LastView/LastView";
import Breadcrumbs from "components/Breadcrumbs";
import { BREADCRUMBS } from "../../utils/breadcrumbsVocabulary";
import { getFromSearchParams } from "../../utils/getFromSearchParams";
import { getSortOrder } from "../../utils/getSortOrder";
import { getInitialFilter } from "../../utils/getInitialFilter";

const CatalogComponent = ({
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
  const navigate = useNavigate();
  const location = useLocation();

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

  const lastViewData = JSON.parse(localStorage.getItem("lastView"));
  useEffect(() => {
    const href = location.pathname;

    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(filterQuery)) {
      if (!value) continue;
      params.set(key, value);
    }

    navigate(href + "?" + params.toString(), { replace: true });

    loader(filterQuery);
  }, [loader, filterQuery, navigate, location.pathname]);

  useEffect(() => {
    const updatedFilter = getInitialFilter(
      { sex: sex, brand: brand || "" },
      location.search
    );
    setFilterQuery(updatedFilter);
  }, [location.search, sex, brand]);

  const onPageChange = page => {
    const newFilter = { ...filterQuery, page: page };
    setFilterQuery(newFilter);

    const href = location.pathname;
    const params = new URLSearchParams(newFilter);
    navigate(href + "?" + params.toString());
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

      {lastViewData?.length > 0 ? (
        <LastView lastViewData={lastViewData} />
      ) : null}
    </PageSection>
  );
};

export default CatalogComponent;
