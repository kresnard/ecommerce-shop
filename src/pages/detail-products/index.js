import React, { useEffect } from "react"
import { useDetailProduct } from 'hooks/useFetchProduct'
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
    PExp } from "./detailProduct-style";

import { Link, useParams } from "react-router-dom";
import { images } from "assets";
import { auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const DetailProduct = () => {
    const [user] = useAuthState(auth);

    const [isLoading, data, getProductDetail ] = useDetailProduct()
    // console.log('data', data)

    const {id} = useParams()
    // console.log("id",id)

    useEffect(() => {
        getProductDetail(id)
        // console.log('data', data)
    },[]);

    return isLoading ? 
        ( <Container>
            <div style={{width:"40%", marginLeft:"400px", marginTop:"150px"}}>
            <img src={images["loading-slow-net.gif"]} alt=""/>
        </div>
        </Container>
        ): (
        <Container>
                <StyledDetailProduct>
                
                        <ColDetailProduct >

                        <Col1>      
                            <ImgProdDetail>
                                <StyledImg src={images[data.image]}  alt="" />
                            </ImgProdDetail>
                        </Col1>

                        <Col2>
                            <H1>{data.name}</H1>
                            <PQuote>{data.by}</PQuote>
                            <H4>${data.price}</H4>
                            <PExp>{data.desc}</PExp>
                            <Link className="add-to-cart" to={user ? "/Cart" : "/sign-in"} >Add to Cart</Link>
                        </Col2>

                    </ColDetailProduct>
        
                </StyledDetailProduct>
        </Container>
    )
};

export default DetailProduct;