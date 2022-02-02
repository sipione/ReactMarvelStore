import { createGlobalStyle } from "styled-components";
import { RedMatte } from "./Variable";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        background-color: ${RedMatte}
    }
`
export default GlobalStyle;