import styled from "styled-components";


export const Products = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom:40px;
`

export const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    padding: 20px;
    color: 0C0D36;
    padding: 20px;


    @media (max-width : 575px) {
        font-size: 1.2rem;
        text-align: center;
    }
`

export const GroupBoxCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: -20px;
`

export const BoxCard = styled.div`
    width: 216px;
    height: 155px;
    margin: auto;
    margin: 20px 0 40px 0;
    border-radius: 10px;

    @media (max-width : 575px) {
    width: 150px;
    height: 150px;
    margin-bottom: 5px;
    `

export const A = styled.a`
    text-decoration: none;
`

export const CardProducts = styled.div`
    text-align: center;
`

export const StyledImg = styled.img`
    width: 80%;
    align-items: center;
    margin: auto;
    padding: 10px 10px 0 10px;
    color: rgb(148, 148, 148);

    @media screen and (max-width : 575px) {
        width: 100%;
        align-items: center;
        padding: 0;
    }
`

export const H6 = styled.h6`
    font-weight: 400;
    font-size: 1.125rem;
    padding: 10px 20px 0 20px;
    color: #0C0D36;

    @media screen and (max-width : 575px) {
    font-weight: 400;
    font-size: 0.85rem;
    text-align: center;
    margin-top: -5px;
    padding: 0;
    color: #0C0D36;
    }
`

export const StyledP = styled.p`
    font-weight: 500;
    font-size: 1rem;
    padding: 0 20px 0 20px;
    color: rgba(251, 74, 35, 0.745);

    @media screen and (max-width : 575px) {
    font-weight: 500;
    font-size: 0.7rem;
    text-align: center;
    margin-top: -5px;
    padding: 0
    color: rgba(251, 74, 35, 0.745);    
    }
`
