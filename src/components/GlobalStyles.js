import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    
    body{
        font-family: 'Lato', sans-serif;
        width: 100%;
        background-color: #5332a8;
        color: #fff;
    }

    h1 {
        margin: 0 3rem;
        font-size: 2.5rem;
        font-weight: lighter;
    }

    h2{
        margin: 0.5rem;
    }

    p{
        margin-left: 0.5rem;
        margin-bottom: 0.2rem;
    }
 

`;

export default GlobalStyles;
