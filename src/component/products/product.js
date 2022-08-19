import React from "react"
import { 
    Products,
    H2,
    GroupBoxCard,
    BoxCard,
    A,
    CardProducts,
    StyledImg,
    H6,
    StyledP } from "./products-style";

import { images } from "assets";
// import { Link } from "react-router-dom";

const Product = () => {
    return (
        <React.Fragment>
            

            <Products id="products">
                <H2>Products</H2>

                <GroupBoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-green-sofa.png"]} alt="" />
                            </CardProducts>
                            <H6>Green Sofa</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-orange-bogotta.png"]} alt="" />
                            </CardProducts>
                            <H6>Orange Bogotta</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-apple-watch.png"]} alt="" />
                            </CardProducts>
                            <H6>Apple Watch</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-maketti-powder.png"]}   alt="" />
                            </CardProducts>
                            <H6>Maketti Powder</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-glass-plate.png"]}  alt="" />
                            </CardProducts>
                            <H6>Glass Plate</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-drone.png"]} alt="" />
                            </CardProducts>
                            <H6>Mavick Drone</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-nike.png"]} alt="" />
                            </CardProducts>
                            <H6>Nike Black</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                    <BoxCard>
                        <A href="/DetailProduct">
                            <CardProducts>
                                <StyledImg src={images["prd-monkey.png"]} alt="" />
                            </CardProducts>
                            <H6>Monkey Toys</H6>
                            <StyledP>$400</StyledP>
                        </A>
                    </BoxCard>

                </GroupBoxCard>
            </Products>

            
        </React.Fragment>
    )
};

export default Product;