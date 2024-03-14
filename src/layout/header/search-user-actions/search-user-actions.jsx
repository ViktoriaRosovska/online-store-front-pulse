import "./search-user-actions.css";
import Search from "./search/search";
import UserActions from "./search/user-actions/user-actions";

function SearchUserActions(props) {
  return (
    <div className="search-user-actions">
      <Search isFixed={props.isFixed} />
      <UserActions isFixed={props.isFixed} modalOn={props.modalOn} />
    </div>
  );
}

export default SearchUserActions;
