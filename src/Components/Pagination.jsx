import React from "react";
import styled from "styled-components";
import { Light } from "../UI/Variable";

const PaginationList = styled.ul`
    display: flex;
    justify-content: center;
    gap: .5rem;
    padding: 1rem 2rem;
    list-style: none;
    
    .pagination__item--active{
        background-color: ${Light};
        border-radius: 50%;
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
                .map(( _ , index)=> first <= pages - maxItems ? index + first : Math.min(index + maxItems +1, index+first))
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