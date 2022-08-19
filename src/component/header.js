import React from "react"
import { auth, logout } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import { 
    Container,
    StyledHeader,
    Logo,
    Nav,
    Li,
    A } from "./header-style";

import { Link as Scroll } from "react-scroll";
import { images } from "assets";

const Header = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);

    return (
        <Container>

            <StyledHeader>
                <Logo src={images["logo.png"]} alt="logo-Eshop" />
                
                <Nav>
                    <ul>
                        <Li className="home"><A to ="/">Home</A></Li>
                        { location.pathname !== '/' ? 
                        <Li>
                            <A to="/" >Product</A>
                        </Li>                        
                        :
                        <Li>
                            <Scroll to="products" style={{cursor:"pointer"}} spy={true} smooth={true} offset={250} duration={500}><A>Product</A></Scroll>
                        </Li>  
                        }
                        {
                            user ?  <Li><A to="/Cart">Cart</A></Li> : ''
                        }                       
                        {
                            user ? '' : <Li><A to="/sign-in">Sign In</A></Li>
                        }
                        {
                            user ? ( <Li><A to="" ><span onClick={logout}>Log Out</span></A></Li> ) : '' 
                        }
                        {
                            user ? '' : <Li><A to="/sign-up">Sign Up</A></Li>
                        }                      
                    </ul>
                </Nav>
            </StyledHeader>

        </Container>

    )
};

export default Header;