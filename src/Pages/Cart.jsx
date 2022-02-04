import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import ApiHqRequest from "../api/Api"
import styled from "styled-components";
import del from "../img/del.png"
import add from "../img/add.png"
import cartBackground from "../img/cartBackground.jpg"

import {CartBtnPayment, CartEmptyBtn} from "../Components/cartComponents/button"
import {CartBox, CartList, CartProductImg, CartDelete, CartAdd, CartEmptyBox, CartEmpty} from "../Components/cartComponents/box"

const MainBox = styled.main`
    min-height: 82vh;

    @media screen and (min-width: 780px) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(${cartBackground}) top/cover no-repeat;
        padding: 2rem;
    }
`


const Cart = ()=>{
    const [cart, manageCart] = useCart();
    const [jsonItems, setJsonItems] = useState([])

    useEffect(()=>{
        let items = [];
        ApiHqRequest().map(item=>{
            if(cart[item.id]){
                items.push(item)
            }
        })
        setJsonItems([...items]);
    },[cart])

    if(jsonItems.length == 0){
        return(
            <CartEmptyBox>
                <CartEmpty>Your cart is empty :( </CartEmpty>
                <CartEmptyBtn><Link to="/" className="link">Back to the shop</Link></CartEmptyBtn>
            </CartEmptyBox>
        )
    }
    return(
        <MainBox>        
            <CartBox>
                <CartList>
                    <li className="bigger">Products List</li>
                    <li className="smaller">Qnt</li>
                </CartList>
                {
                    jsonItems.map((item, index)=>{
                        return(
                            <CartList>
                                <div className="bigger">
                                    <CartProductImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                                    <Link to={`/${item.id}`} className="bigger__linkProduct">{item.title}</Link>
                                </div>
                                <div className="smaller">
                                    <CartDelete src={del} alt="delete item from the cart" accessKey={item.id} id="delete" onClick={manageCart}/>

                                    <CartAdd src={add} id={item.id} onClick={manageCart}/>
                                    
                                    {cart[item.id]}
                                    
                                </div>
                            </CartList>
                        )
                    })
                }
                <CartBtnPayment>Payment</CartBtnPayment>
            </CartBox>
        </MainBox>
    )
}

export default Cart;