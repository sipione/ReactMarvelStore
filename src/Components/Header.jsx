import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../img/marvel-logo.png'
import { Menu, Nav } from "../UI";
import { BodyFont, Dark, Light, RedMatte } from "../UI/Variable";

const Container = styled.header`
    background-color: ${Dark};
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    height: 15vh;

    .linkLogo{
        width: 30%;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 780px) {
        height: auto;
    }
`

const Logo = styled.img`
    width: 100%;
`

const HeaderMenu =  styled(Menu)`
    gap: 1.5rem;
`

const HeaderNav = styled(Nav)`
      
`

const Header = ()=>{

    return(
        <Container>
            <Link className="linkLogo" to="/"><Logo src={logo} alt="Marvel Logo background color red and letter white"/></Link>
            <HeaderMenu>
                <Link to="/"><HeaderNav>Shop</HeaderNav></Link>
                <Link to="/cart"><HeaderNav>My cart</HeaderNav></Link>
                <Link to="#"><HeaderNav>My account</HeaderNav></Link>
            </HeaderMenu>
        </Container>
    )
}

export default Header;