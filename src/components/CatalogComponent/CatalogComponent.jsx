import { useEffect, useState } from "react";
import { Container, ContentWrapper, PageSection } from "../../main.styled";
import { Aside } from "./Aside/Aside";
import { CardsList } from "../CardsList/CardsList";
import { CatalogHeader } from "./CatalogHeader/CatalogHeader";
import { CatalogNavigation } from "./CatalogNavigation/CatalogNavigation";
import {
  useFindProductsQuery,
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetNewestQuery,
  useGetProductByIdQuery,
  useGetSalesQuery,
  // useLazyGetAllProductsQuery,
} from "../../redux/products/productsApi";
// import { useLocation } from "react-router-dom";

export const CatalogComponent = props => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  // const [page, setPage] = useState(1);

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

  //ANTON===================================================//
  const { data: allProducts, isError, isFetching } = useGetAllProductsQuery({});
  // const [testGet, { data }] = useLazyGetAllProductsQuery();
  const { data: oneProduct } = useGetProductByIdQuery(
    "65f8a68bc11d83d79ea7e89d"
  );
  const { data: categories } = useGetCategoriesQuery();
  const { data: newest } = useGetNewestQuery({});
  const { data: sales } = useGetSalesQuery({});
  const { data: searchedData } = useFindProductsQuery({ name: "Nike" });
  //ANTON===================================================//

  useEffect(() => {
    // testGet({});
    props
      .loader(filterQuery)
      .then(res => setAsyncData(res))
      .catch(error => {
        console.error("Помилка з завантаженням даних:", error);
      });
  }, [props, filterQuery]);

  // const onPageChange = (page) => {
  //   setPage(page);
  //   const newFilter = { ...filterQuery, page: page };
  //   setFilterQuery(newFilter);
  // };

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

    const newFilter = { ...filterQuery };
    newFilter[type] = items.join(",");
    setFilterQuery(newFilter);
  };

  const onClearFiltersButton = () => {
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

  //ANTON===================================================//
  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Some error component</div>;
  if (!allProducts) return;
  if (!oneProduct) return;
  if (!categories) return;
  if (!newest) return;
  if (!sales) return;
  if (!searchedData) return;

  console.log("RTK_DATA", allProducts);
  console.log("RTK_ONE_PRODUCT", oneProduct);
  console.log("RTK_CATEGORIES", categories);
  console.log("RTK_NEWSET", newest);
  console.log("RTK_SALES", sales);
  console.log("RTK_SEARCH", searchedData);
  //ANTON===================================================//

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
          sortOrder={sortOrder}
          onSortOrderChanged={onSortOrderChanged}
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
