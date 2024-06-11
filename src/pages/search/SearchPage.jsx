import { useSearchParams } from "react-router-dom";
import {
  //   useFindProductsQuery,
  useLazyFindProductsQuery,
} from "../../redux/products/productsApi";
import { CardsList } from "components/CardsList/CardsList";
import { useEffect, useState } from "react";
import { Container, PageSection } from "../../main.styled";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const page = parseInt(searchParams.get("page") || "1");

  const [currentPage, setCurrentPage] = useState(page);

  const [findProducts, { data, isError, isFetching }] =
    useLazyFindProductsQuery();

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", "1");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    if (searchQuery) {
      findProducts({ name: searchQuery, page: currentPage });
    }
  }, [searchQuery, findProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const handlePageChange = newPage => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
    // setCurrentPage(newPage);
  };

  return (
    <PageSection>
      <Container>
        <CardsList
          onPageChange={handlePageChange}
          data={data?.products}
          isFetching={isFetching}
          isError={isError}
          totalPages={data?.totalPages}
          page={currentPage}
        />
      </Container>
    </PageSection>
  );
};

export default SearchPage;
