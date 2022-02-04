import React from "react";
import styled from "styled-components";
import { Btn } from "../../UI/index";
import { RedMatte as RedPink, Light, Dark } from "../../UI/Variable";

const BtnBuy = styled(Btn)`
    background-color: ${RedPink};
    color: ${Light};
    box-shadow: none;
    transition .3s;

    :hover{
        box-shadow: 0 3px 5px ${Dark};
    }
`

export default BtnBuy;