import {styled} from "styled-components";
import UserTypeTabItems from "../Components/UserTypeTabItems.tsx";
const breakpoints = {md: "768px", lg:"1024px"}
const media = {md:`(min-width: ${breakpoints.md})`, lg:`(min-width:${breakpoints.lg})`}
export const LandingHeader = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    
    
    @media ${media.md} {
        height: 17.6%;
    }

    @media ${media.lg} {
        height: 19.7%;
    }
        
    }
    
`;

export const TitleBar = styled.div`
    width: 100%;
    height: 5.3%;
    display: flex;
    padding: 0 4.4%;
    justify-content: center;
    align-items: center;
`;

export const LandingTitleBar = styled(TitleBar)`
    height: 47.5%;
    justify-content: space-between;
    align-items: center;

    @media ${media.md} {
        height: 53.7%;
        
    }

    @media ${media.lg} {
        height: 55.7%;
    }
`;

export const UserTypeBar = styled.div`
    display: flex;
    width: 100%;
    height: 52.5%;
    align-items: center;
    justify-content: center;

    @media ${media.md} {
        height: 46.3%;
    }

    @media ${media.lg} {
        height: 44.3%;
    }
`;

export const UserTypeTabs = styled.div`
    display: flex;
    height: 74.2%;
    width: 94.2%;
    background-color: #F7F7F7;
    align-items: center;
    justify-content: center;
    padding: 0 2.4%;
`;

const StyledTabItems = styled.ul`
    height: 30px;
    .nav-link.active {
        background-color: white;
        
    }
`;
