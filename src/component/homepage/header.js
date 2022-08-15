import React from "react"
import { images } from "assets";

const Header = () => {
    console.log("halloooo")
    console.log(images)
    return (
        <div className="container">

            <div className="header">
                <div className="logo">
                    <img src={images["logo.png"]} alt="logo-Eshop"/>
                </div>


                
                <nav>
                    <ul>
                        <li><a className="home" href="login.html">Home</a></li>
                        <li><a className="" href="#products">Products</a></li>
                        <li><a className="" href="login.html">Sign In</a></li>
                        <li><a className="" href="login.html">Sign Up</a></li>
                    </ul>
                </nav>
            </div>

        
            <div className="hero-img">
                <img className="banner" src={images["banner.jpg"]} alt=""/>
            </div>

        </div>

    )
};

export default Header;