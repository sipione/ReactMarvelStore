import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { Btn, LittleBox } from "../UI";
import ApiHqRequest from "../api/Api"
import styled from "styled-components";
import { Dark, Light, RedMatte, RedPink, TitleFont } from "../UI/Variable";
import del from "../img/del.png"
import add from "../img/add.png"


const CartList = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    border-bottom:.5px solid ${Dark};

    .bigger{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        padding: 2% 2.5%;
        border-right:.5px solid ${Dark};
    }
    .smaller{
        display: flex;
        align-items: center;
        justify-content: center;
        width:20%;
        padding: 2% 2.5%;
        position: relative;
    }
`

const CartProductImg =  styled.img`
    width: 5vh;
    border-radius: 10px;
    margin-right: 1vh;
`

const CartDelete = styled.img`
    width: 2vh;
    position: absolute;
    top: 0;
    left: 0;
`

const CartAdd = styled.img`
    width: 2vh;
    position: absolute;
    top: 0;
    right: 0;
`

const CartBtnPayment = styled(Btn)`
    width: 90%;
    margin: 10%;
    background-color: ${Dark};
    color: ${Light};
    box-shadow: 0 3px 5px gray;
`

const CartEmpty = styled.h2`
    font-family: ${TitleFont};
    font-size: 2rem;
    color: ${Dark};
    text-align: center;
    padding: 25%;
`

const CartEmptyBtn = styled(Btn)`
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
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
            <>
            <CartEmpty>Your cart is empty :( </CartEmpty>
            <Link to="/"><CartEmptyBtn>Back to the shop</CartEmptyBtn></Link>
            </>
        )
    }
    return(
        
        <LittleBox>
            <CartList>
                <li className="bigger">Product</li>
                <li className="smaller">Qnt</li>
            </CartList>
            {
                jsonItems.map((item, index)=>{
                    return(
                        <CartList>
                            <div className="bigger">
                                <CartProductImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                                {item.title}
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
        </LittleBox>
    )
}

export default Cart;