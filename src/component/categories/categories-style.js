import styled from "styled-components";

export const StyledCategories = styled.div`
    width: 100%;
    margin: auto;
    margin-bottom: 40px;

    @media (max-width : 768px) {
        width: 90%;
    }
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
`

export const BoxCard = styled.div`
    background-color: F4F4F4;
    width: 134px;
    height: 155px;
    // margin: auto;
    // margin: 30px 0;
    border-radius: 10px;

    @media (max-width : 575px) {
    width: 100.5px;
    height: 116,25px;
    margin: 25px 0;
    }
`

export const CardCategories = styled.div`
    text-align: center;
`
export const CtgImg = styled.img`
    width: 80%;
    vertical-align: middle;
    text-align: center;
    margin: auto;
    padding: 10px 10px 0 10px;
    text-align: center;
    color: rgb(148, 148, 148)
`
export const H6 = styled.h6`
    margin: auto;
    padding: 10px 10px 0 10px;
    text-align: center;
    color: rgb(148, 148, 148)
`

