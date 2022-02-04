import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { BodyFont, Dark, Light, TitleFont } from "../UI/Variable";
import ApiHqRequest from '../api/Api'
import BtnBuy from "../Components/shopComponents/BtnBuy"
import { Link } from "react-router-dom";
import Pagination from "../Components/shopComponents/Pagination";
import { BtnFilter, BtnFilterContent, FilterBox, FilterTitle } from "../Components/shopComponents/FilterEditor";
import { ProductsBox, ProductBox, ProductImg, ProductTitle, ProductDescription } from "../Components/shopComponents/Products"
import useCreators from "../hooks/useCreators";

const MainContent = styled.main`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 780px) {
        display: grid;
        grid-template-columns: 20% 80%;
    }
`

const Shop = ()=>{ 
    const [magazines] = useState([...ApiHqRequest()])
    const [filteredMagazines, setFilteredMagazines] = useState(magazines)
    
    const [creators, selectedEditors, setShow, filterByEditor] = useCreators(magazines)
    
    const [offset, setOffset] = useState(0);

    const limitEachPage = 6;

    useEffect(()=>{
        window.scrollTo(0,0);
        if(selectedEditors.length !== 0){
            setFilteredMagazines([...filterByEditor()])
        }else{
            setFilteredMagazines(magazines)
        }
        }, [selectedEditors, offset]
    )

    
    return(
        <MainContent>
        <FilterBox>
        <FilterTitle>Filter by editor</FilterTitle>
        <BtnFilterContent>
        {creators.map(creator =>{
            return(
                <BtnFilter onClick={event=>{
                    setShow(event) 
                    setOffset(0)
                }} id={creator}>{creator}</BtnFilter>
            )
        })}
        </BtnFilterContent>
        </FilterBox>
        
        <ProductsBox>
        {filteredMagazines.slice(offset, offset + limitEachPage).map(item=>{
            return(                
                <ProductBox key={item.id}>
                    <ProductImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                    <Link to={`/${item.id}`} className="ProductContent">
                        <ProductTitle>{item.title.replace(/#\d+/g, '')}</ProductTitle>
                        <ProductDescription>{item.description}</ProductDescription>
                        <BtnBuy>Buy</BtnBuy>
                    </Link>
                </ProductBox>
            )
        })}
        </ProductsBox>

        <Pagination limit={limitEachPage} total={filteredMagazines.length} offset={offset} setOffset={setOffset}/>

        </MainContent>
    )
}

export default Shop;