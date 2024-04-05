import { useMemo } from "react";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({ totalPages }) => {
  const paginationRange = useMemo(() => {
    return range(1, totalPages);
  }, [totalPages]);

  return paginationRange;
};
