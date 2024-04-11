import "./Search-user-actions.css";
import Search from "./search/Search";
import UserActions from "./search/UserActions/UserActions";

function SearchUserActions({ isFixed, location }) {
  return (
    <div className="search-user-actions">
      <Search isFixed={isFixed} location={location} />
      <UserActions isFixed={isFixed} location={location} />
    </div>
  );
}

export default SearchUserActions;
