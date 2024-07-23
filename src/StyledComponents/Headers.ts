import {styled} from "styled-components";
import UserTypeTabItems from "../Components/UserTypeTabItems.tsx";

export const LandingHeader = styled.div`
    width: 100%;
    height: 19%;
    display: flex;
    flex-direction: column;
`;

export const TitleBar = styled.div`
    width: 100%;
    height: 6.4%;
    display: flex;
    padding: 0 4.4%;
`;

export const LandingTitleBar = styled(TitleBar)`
    height: 47.5%;
    justify-content: space-between;
    align-items: center;
`;

export const UserTypeBar = styled.div`
    display: flex;
    width: 100%;
    height: 52.5%;
    align-items: center;
    justify-content: center;
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
