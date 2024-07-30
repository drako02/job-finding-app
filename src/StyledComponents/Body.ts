import {styled} from "styled-components";

const breakpoints = {md: "768px", lg:"1024px"}
const media = {md:`(min-width: ${breakpoints.md})`, lg:`(min-width:${breakpoints.lg})`}

export const LandingBody = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 8.4%;
    padding-top: 26.8%;
    background-color: #F5F5F5;

    @media ${media.md} {
        padding-top: 19%;
        height: 81.6%;
    }

    @media ${media.lg} {
        padding-top: 12.6%;
        height: 83.5%;
    }
`;