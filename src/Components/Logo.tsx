import {styled} from "styled-components";
import React from "react";
import appLogo from '../assets/Flair logo.svg'

interface LogoProps{
    className?:string
}
const LogoImg = styled.img `
    height: 24px;
    width: 78px;
    
`;

function Logo ({className}:LogoProps) {
    return (
        <LogoImg className = {className} src={appLogo}/>
    );
}

export default Logo;