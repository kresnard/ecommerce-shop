import React from "react";
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
  Ptotal,
  Button,
} from "./cart-style";

import {
  changeQuantity,
  removeProductToCart,
} from "config/redux/cart-product/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { images } from "assets";

const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productOrder);
  const taxAmount = data.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * 0.1 * currentValue.quantity,
    0
  );
  const totalAmount = data.reduce(
    (previousValue, currentValue) =>
      previousValue + taxAmount + currentValue.price * currentValue.quantity,
    0
  );

  const handleChange = (e, item) => {
    item.quantity = Number(e.target.value);
    dispatch(changeQuantity(item));
  };

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

        {data.map((item, index) => (
          <ColHeadCart key={index}>
            <Col>
              <StyledImg src={images[item.image]} alt="" />
            </Col>

            <Col>
              <Pccp>{item.name}</Pccp>
            </Col>

            <Col>
              <Pccp>${item.price}</Pccp>
            </Col>

            <Col>
              <Input
                type="number"
                defaultValue={item.quantity}
                min="1"
                onChange={(e) => handleChange(e, item)}
              />
              <Button onClick={() => dispatch(removeProductToCart(item))}>
                remove
              </Button>
            </Col>
          </ColHeadCart>
        ))}
      </CartProduct>

      <PaymentInformation>
        <H1>Payment Informations</H1>

        <DataPayment>
          <CardDpm>
            <Pdpm>${taxAmount}</Pdpm>
            <H2>Tax 10%</H2>
          </CardDpm>

          {/* <CardDpm>
            <Pdpm>$0</Pdpm>
            <H2>Discount</H2>
          </CardDpm> */}

          <CardDpm>
            <Ptotal>${totalAmount}</Ptotal>
            <H2>Total</H2>
          </CardDpm>

          <Link className="checkout" to="">
            Checkout
          </Link>
        </DataPayment>
      </PaymentInformation>
    </Container>
  );
};

export default Cart;
