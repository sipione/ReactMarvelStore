import React, { useEffect, useState } from "react";
import useCart from "../hooks/useCart";
import { Btn, LittleBox } from "../UI";
import ApiHqRequest from "../api/Api"
import styled from "styled-components";
import { Dark, Light, RedMatte, RedPink } from "../UI/Variable";
import del from "../img/del.png"


const CartList = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    border-bottom:.5px solid ${Dark};

    .bigger{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        padding: 2% 2.5%;
        border-right:.5px solid ${Dark};
    }
    .smaller{
        display: flex;
        align-items: center;
        justify-content: center;
        width:10%;
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

const CartBtnPayment = styled(Btn)`
    width: 90%;
    margin: 10%;
    background-color: ${Dark};
    color: ${Light};
    box-shadow: 0 3px 5px gray;
`

const Cart = ()=>{
    const [cart, counter, manageCart] = useCart();
    const [jsonItems, setJsonItems] = useState([])

    useEffect(()=>{
        let items = [];
        ApiHqRequest().map(item=>{
            if(cart.find(e=> e == item.id)){
                items.push(item)
            }
        })
        setJsonItems([...items]);
    },[manageCart])

    console.log(jsonItems);

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
                            <CartDelete src={del} alt="delete item from the cart" accessKey={item.id} id="delete" index={index} onClick={manageCart}/>
                            
                            {counter[item.id]}
                            
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