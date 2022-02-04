import { Dark, Light, TitleFont } from "../../UI/Variable";
import styled from "styled-components";

export const ProductTitle = styled.h2`
    font-family: ${TitleFont}
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${Light};
    padding: 1rem 1.5rem;
    text-shadow: 0px 5px 5px ${Dark};

    @media screen and (min-width: 780px) {
        width: 30%;
        font-size: 2rem;
        line-height: 2.5rem;
    }
`