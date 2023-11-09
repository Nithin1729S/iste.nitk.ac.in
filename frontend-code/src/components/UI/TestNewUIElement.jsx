//This file is designed to test a component on the page before adding it to a file and rendering on a page, useful to try out a bunch of cs
import styled from "styled-components";
import { FlexContainerCentered } from "./FlexContainers";
import SquareOne23 from "../SquareOne23";

const Container = styled(FlexContainerCentered)`
    margin-top: 10%;
`;

const TestUI = () => {
    return (
        <Container isColumn>
            This text is in the testUI thingy, replace this with a component to
            test it out
            {/* <SquareOne23 /> */}
        </Container>
    );
};
export default TestUI;
