import React from "react"
import { useProducts } from "hooks/useFetchProduct";
import { 
    Products,
    H2,
    GroupBoxCard,
    BoxCard,
    CardProducts,
    StyledImg,
    H6,
    StyledP } from "./products-style";

import '../../App.css'
import { images } from "assets";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Product = () => {

    // const [products, setProducts] = useState([]);
    const { isLoading, data}  = useProducts()
    console.log('data', data)
    

    return isLoading ? (
        <div style={{width:"40%", marginLeft:"400px"}}>
            <img src={images["loading-slow-net.gif"]} alt=""/>
        </div>
    ) : (
        <React.Fragment>
            

            <Products id="products">
                <H2>Products</H2>

                <GroupBoxCard>

                
                {data.map((product,index) => 
                (<BoxCard key={index}>
                        <Link className="card-prd" to={`/DetailProduct/${product.id}`}>
                            <CardProducts>
                                <StyledImg src={images[product.image]} alt="" />
                            </CardProducts>
                            <H6>{product.name}</H6>
                            <StyledP>${product.price}</StyledP>
                        </Link>
                    </BoxCard>)
                )}
            

                </GroupBoxCard>
            </Products>

            
        </React.Fragment>
    )
};

export default Product;