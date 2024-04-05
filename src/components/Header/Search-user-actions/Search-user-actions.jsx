import "./Search-user-actions.css";
import Search from "./search/Search";
import UserActions from "./search/UserActions/UserActions";

function SearchUserActions(props) {
  return (
    <div className="search-user-actions">
      <Search isFixed={props.isFixed} location={props.location} />
      <UserActions
        isFixed={props.isFixed}
        location={props.location}
        modalOn={props.modalOn}
      />
    </div>
  );
}

export default SearchUserActions;
