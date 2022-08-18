import React from "react"
import { images } from "assets";

const Hero = () => {
    return (
        <React.Fragment>
        
            <div className="hero-img">
                <img className="banner" src={images["banner.jpg"]} alt=""/>
            </div>

        </React.Fragment>

    )
};

export default Hero;