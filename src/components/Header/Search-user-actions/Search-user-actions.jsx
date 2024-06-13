import "./Search-user-actions.css";
import Search from "./search/Search";
import UserActions from "./search/UserActions/UserActions";

function SearchUserActions({ isFixed, location, openSearch, searchQuery, onSearchInputChange, isActive, closeSearch }) {
  return (
    <div className="search-user-actions">
      <Search isFixed={isFixed} location={location} openSearch={openSearch} searchQuery={searchQuery} onSearchInputChange={onSearchInputChange} isActive={isActive} closeSearch={closeSearch} />
      <UserActions isFixed={isFixed} location={location} />
    </div>
  );
}

export default SearchUserActions;
