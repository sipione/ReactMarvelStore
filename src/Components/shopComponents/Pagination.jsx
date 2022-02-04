import React, { useState } from "react";
import styled from "styled-components";
import { Light } from "../../UI/Variable";

const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    gap: .5rem;
    list-style: none;
    align-self: center;
    justify-self: center;
    width: 100%;
    padding: 1.5rem 0;

    .pagination__item--active{
        background-color: ${Light};
        border-radius: 50%;
    }

    @media screen and (min-width: 780px) {
        grid-column: 1/3;
        grid-row: 2/3;
    }
`

const PaginationList__item = styled.button`
    background: none;
    border: none;
    padding: .25rem;
    cursor: pointer;
    width: 3.5vh;
    height: 3.5vh;
`

const maxItems = 5;
const maxLeft = (maxItems - 1)/2;

const Pagination = ({limit, total, offset, setOffset})=>{
    const current = offset ? offset/limit +1 : 1;
    const pages = Math.ceil(total/limit);
    const first = Math.max(current - maxLeft, 1)
    
    function handlePage(page){
        setOffset((page-1)*limit)
    }

    return(
        <PaginationList>
            <li>
                <PaginationList__item onClick={()=> current==1 ? "" : handlePage(current-1)}> {`<`} </PaginationList__item>
            </li>
            
            {
                Array.from({length: Math.min(maxItems, pages)})
                .map(( _ , index)=> first <= pages - maxItems ? index + first : Math.min(index + maxItems, index+first))
                .map(page=>(
                    <li>
                        <PaginationList__item onClick={()=> handlePage(page)} className={page === current ?"pagination__item--active":""} >{page}</PaginationList__item>
                    </li>
                ))
            }

            <li>
                <PaginationList__item onClick={()=>current==pages ? "" : handlePage(current+1)}> {`>`} </PaginationList__item>
            </li>
        </PaginationList>
    )
}

export default Pagination;