import styled from 'styled-components'
import { RedMatte, Light, BodyFont, Dark } from './Variable'

export const LittleBox = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: .5rem;
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
    box-shadow: 0 3px 5px ${Dark};
    cursor: pointer; 
`
export const Menu = styled.ul`
display:flex;
flex-direction: row;
gap: 1rem;
`

export const Nav = styled.a`
color: ${Light};
font-family: ${BodyFont};
font-size: 3vh;
transition: .3s;

@media screen and (min-width: 780px) {
    font-size: 2vw;
    
    :hover{
        color: ${RedMatte};
    }
}    
`