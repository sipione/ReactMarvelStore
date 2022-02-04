import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import footerBackground from "../img/footerBackground.jfif"
import { Menu, Nav } from "../UI";
import { Dark } from "../UI/Variable";

const FooterContainer = styled.footer`
    background-color:${Dark};
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    padding: .3rem 2.5rem;
`

const FooterMenu = styled(Menu)`
    gap: 2rem;
`

const FooterNav = styled(Nav)`
    font-size: 1.5vh;
    transition: .3s;

    @media screen and (min-width: 780px) {
        font-size: 1vw;
    }
`

const Footer = ()=>{
    return(
        <FooterContainer>
            <FooterMenu>
                <Link to="/"><FooterNav>Shop</FooterNav></Link>
                <Link to="/cart"><FooterNav>My cart</FooterNav></Link>
                <Link to="#"><FooterNav>My account</FooterNav></Link>
            </FooterMenu>
            <FooterNav href="https://sipione.tech">Created by Sipione Tech</FooterNav>
        </FooterContainer>
    )
}

export default Footer;