import React from "react"
import { Link } from "react-router-dom";

import { images } from "assets";

const DetailProduct = () => {
    return (
        <div className="container">

                <div className="detail-product">
                    <div className="col-detail-product">

                        <div className="col-1">      
                            <div className="img-product-detail">
                                <img src={images["dp-green-sofa.png"]}  alt="" />
                            </div>
                        </div>

                        <div className="col-2">
                            <h1>Green Sofa</h1>
                            <p className="quote">by Kresna Rangga</p>
                            <h4>$400</h4>
                            <p>Sofas are one of the most popular items on the market today.
                                But, did you know that most of them are not that green?
                                In reality, the majority of sofas sold are actually made of petroleum-based materials.
                                That's because sofas are made of rigid plastic foam.
                                Foam is not an environmentally friendly material, but it's cheap.</p>
                            <Link to="/Cart" className="add-to-cart" href="cart-product.html">Add to Cart</Link>
                        </div>

                    </div>
                </div>
        </div>
    )
};

export default DetailProduct;