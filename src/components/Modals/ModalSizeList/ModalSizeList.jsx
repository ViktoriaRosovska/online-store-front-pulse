import sizeList from "../../../data/modalSizeList.json";
import {
  StyledModalSizeListContainer,
  StyledSizeListTable,
  StyledSizeListTableCaption,
  StyledTBody,
  StyledTHead,
} from "./ModalSizeList.styled";
export const ModalSizeList = () => {
  return (
    <StyledModalSizeListContainer>
      <StyledSizeListTable>
        <StyledSizeListTableCaption>Розмірна сітка</StyledSizeListTableCaption>

        <StyledTHead>
          <tr>
            <th>US</th>
            <th>UK</th>
            <th>EU</th>
            <th>CM</th>
          </tr>
        </StyledTHead>

        <StyledTBody>
          {sizeList &&
            sizeList.length &&
            sizeList.map((el, idx) => {
              return (
                <tr key={el.cm + idx}>
                  <>
                    <td>{el.us}</td>
                    <td>{el.uk}</td>
                    <td>{el.eu}</td>
                    <td>{el.cm}</td>
                  </>
                </tr>
              );
            })}
        </StyledTBody>
      </StyledSizeListTable>
    </StyledModalSizeListContainer>
  );
};
