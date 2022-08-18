import React from "react"
import { images } from "assets";

import { Link } from "react-router-dom";

const Product = () => {
    return (
        <React.Fragment>
            

            <div id="products" className="products">
                <h2>Products</h2>

                <div className="group-box-card">

                    <div className="box-card">
                        <Link to="/DetailProduct">
                            <div className="card-products">
                                <img src={images["prd-green-sofa.png"]} alt="" />
                            </div>
                            <h6>Green Sofa</h6>
                            <p>$400</p>
                        </Link>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-orange-bogotta.png"]} alt="" />
                            </div>
                            <h6>Orange Bogotta</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-apple-watch.png"]} alt="" />
                            </div>
                            <h6>Apple Watch</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-maketti-powder.png"]}   alt="" />
                            </div>
                            <h6>Maketti Powder</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-glass-plate.png"]}  alt="" />
                            </div>
                            <h6>Glass Plate</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-drone.png"]} alt="" />
                            </div>
                            <h6>Mavick Drone</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-nike.png"]} alt="" />
                            </div>
                            <h6>Nike Black</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src={images["prd-monkey.png"]} alt="" />
                            </div>
                            <h6>Monkey Toys</h6>
                            <p>$400</p>
                        </a>
                    </div>

                </div>
            </div>

            
        </React.Fragment>
    )
};

export default Product;