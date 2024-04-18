import sizeList from "../../../data/modalSizeList.json";

import {
  StyledModalSizeListContainer,
  StyledSizeListTable,
} from "./ModalSizeList.styled";
export const ModalSizeList = ({ onClose }) => {
  return (
    <StyledModalSizeListContainer>
      <button
        onClick={onClose}
        style={{ position: "absolute", right: "19px", top: "80px" }}
      >
        X
      </button>
      <StyledSizeListTable>
        <caption style={{ marginBottom: "36px" }}>Розмірна сітка</caption>

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
