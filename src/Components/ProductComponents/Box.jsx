import { LittleBox } from "../../UI";
import { BodyFont, Dark, RedMatte, TitleFont } from "../../UI/Variable";
import styled from "styled-components";

export const ProductBox = styled(LittleBox)`
    align-items: flex-start;

    .linkBack, .linkCart{
        color: ${RedMatte};
        font-family:${BodyFont};
    }

    .linkCart{
        align-self: flex-end;
        padding-right: .5rem;
    }

    @media screen and (min-width: 780px) {
        width: 30%;

        .linkBack, .linkCart{
            color: ${Dark};
        }
        
        .linkBack:hover, .linkCart:hover{
            color: ${RedMatte};
        }
    }
`

export const ProductImg = styled.img`
    width:10vh;
    border-radius: 10px;
    margin: 1rem 1.5rem;
    transition: 1s;

    @media screen and (min-width: 780px) {
        :hover{
            transform: scale(3.5) translate(35px, 35px);
            border-radius: 0;
        }
    }
`

export const ProductDetailsTitle = styled.h3`
    font-family: ${TitleFont};
    font-weight: 400;
    width: 50%;
    border-bottom: 1px solid ${Dark};
    margin-bottom: 1rem;
`

export const ProductDetailDescription = styled.p`
    font-family: ${BodyFont};
    font-size: 1.05rem;
    margin-bottom: 1rem;
    font-weight: 600;
`