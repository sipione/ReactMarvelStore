import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../img/marvel-logo.png'
import { BodyFont, Dark, Light } from "../UI/Variable";

const Container = styled.header`
    background-color: ${Dark};
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
`

const Logo = styled.img`
    width: 30%;
    transition: 2s;
    margin-bottom: 1rem;
`

const Menu =  styled.ul`
    display:flex;
    flex-direction: row;
    gap: 1rem;

`

const Nav = styled.a`
    color: ${Light};
    font-family: ${BodyFont};

`

const Header = ()=>{

    return(
        <Container>
            <Logo src={logo} alt="Marvel Logo background color red and letter white"/>
            <Menu>
                <Link to="/"><Nav>Shop</Nav></Link>
                <Link to="/cart"><Nav>My cart</Nav></Link>
                <Link to="#"><Nav>My account</Nav></Link>
            </Menu>
        </Container>
    )
}

export default Header;