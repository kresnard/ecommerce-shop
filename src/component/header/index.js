import React from "react"
import { auth, logout } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from "react-router-dom";
import { 
    Container,
    StyledHeader,
    Logo,
    Nav,
    Li} from "../../component/header/header-style";

import { animateScroll, Link as Scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { images } from "assets";
import '../../App.css'

const Index = () => {
    const location = useLocation();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const scrollToProducts = () => {
        if ( location.pathname !== '/' ) {
            navigate("/");
            animateScroll.scrollTo(1000);
        }
    }
    return (
        <Container>

            <StyledHeader>
                <Logo src={images["logo.png"]} alt="logo-Eshop" />
                
                <Nav>
                    <ul>
                        <Li className="home"><Link className="navbar" to="/">Home</Link></Li>                        
                        <Li>
                            <Scroll className="navbar" to="products" style={{cursor:"pointer"}} spy={true} smooth={true} offset={0} duration={500} onClick={scrollToProducts}>Product</Scroll>
                        </Li>                          
                        {
                            user ?  <Li><Link className="navbar" to="/Cart">Cart</Link></Li> : ''
                        }                       
                        {
                            user ? '' : <Li><Link className="navbar" to="/sign-in">Sign In</Link></Li>
                        }
                        {
                            user ? ( <Li><Link className="navbar" to="" ><span onClick={logout}>Log Out</span></Link></Li> ) : '' 
                        }
                        {
                            user ? '' : <Li><Link className="nav-signup" to="/sign-up">Sign Up</Link></Li>
                        }                      
                    </ul>
                </Nav>
            </StyledHeader>

        </Container>

    )
};

export default Index;