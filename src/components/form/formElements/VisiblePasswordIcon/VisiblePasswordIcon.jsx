import { Button } from "./VisiblePasswordIcon.styled";
import { ReactComponent as EyeSvg } from '../../../../assets/svg/open-eye.svg'
import {ReactComponent as ClosedEyeSvg} from '../../../../assets/svg/closed-eye.svg'

const VisiblePasswordIcon = ({ visiblePassword, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {visiblePassword ? (
        <EyeSvg/>
      ) : (
        <ClosedEyeSvg/>
      )}
    </Button>
  );
};

export default VisiblePasswordIcon