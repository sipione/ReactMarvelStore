import styled from 'styled-components'
import { BodyFont, Dark, TitleFont } from "../../UI/Variable";
import {LittleBox} from "../../UI/index"

export const ProductsBox = styled.section`
    display: flex;
    flex-direction: column;

    .ProductContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 0;
    }

    @media screen and (min-width: 780px) {
        grid-column: 2/3;
        grid-row: 1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 2rem;
        padding: 1rem;
    }
`

export const ProductBox = styled(LittleBox)`
    
    @media screen and (min-width: 780px) {
        width: 80%;
        max-height: 80vh;
        margin: 0 auto;
    }
`

export const ProductImg = styled.img`
    width: 100%;

    @media screen and (min-width: 780px) {
        overflow:hidden;
    }
`

export const ProductTitle = styled.h2`
    font-family: ${TitleFont};
    font-size: 2rem;
    color: red;

    @media screen and (min-width: 780px) {
        font-size: 1.25rem;
        margin-bottom: .25rem;
    }
`

export const ProductDescription = styled.p`
    font-family: ${BodyFont};
    font-size: 1rem;
    color: ${Dark};
    text-align: justify;

    @media screen and (min-width: 780px) {
        margin-bottom: .5rem;
    }
`