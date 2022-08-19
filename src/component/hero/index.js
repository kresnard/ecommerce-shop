import React from "react"
import { 
    StyledHero,
    Banner } from "./hero-style";

import { images } from "assets";

const Hero = () => {
    return (
        <React.Fragment>

            <StyledHero>
                <Banner src={images["banner.jpg"]} alt=""/>
            </StyledHero>

        </React.Fragment>

    )
};

export default Hero;