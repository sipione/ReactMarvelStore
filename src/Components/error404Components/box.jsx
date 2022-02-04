import styled from "styled-components"
import errorBackground from "../../img/404Background.jpg"
import { LittleBox } from "../../UI"
import { Dark, RedMatte, TitleFont } from "../../UI/Variable"

export const ErrorBoxMain = styled.main`
    background: url(${errorBackground}) center/cover no-repeat;
    min-height: 110vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ErrorTextBox = styled(LittleBox)`
    background: none;
    width:30%;
    box-shadow: none;
`

export const ErrorTextContent = styled.h1`
    font-family: ${TitleFont};
    color: ${RedMatte};
    font-size: 3.5rem;
    text-align: center;
    text-shadow: 0px 5px 25px ${Dark};
`