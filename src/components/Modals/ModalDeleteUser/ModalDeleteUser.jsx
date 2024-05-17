import { useNavigate } from "react-router-dom";
import { CancelButton, DeleteButton, Text, Wrapper } from "./ModalDeleteUser.styled";

const ModalDeleteUser = ({ onDeleteUser, onClose }) => {
  const navigate = useNavigate()

  const handleDelete = () => {
    onDeleteUser()
    onClose()
    navigate('/')
  }

  return (
    <>
      <Text>Ви впевнені, що хочете видалити акаунт?</Text>
      <Wrapper>
        <CancelButton type="button" onClick={onClose}>
          Відмінити
        </CancelButton>
        <DeleteButton type="submit" onClick={handleDelete}>
          Видалити
        </DeleteButton>
      </Wrapper>
    </>
  );
};

export default ModalDeleteUser;
