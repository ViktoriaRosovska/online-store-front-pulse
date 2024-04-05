import { NextBtn, PrevBtn, PaginationBtn } from "./Pagination.styled";
import { ReactComponent as LeftArrow } from "../../assets/svg/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/rightArrow.svg";
import { usePagination } from "./usePagination";
export const Pagination = ({ asyncData, totalPages }) => {
  // const paginationRange = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(asyncData);
  const paginationRange = usePagination({
    totalPages,
  });
  console.log(paginationRange);
  return (
    <>
      <ul
        style={{
          display: "flex",
        }}
      >
        <li>
          <PrevBtn>
            <LeftArrow />
          </PrevBtn>
        </li>
        {paginationRange?.map((el) => {
          return (
            <li key={el.idx}>
              <PaginationBtn>{el}</PaginationBtn>
            </li>
          );
        })}
        <li>
          <NextBtn>
            <RightArrow />
          </NextBtn>
        </li>
      </ul>
    </>
  );
};
