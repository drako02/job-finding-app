import {styled} from "styled-components";

const breakpoints = {md: "768px", lg:"1024px"}
const media = {md:`(min-width: ${breakpoints.md})`, lg:`(min-width:${breakpoints.lg})`}


export const WelcomeArea = styled.div`
    //position: relative;
    //top: 20.4%;
    display: flex;
    width: 91%;
    height: 16%;
    flex-direction: column;
    justify-content: space-between;
    font-family: Bicyclette, sans-serif;
    font-size: 28px;
    font-weight: bold;
    flex-shrink: 0;
    
    div{
        font-size: 18px;
        
        span{
            color: #0B8659;
        }
    }

    @media ${media.md} {
        height: 50.3%;
        
        div{
            
        }
    }

    @media ${media.lg} {
        height: 50.8%;
    }
`;

export const  CtaArea = styled.div`
    height: 37.1%;
    width: 91.1%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media ${media.md} {
        flex-direction: row;
        height: 21.6%;
        width: 100%;
        //
        background-color: white;
        border-radius: 40px;
        justify-content: flex-end;
        align-items: center;
    }

    @media ${media.lg} {
        height: 21.5%;
    }
`;

export const InputContainer = styled.div`
    height: 27.3%;
    width: 100%;
    background-color: white;
    border-radius: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const InputContainer2 = styled(InputContainer)`
    justify-content: center;
`;

export const SearchIcon = styled.img`
    height: 24px;
    width: 24px;
`;