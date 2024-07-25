import Search from "./search/Search";
import { StyledSearchUserActionWrapper } from "./search/Search.styled";
import UserActions from "./search/UserActions/UserActions";

function SearchUserActions({
  isFixed,
  location,
  openSearch,
  searchQuery,
  onSearchInputChange,
  isActive,
  closeSearch,
}) {
  return (
    <StyledSearchUserActionWrapper>
      <Search
        isFixed={isFixed}
        location={location}
        openSearch={openSearch}
        searchQuery={searchQuery}
        onSearchInputChange={onSearchInputChange}
        isActive={isActive}
        closeSearch={closeSearch}
      />
      <UserActions isFixed={isFixed} location={location} />
    </StyledSearchUserActionWrapper>
  );
}

export default SearchUserActions;
