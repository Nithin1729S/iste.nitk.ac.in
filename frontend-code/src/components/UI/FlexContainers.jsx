import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
`;

export const FlexContainerCentered = styled(FlexContainer)`
    justify-content: center;
    align-items: center;
`;
