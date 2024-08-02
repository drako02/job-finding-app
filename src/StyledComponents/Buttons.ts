import {styled} from "styled-components";

const breakpoints = {md: "768px", lg:"1024px"}
const media = {md:`(min-width: ${breakpoints.md})`, lg:`(min-width:${breakpoints.lg})`}

export const StyledNavButton = styled.button`
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: none;
    background-color: transparent;
    
    img{
        height: 24px;
        width: 24px;
    }
    @media ${media.md} {
        
    }
    @media ${media.lg} {
        display: none;
    }
`;

export const CtaButton = styled.button`
    height: 48px;
    width: 48px;
    border-radius: 34px;
    background-color: #0B8659;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: none;
    
    img{
        height: 24px;
        width: 24px;
    }
    
    @media ${media.md} {
        height: 40px;
        width: 40px;   
        margin-right: 1.5%;
        //margin-left: auto;
    }
    @media ${media.lg} {
        height: 40px;
        width: 40px;
    }
`;