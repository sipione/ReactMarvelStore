import { createGlobalStyle } from "styled-components";
import { Light, RedLight, RedMatte } from "./Variable";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        text-decoration: none;

        ::selection{
            background-color: ${RedLight};
            color: ${Light};
        }
    }

    html {
        scroll-behavior: smooth;
    }

    body{
        background-color: ${RedMatte}
    }
`
export default GlobalStyle;