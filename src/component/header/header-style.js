import styled from 'styled-components'

export const Container = styled.div`
    width: 69.69%;
    margin: auto;
    background-color: #ffffff;

    @media (max-width : 768px) {
        width: 90%;
}
`

export const StyledHeader = styled.div`
    margin: 10px 0;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;    
`

export const Logo = styled.img`
    height: 20px;

    @media (max-width : 768px) {
        height: 16px;
    }
`

export const Nav = styled.nav`
    flex: 1;
    text-align: right;
`

export const Li = styled.li`
    display: inline-block;
    margin-right: 10px;
`

export const A = styled.a`
    font-size: 0.875rem;
    text-decoration: none;
    color: #0C0D36;
    padding: 3px;
    cursor: pointer;

    :hover {
        color: rgba(251, 74, 35, 0.745);
    }

    @media screen and (max-width : 768px) {
        font-size: 0.75rem;
        line-height: 150%;
    }
`