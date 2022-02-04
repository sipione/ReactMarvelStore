import React from "react";
import { Link, useParams } from "react-router-dom";
import ApiHqRequest from "../api/Api";
import styled from "styled-components";
import useCart from "../hooks/useCart"
import productBackground from"../img/productBackground.jpg"
import { ProductTitle } from "../Components/ProductComponents/Title"
import { ProductBox, ProductImg, ProductDetailsTitle, ProductDetailDescription } from "../Components/ProductComponents/Box"
import { ProductBtnAddCart } from "../Components/ProductComponents/Button"

const ProductMain = styled.main`
    min-height: 82vh;

    @media screen and (min-width: 780px) {
        min-height: 100vh;
        padding: 2rem; 
        background: url(${productBackground}) bottom/cover no-repeat;
    }
`


const Products = ()=>{
    const {id} = useParams();
    const [cart, manageCart] = useCart()

    return(
        <ProductMain>
        {ApiHqRequest().map(element=>{
                if(element.id == id){
                    return (
                        <>
                        <ProductTitle>{element.title}</ProductTitle>
                        <ProductBox>
                            <Link to="/" className="linkBack"> {` < `}  Keep shopping</Link>
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

                            <Link to="/cart" className="linkCart">Go to the cart</Link>
                        </ProductBox>
                        <ProductBtnAddCart id={element.id} onClick={manageCart}>Add to the cart</ProductBtnAddCart>
                        </>
                    )
                }
            })
        }
        </ProductMain>
    )
}

export default Products;