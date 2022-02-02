import React from "react";
import styled from "styled-components";
import { Btn } from "../UI/index";
import { RedMatte as RedPink, Light } from "../UI/Variable";

const BtnBuy = styled(Btn)`
    background-color: ${RedPink};
    color: ${Light};
`

export default BtnBuy;