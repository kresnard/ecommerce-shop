import React from "react"
import { 
    Container,
    StyledDetailProduct,
    ColDetailProduct,
    Col1,
    ImgProdDetail,
    StyledImg,
    Col2,
    H1,
    PQuote,
    H4,
    PExp,
    A } from "./detailProduct-style";

import { images } from "assets";
import { auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const DetailProduct = () => {
    const [user] = useAuthState(auth);

    return (
        <Container>

                <StyledDetailProduct>
                    <ColDetailProduct>

                        <Col1>      
                            <ImgProdDetail>
                                <StyledImg src={images["dp-green-sofa.png"]}  alt="" />
                            </ImgProdDetail>
                        </Col1>

                        <Col2>
                            <H1>Green Sofa</H1>
                            <PQuote>by Kresna Rangga</PQuote>
                            <H4>$400</H4>
                            <PExp>Sofas are one of the most popular items on the market today.
                                But, did you know that most of them are not that green?
                                In reality, the majority of sofas sold are actually made of petroleum-based materials.
                                That's because sofas are made of rigid plastic foam.
                                Foam is not an environmentally friendly material, but it's cheap.</PExp>
                            <A href={user ? "/Cart" : "/sign-in"} >Add to Cart</A>
                        </Col2>

                    </ColDetailProduct>
                </StyledDetailProduct>
        </Container>
    )
};

export default DetailProduct;