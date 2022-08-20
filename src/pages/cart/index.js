import React from "react"
import { 
    Container,
    CartProduct,
    H1,
    ColHeadCart,
    Col,
    H4,
    Pccp,
    StyledImg,
    Input,
    PaymentInformation,
    DataPayment,
    CardDpm,
    H2,
    Pdpm,
    Ptotal } from "./cart-style"; 

import { images } from "assets";

const Cart = () => {
    return (
        <Container>

            <CartProduct>
                <H1>Cart</H1>

                <ColHeadCart>

                    <Col>
                        <H4>Image</H4>
                    </Col>


                    <Col>
                        <H4>Name</H4>
                    </Col>

                    <Col>
                        <H4>Price</H4>
                    </Col>

                    <Col>
                        <H4>Quantity</H4>
                    </Col>

                </ColHeadCart>



                <ColHeadCart>
                    <Col>
                        <StyledImg src={images["cart-green-sofa.png"]}  alt="" />
                    </Col>

                    <Col>
                        <Pccp>Green Sofa</Pccp>
                    </Col>

                    <Col>
                        <Pccp>$400</Pccp>
                    </Col>

                    <Col>
                        <Input type="number" defaultValue="1" min="1" />
                    </Col>

                </ColHeadCart>

                <ColHeadCart>                    
                    <Col>
                        <StyledImg src={images["cart-sneaker.png"]}  alt="" />
                    </Col>

                    <Col>
                        <Pccp>Sneaker</Pccp>
                    </Col>

                    <Col>
                        <Pccp>$400</Pccp>
                    </Col>
                    
                    <Col>
                        <Input type="number" defaultValue="1" min="1" />
                    </Col>
                    
                </ColHeadCart>
            </CartProduct>


            <PaymentInformation>
                <H1>Payment Informations</H1>

                <DataPayment>
                    <CardDpm>
                        <Pdpm>$80</Pdpm>
                        <H2>Tax 10%</H2>
                    </CardDpm>

                    <CardDpm>
                        <Pdpm>$0</Pdpm>
                        <H2>Discount</H2>
                    </CardDpm>

                    <CardDpm>
                        <Ptotal>$880</Ptotal>
                        <H2>Total</H2>
                    </CardDpm>

                    <a href=" ">Checkout</a>


                </DataPayment>

            </PaymentInformation>


        </Container>
    )
};

export default Cart;