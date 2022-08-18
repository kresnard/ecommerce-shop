import React from "react"
import { auth, logOut } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { images } from "assets";

const Header = () => {
    const user = useAuthState(auth);

    return (
        <div className="container">

            <div className="header">
                <div className="logo">
                    <img src={images["logo.png"]} alt="logo-Eshop"/>
                </div>
                
                <nav>
                    <ul>
                        <li className="home"><Link to ="/">Home</Link></li>
                        <li>
                            <Scroll to="products" spy={true} smooth={true} offset={250} duration={500}>Product</Scroll>
                        </li>
                        {
                            user ? <li><Link to="/Cart">Cart</Link></li> : <li><Link to="/sign-in">Sign In</Link></li> 
                        }
                        {
                            user ? <li><Link to="" onClick={logOut}>Log Out</Link></li> : <li><Link to="/sign-in">Sign In</Link></li> 
                        }
                        {
                            user ? "": <li><Link to="/sign-up">Sign Up</Link></li>
                        }                      
                    </ul>
                </nav>
            </div>

        </div>

    )
};

export default Header;