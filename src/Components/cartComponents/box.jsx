import { LittleBox } from "../../UI";
import styled from "styled-components";
import { BodyFont, Dark, RedMatte, TitleFont } from "../../UI/Variable";
import emptyBackground from "../../img/emptyBackground.jpg"


export const CartBox = styled(LittleBox)`

    @media screen and (min-width: 780px) {
        width: 40%;
    }
`

export const CartList = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    border-bottom:.5px solid ${Dark};

    .bigger{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        padding: 2% 2.5%;
        border-right:.5px solid ${Dark};
    }
    .smaller{
        display: flex;
        align-items: center;
        justify-content: center;
        width:20%;
        padding: 2% 2.5%;
        position: relative;
    }

    .bigger__linkProduct{
        color: ${Dark};
        font-family: ${BodyFont};
    }

    @media screen and (min-width: 780px) {
        .bigger{
            justify-content: flex-start;
            width: 90%;
        }

        .smaller{
            width:10%;
        }
    }
`

export const CartProductImg =  styled.img`
    width: 5vh;
    border-radius: 10px;
    margin-right: 1vh;
`

export const CartDelete = styled.img`
    width: 2vh;
    position: absolute;
    top: 0;
    left: 0;
`

export const CartAdd = styled.img`
    width: 2vh;
    position: absolute;
    top: 0;
    right: 0;
`

export const CartEmptyBox = styled.main`
    min-height: 82vh;


    @media screen and (min-width: 780px) {
        background: url(${emptyBackground}) left/cover no-repeat;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const CartEmpty = styled.h2`
    font-family: ${TitleFont};
    font-size: 2rem;
    color: ${Dark};
    text-align: center;
    padding: 25%;

    @media screen and (min-width: 780px) {
        color: ${RedMatte};
        padding: 5%;
    }
`