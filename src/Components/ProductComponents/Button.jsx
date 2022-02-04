import { Btn } from "../../UI";
import { Dark, RedMatte, RedPink } from "../../UI/Variable";
import styled from "styled-components";

export const ProductBtnAddCart = styled(Btn)`
    width: 98%;
    height: auto;
    color: ${RedMatte};
    font-weight: 600;

    @media screen and (min-width: 780px) {
        width: 30%;
        color: ${Dark};
        transition: .3s;
        :hover{
            background-color: ${RedMatte};
        }

        :active{
            background-color: ${RedPink};
            transform: scale(0.8);
        }
    }
`