import {styled} from "styled-components";
import React from "react";
import appLogo from '../assets/Flair logo.svg'

const LogoImg = styled.img `
    height: 24px;
    width: 78px;
    
`;

function Logo () {
    return (
        <LogoImg src={appLogo}/>
    );
}

export default Logo;