import { CancelButton, DeleteButton, Text, Wrapper } from "./ModalDeleteUser.styled";

const ModalDeleteUser = ({ onDeleteUser, onClose }) => {
  return (
    <>
      <Text>Ви впевнені, що хочете видалити акаунт?</Text>
      <Wrapper>
        <CancelButton type="button" onClick={onClose}>
          Відмінити
        </CancelButton>
        <DeleteButton type="submit" onClick={onDeleteUser}>
          Видалити
        </DeleteButton>
      </Wrapper>
    </>
  );
};

export default ModalDeleteUser;
