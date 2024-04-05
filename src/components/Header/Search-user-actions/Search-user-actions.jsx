import "./Search-user-actions.css";
import Search from "./search/Search";
import UserActions from "./search/UserActions/UserActions";

function SearchUserActions(props) {
  return (
    <div className="search-user-actions">
      <Search isFixed={props.isFixed} />
      <UserActions isFixed={props.isFixed} modalOn={props.modalOn} />
    </div>
  );
}

export default SearchUserActions;
