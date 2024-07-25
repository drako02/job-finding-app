import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Eudoxus Sans", Arial, sans-serif;
    }
    
    body {
        height: 100%;
        width: 100%;
        font-family: "Eudoxus Sans", Arial, sans-serif;
    }
`;

export default  GlobalStyle;