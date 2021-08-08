import styled from "styled-components";

export const SimpleButtonNoBorder = styled.button`
    outline: none;
    border: none;
    background: transparent;
    :hover {
        cursor: pointer;
    }
    :focus {
        outline: none;
        background: transparent;
    }
`;
