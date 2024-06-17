import {
  NextBtn,
  PrevBtn,
  PaginationBtn,
  PaginationWrapper,
  PaginationList,
  ElipsisText,
} from "./Pagination.styled";
import { ReactComponent as LeftArrow } from "../../assets/svg/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/rightArrow.svg";

export const Pagination = ({ totalPages, page, onChange, siblings = 1 }) => {
  const el = [];

  const handlePageClick = newPage => {
    onChange(newPage);
  };

  // if (!siblings) siblings = 1;

  el.push(
    <li key="left">
      <PrevBtn
        click={() => handlePageClick(page - 1)}
        disabled={page === 1}
        $current={false}
      >
        <LeftArrow />
      </PrevBtn>
    </li>
  );

  if (page > 1) {
    el.push(
      <li key="first">
        <PaginationBtn click={() => handlePageClick(1)}>1</PaginationBtn>
      </li>
    );
  }

  if (page - siblings > 2) {
    el.push(
      <li key="leftelipsis">
        <ElipsisText>...</ElipsisText>
      </li>
    );
  }

  const startPage = Math.max(2, page - siblings);
  const stopPage = Math.min(totalPages - 1, page + siblings);
  for (let i = startPage; i < page; i += 1) {
    el.push(
      <li key={i}>
        <PaginationBtn click={() => handlePageClick(i)}>{i}</PaginationBtn>
      </li>
    );
  }

  el.push(
    <li key="curr">
      <PaginationBtn $current={true} $lastpage={page === totalPages}>
        {page}
      </PaginationBtn>
    </li>
  );

  for (let i = page + 1; i <= stopPage; i += 1) {
    el.push(
      <li key={i}>
        <PaginationBtn click={() => onChange(i)}>{i}</PaginationBtn>
      </li>
    );
  }

  if (page + siblings < totalPages - 1) {
    el.push(
      <li key="rightelipsis">
        <ElipsisText>...</ElipsisText>
      </li>
    );
  }

  if (page < totalPages) {
    el.push(
      <li key="last">
        <PaginationBtn
          click={() => handlePageClick(totalPages)}
          $lastpage={true}
        >
          {totalPages}
        </PaginationBtn>
      </li>
    );
  }

  el.push(
    <li key="right">
      <NextBtn
        click={() => handlePageClick(page + 1)}
        disabled={page === totalPages}
        $current={false}
      >
        <RightArrow />
      </NextBtn>
    </li>
  );

  return (
    <PaginationWrapper>
      <PaginationList>{el}</PaginationList>
    </PaginationWrapper>
  );
};
