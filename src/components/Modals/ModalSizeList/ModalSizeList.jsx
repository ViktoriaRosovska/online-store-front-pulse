import sizeList from "../../../data/modalSizeList.json";
import { ReactComponent as ModalCloseBtnIcon } from "../../../assets/svg/modalCloseBtn.svg";

import {
  StyledCloseBtn,
  StyledModalSizeListContainer,
  StyledSizeListTable,
  StyledSizeListTableCaption,
} from "./ModalSizeList.styled";
export const ModalSizeList = ({ onClose }) => {
  return (
    <StyledModalSizeListContainer>
      <StyledCloseBtn onClick={onClose}>
        <ModalCloseBtnIcon />
      </StyledCloseBtn>
      <StyledSizeListTable>
        <StyledSizeListTableCaption>Розмірна сітка</StyledSizeListTableCaption>

        <thead>
          <tr>
            <th>US</th>
            <th>UK</th>
            <th>EU</th>
            <th>CM</th>
          </tr>
        </thead>

        <tbody>
          {sizeList &&
            sizeList.length &&
            sizeList.map(el => {
              return (
                <tr key={el.cm}>
                  <>
                    <td>{el.us}</td>
                    <td>{el.uk}</td>
                    <td>{el.eu}</td>
                    <td>{el.cm}</td>
                  </>
                </tr>
              );
            })}
        </tbody>
      </StyledSizeListTable>
    </StyledModalSizeListContainer>
  );
};
