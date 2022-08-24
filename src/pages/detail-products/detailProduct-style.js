import styled from 'styled-components'

export const Container = styled.div`
    width: 69.69%;
    margin: auto;
    background-color: #ffffff;
    margin-top: 60px;

    @media (max-width : 768px) {
        width: 90%;
    }
`

export const IsLoading = styled.div`
    width:50%;
    display: block;
    margin-left: 40%;
    margin-top: 100px;
    margin-bottom: 100px;

    @media (max-width : 768px) {
        margin-left: 25%;
    }   
`

export const StyledDetailProduct = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

export const ColDetailProduct = styled.div`
    display: inline-flex;

    @media screen and (max-width : 575px) {
        display: block;
    }
`

export const Col1 = styled.div`
    width: 100%;
    padding: 10px;
`

export const ImgProdDetail = styled.div`
    @media screen and (max-width : 575px) {
        width: 90%;
    }
`

export const StyledImg = styled.img`
    width: 100%;

    @media (max-width : 575px) {
        width: 100%;
    }
`
export const Col2 = styled.div`
    width: 100%;
    padding: 10px;

    @media (max-width : 575px) {
        box-sizing:border-box ;
        width: 95%;
    }
`

export const H1 = styled.h1`
    font-size: 24px;
    font-weight: 400;
    line-height: 150%;
    color: #0C0D36;

    @media screen and (max-width : 768px) {
        font-size: 1.25rem;
    }

`

export const PQuote = styled.p`
    margin-top: -5px;
    font-weight: 500;
    font-size: 12px;
    line-height: 180%;
    color: #979797;

    @media screen and (max-width : 768px) {
        font-size: 0.625rem;
    }
`

export const H4 = styled.h4`
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    color: rgba(251, 74, 35, 0.745);

    @media screen and (max-width : 768px) {
        font-size: 1rem;
    }
`

export const PExp = styled.p`
    text-align: justify;
    font-size: 14px;
    font-weight: 400;
    line-height: 180%;
    color: #525252;

    @media screen and (max-width : 768px) {
        font-size: 0.75rem;
    }
`

export const A = styled.a`
    margin-top: 16px;
    text-decoration: none;
    position: absolute;
    width: 210px;
    height: 35px;
    background-color: #29A867;
    color: #ffffff;
    text-align: center;
    padding-top: 6px;
    border-radius: 16px;

    :hover {
    border: 1px solid #29A867;
    background-color: #ffffff;
    color: #29A867;
    }
`