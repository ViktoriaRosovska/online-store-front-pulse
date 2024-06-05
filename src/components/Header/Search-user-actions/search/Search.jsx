import { useState } from "react";
import MediaQuery from "react-responsive";
import searchIcon from "/public/icons/search-icon.svg";
import { Button, MobileButton, SearchBox, SearchIcon, SearchInput } from "./Search.styled";
import { useFindProductsQuery } from "../../../../redux/products/productsApi";

function Search({ isFixed, location }) {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')

  const { data, error } = useFindProductsQuery({ name: searchQuery }, {
    skip: !searchQuery,
  })
  console.log("Search  data", data)
  console.log("Search  error", error)

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <SearchBox>
      <MediaQuery minWidth={1440}>
        <SearchInput
          type="text"
          placeholder="Пошук"
          $isFixed={isFixed}
          $location={location}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button>
          <SearchIcon
            $isFixed={isFixed}
              $location={location}
            src={searchIcon}
            alt=""
          />
        </Button>
      </MediaQuery>

      <MediaQuery maxWidth={1439}>
        {isActive ? (
          <>
            <SearchInput
              type="text"
              placeholder="Пошук"
              $isFixed={isFixed}
              $location={location}
            />
            <Button>
              <SearchIcon
                $isFixed={isFixed}
              $location={location}
                src={searchIcon}
                alt=""
              />
            </Button>
          </>
        ) : (
          <MobileButton onClick={() => setIsActive(true)}>
            <SearchIcon
              $isFixed={isFixed}
              $location={location}
              src={searchIcon}
              alt=""
            />
          </MobileButton>
        )}
      </MediaQuery>
    </SearchBox>
  );
}

export default Search;
