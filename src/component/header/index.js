import React from "react"
import { auth, logout } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import { 
    Container,
    StyledHeader,
    Logo,
    Nav,
    Li,
    A } from "../../component/header/header-style";

import { Link as Scroll } from "react-scroll";
import { images } from "assets";

const Index = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    return (
        <Container>

            <StyledHeader>
                <Logo src={images["logo.png"]} alt="logo-Eshop" />
                
                <Nav>
                    <ul>
                        <Li className="home"><A  href="/">Home</A></Li>
                        { location.pathname !== '/' ? 
                        <Li>
                            <A href="/" >Product</A>
                        </Li>                        
                        :
                        <Li>
                            <Scroll to="products" style={{cursor:"pointer"}} spy={true} smooth={true} offset={0} duration={500}><A>Product</A></Scroll>
                        </Li>  
                        }
                        {
                            user ?  <Li><A href="/Cart">Cart</A></Li> : ''
                        }                       
                        {
                            user ? '' : <Li><A href="/sign-in">Sign In</A></Li>
                        }
                        {
                            user ? ( <Li><A href="" ><span onClick={logout}>Log Out</span></A></Li> ) : '' 
                        }
                        {
                            user ? '' : <Li><A href="/sign-up">Sign Up</A></Li>
                        }                      
                    </ul>
                </Nav>
            </StyledHeader>

        </Container>

    )
};

export default Index;