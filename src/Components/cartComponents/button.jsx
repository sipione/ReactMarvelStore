import { Btn } from "../../UI";
import styled from "styled-components";
import { BodyFont, Dark, Light } from "../../UI/Variable";



export const CartBtnPayment = styled(Btn)`
    width: 90%;
    margin: 10%;
    background-color: ${Dark};
    color: ${Light};
    box-shadow: 0 3px 5px gray;
`

export const CartEmptyBtn = styled(Btn)`
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    cursor: pointer;
    background-color: ${Dark};

    .link{
        font-family:${BodyFont}
        color:${Light};
    }

    @media screen and (min-width: 780px) {
        width: 20%;
        margin: 0 10%;
        background-color: ${Light};

        .link{
            color: ${Dark};
        }
        
    }
`