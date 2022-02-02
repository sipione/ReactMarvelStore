import React from "react";
import { useParams } from "react-router-dom";
import ApiHqRequest from "../api/Api";
import { Btn, LittleBox } from "../UI";
import { BodyFont, Dark, Light, RedMatte, TitleFont } from "../UI/Variable";
import styled from "styled-components";
import useCart from "../hooks/useCart"

const ProductTitle = styled.h2`
    font-family: ${TitleFont}
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${Light};
    padding: 1rem 1.5rem;
    text-shadow: 0px 5px 5px ${Dark}
`
const ProductBox = styled(LittleBox)`
    align-items: flex-start;
`

const ProductImg = styled.img`
    width:10vh;
    border-radius: 10px;
    margin: 1rem 1.5rem;
`

const ProductDetailsTitle = styled.h3`
    font-family: ${TitleFont};
    font-weight: 400;
    width: 50%;
    border-bottom: 1px solid ${Dark};
    margin-bottom: 1rem;
`
const ProductDetailDescription = styled.p`
    font-family: ${BodyFont};
    font-size: 1.05rem;
    margin-bottom: 1rem;
    font-weight: 600;
`

const ProductBtnAddCart = styled(Btn)`
    width: 98%;
    height: auto;
    color: ${RedMatte};
    font-weight: 600;
`

const Products = ()=>{
    const {id} = useParams();
    const [cart, counter, manageCart] = useCart()


    return(
        <>
        {ApiHqRequest().map(element=>{
                if(element.id == id){
                    return (
                        <>
                        <ProductTitle>{element.title}</ProductTitle>
                        <ProductBox>
                            <ProductImg src={`${element.thumbnail.path}.${element.thumbnail.extension}`}/>

                            <ProductDetailsTitle>Product details</ProductDetailsTitle>

                            <ProductDetailDescription>
                                <strong>Issue Numer:</strong> {element.issueNumber}
                            </ProductDetailDescription>
                            
                            <ProductDetailDescription>
                                <strong>Description:</strong> {element.description}
                            </ProductDetailDescription>
                            
                            <ProductDetailDescription>
                                <strong>UPC:</strong>{element.upc}
                            </ProductDetailDescription>
                            
                            <ProductDetailDescription>
                                <strong>Number of pages:</strong>{element.pageCount}
                            </ProductDetailDescription>
                        </ProductBox>
                        <ProductBtnAddCart id={element.id} onClick={manageCart}>Add to the cart</ProductBtnAddCart>
                        </>
                    )
                }
            })
        }
        </>
    )
}

export default Products;