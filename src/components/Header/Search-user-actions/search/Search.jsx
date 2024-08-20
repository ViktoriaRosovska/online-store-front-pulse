import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CloseSearchIcon,
  MobileButton,
  SearchBox,
  SearchIcon,
  SearchInput,
} from "./Search.styled";

function Search({
  isFixed,
  location,
  openSearch,
  onSearchInputChange,
  searchQuery,
  isActive,
  closeSearch,
  handleDeleteSearchQuery,
}) {
  const navigate = useNavigate();

  const handleInputChange = event => {
    onSearchInputChange(event.target.value.trimStart());
  };

  const handleSearch = () => {
    const query = searchQuery
      .trim()
      .split(" ")
      .filter(el => el)
      .join(" ");
    if (query) {
      onSearchInputChange(query);
      navigate(`/search?query=${query}`);
    }
  };

  const handleOpenMobileSearch = () => {
    openSearch();
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBox>
      <MediaQuery minWidth={1440}>
        <SearchInput
          type="text"
          placeholder="Пошук"
          $isFixed={isFixed}
          $location={location}
          value={searchQuery || ""}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>
          <SearchIcon $isFixed={isFixed} $location={location} />
        </Button>
      </MediaQuery>

      <MediaQuery maxWidth={1439}>
        {isActive ? (
          <MobileButton onClick={closeSearch}>
            <CloseSearchIcon $isFixed={isFixed} $location={location} />
          </MobileButton>
        ) : (
          <MobileButton onClick={handleOpenMobileSearch}>
            <SearchIcon $isFixed={isFixed} $location={location} />
          </MobileButton>
        )}
      </MediaQuery>
      <MediaQuery minWidth={1440}>
        <Button style={{ right: "8px" }} onClick={handleDeleteSearchQuery}>
          <CloseSearchIcon $isFixed={isFixed} $location={location} />
        </Button>
      </MediaQuery>
    </SearchBox>
  );
}

export default Search;
