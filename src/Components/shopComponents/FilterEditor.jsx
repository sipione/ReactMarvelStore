import styled from 'styled-components'
import { TitleFont } from "../../UI/Variable";
import {Btn, LittleBox} from "../../UI/index"

export const FilterBox = styled(LittleBox)`
    align-items: center;

    @media screen and (min-width: 780px) {
        grid-column: 1/2;
    }
`

export const BtnFilterContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
    padding: .5rem;

    @media screen and (min-width: 780px) {
        flex-direction: column;
        flex-wrap: nowrap;
        width: 100%;
        gap: 2rem;
    }
`

export const FilterTitle = styled.h3`
    font-family: ${TitleFont};
    font.size: 2rem;
    padding: .25rem 1rem;
`

export const BtnFilter=styled(Btn)`
    width: 100%;
    margin: 0;
`