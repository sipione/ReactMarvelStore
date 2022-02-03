import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { BodyFont, Dark, Light, TitleFont } from "../UI/Variable";
import ApiHqRequest from '../api/Api'
import {Btn, LittleBox} from "../UI/index"
import BtnBuy from "../Components/BtnBuy"
import { Link, useParams } from "react-router-dom";
import Pagination from "../Components/Pagination";

const FilterBox = styled(LittleBox)`
    align-items: flex-start;
`

const BtnFilterContent = styled.section`
    max-height: 35vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5rem;
    padding: .5rem;
`

const FilterTitle = styled.h3`
    font-family: ${TitleFont};
    font.size: 2rem;
    padding: .25rem 1rem;
`

const BtnFilter=styled(Btn)`
    width: auto;
    margin:0;
`

const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const ProductImg = styled.img`
    width: 100%;
`

const ProductTitle = styled.h2`
    font-family: ${TitleFont};
    font-size: 2rem;
    color: red
`
const ProductDescription = styled.p`
    font-family: ${BodyFont};
    font-size: 1rem;
    color: ${Dark};
    text-align: justify;
`

const creatorList = [...ApiHqRequest().map(item=> item.creators.items)];

const teste = [...ApiHqRequest().map(e => (e.creators.items.map(i=>{
    if(i.role=="editor"){return i.name}})))]
const teste2 = [...teste]
let lista = []
teste2.forEach(e=>e.forEach(i=>lista.push(i)))
console.log(new Set(lista))



const allCreators = new Set([...creatorList.map((e,i) => e[0].name)])


const Shop = ()=>{ 
    const [creators, setCreators] = useState([...allCreators])
    const [showCreator, setShowCreator] = useState([])
    const [magazines, setMagazines] = useState([...ApiHqRequest()])
    const [filteredMagazines, setFilteredMagazines] = useState(magazines)
    const [offset, setOffset] = useState(0);

    const limit = 5;

    useEffect(()=>{
        if(showCreator.length !== 0){
            let list = [];
            magazines.map(item=>{
                if(showCreator.find(e=>e==item.creators.items[0].name)){
                    list.push(item)
                }
            })
            setFilteredMagazines(list)
        }else{
            setFilteredMagazines(magazines)
        }
        }, [showCreator, offset])

    function toggle(event){
        setOffset(0);
        const name = event.target.id;
        if(!showCreator.find(element=> element == name)){
            setShowCreator([...showCreator, name])
            event.target.style.background ="lightgreen";
        }else{
            const index = showCreator.indexOf(name)
            showCreator.splice(index, 1);
            setShowCreator([...showCreator]);
            event.target.style.background =`${Light}`;
        }
        
    }

    return(
        <>
        <FilterBox>
        <FilterTitle>Filter by creator</FilterTitle>
        <BtnFilterContent>
        {creators.map(creator =>{
            return(
                <BtnFilter onClick={toggle} id={creator}>{creator}</BtnFilter>
            )
        })}
        </BtnFilterContent>
        </FilterBox>
        {filteredMagazines.slice(offset, offset + limit).map(item=>{
            return(
                <Link to={`/${item.id}`}>
                    <LittleBox key={item.id}>
                        <ProductImg src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                        <ProductContent>
                            <ProductTitle>{item.title.replace(/#\d+/g, '')}</ProductTitle>
                            <ProductDescription>{item.description}</ProductDescription>
                            <BtnBuy>Buy</BtnBuy>
                        </ProductContent>
                    </LittleBox>
                </Link>
            )
        })}
        <Pagination limit={limit} total={filteredMagazines.length} offset={offset} setOffset={setOffset}/>
        </>
    )
}

export default Shop;