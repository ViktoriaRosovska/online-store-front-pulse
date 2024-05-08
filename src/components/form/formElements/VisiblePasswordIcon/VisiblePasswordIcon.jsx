import { Button } from "./VisiblePasswordIcon.styled";

const VisiblePasswordIcon = ({ visiblePassword, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {visiblePassword ? (
        <svg width={22} height={18}>
          <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-eye"></use>
        </svg>
      ) : (
        <svg width={22} height={18}>
          <use xlinkHref="../icons/profile-icons/profile-icons-sprite.svg#icon-eye-off"></use>
        </svg>
      )}
    </Button>
  );
};

export default VisiblePasswordIcon