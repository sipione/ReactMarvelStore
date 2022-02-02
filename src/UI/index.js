import styled from 'styled-components'
import { RedMatte, Light, BodyFont, Dark } from './Variable'

export const LittleBox = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
    box-shadow: 2px 2px 5px ${RedMatte};
    border-radius: 10px;
    background-color: ${Light};
    margin: 1rem;
    box-shadow: 0 3px 5px ${Dark}
`

export const Btn = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-family: ${BodyFont}
    width: 21%;
    margin: 1%;
    height: 21%;
    padding: .25rem;
    box-shadow: 0 3px 5px ${Dark} 
`