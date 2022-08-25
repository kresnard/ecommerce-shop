import React, { useEffect } from "react";
import { useDetailProduct } from "hooks/useFetchProduct";
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
  IsLoading,
} from "./detailProduct-style";

import { Link, useNavigate, useParams } from "react-router-dom";
import { images } from "assets";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { addProductToCart } from "config/redux/cart-product/action";

const DetailProduct = () => {
  const [user] = useAuthState(auth);
  const [isLoading, data, getProductDetail] = useDetailProduct();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = 1;

  const handleCart = () => {
    if (!user) {
      swal(
        "User Not Found",
        "User not identified, sign-in first please!",
        "error"
      );
      navigate("/sign-in");
    } else {
      const { id, name, by, price, desc, image } = data;
      const dataProduct = { id, name, by, price, desc, image, quantity };
      dispatch(addProductToCart(dataProduct));
      swal("Succes!", "Your product added to cart!", "success");
    }
  };

  useEffect(() => {
    getProductDetail(id);
  }, []);

  return isLoading ? (
    <Container>
      <IsLoading>
        <img src={images["loading-slow-net.gif"]} alt="" />
      </IsLoading>
    </Container>
  ) : (
    <Container>
      <StyledDetailProduct>
        <ColDetailProduct>
          <Col1>
            <ImgProdDetail>
              <StyledImg src={images[data.image]} alt="" />
            </ImgProdDetail>
          </Col1>

          <Col2>
            <H1>{data.name}</H1>
            <PQuote>{data.by}</PQuote>
            <H4>${data.price}</H4>
            <PExp>{data.desc}</PExp>
            <Link
              className="add-to-cart"
              to={user ? "/Cart" : "/sign-in"}
              onClick={handleCart}
            >
              Add to Cart
            </Link>
          </Col2>
        </ColDetailProduct>
      </StyledDetailProduct>
    </Container>
  );
};

export default DetailProduct;
