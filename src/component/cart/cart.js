import React from "react"
import { images } from "assets";

const Cart = () => {
    return (
        <div className="container">


            <div className="header">
                <div className="logo">
                    <img src={images["logo.png"]} alt="logo-Eshop"/>
                </div>

                <nav>
                    <ul>
                        <li><a className="home" href="login.html">Home</a></li>
                        <li><a className="" href="#products">Products</a></li>
                        <li><a className="" href="login.html">Sign In</a></li>
                        <li><a className="" href="login.html">Sign Up</a></li>
                    </ul>
                </nav>
            </div>


            <div className="cart-product">
                <h1>Cart</h1>

                <div className="col-head-cart">

                    <div className="col-1">
                        <h4>Image</h4>
                    </div>


                    <div className="col-2">
                        <h4>Name</h4>
                    </div>

                    <div className="col-3">
                        <h4>Price</h4>
                    </div>

                    <div className="col-4">
                        <h4>Quantity</h4>
                    </div>

                </div>



                <div className="col-content-cart">
                    <div className="col-1">
                        <img src={images["cart-green-sofa.png"]}  alt="" />
                    </div>

                    <div className="col-2">
                        <p>Green Sofa</p>
                    </div>

                    <div className="col-3">
                        <p>$400</p>
                    </div>

                    <div className="col-4">
                        <input type="number" defaultValue="1" min="1" />
                    </div>
                </div>

                <div className="col-content-cart">                    
                    <div className="col-1">
                        <img src={images["cart-sneaker.png"]}  alt="" />
                    </div>

                    <div className="col-2">
                        <p>Sneaker</p>
                    </div>

                    <div className="col-3">
                        <p>$400</p>
                    </div>
                    <div className="col-4">
                        <input type="number" defaultValue="1" min="1" />
                    </div>
                    
                </div>
            </div>


            <div className="payment-informations">
                <h1>Payment Informations</h1>

                <div className="data-payments">
                    <div className="card-dpm tax">
                        <p>$80</p>
                        <h2>Tax 10%</h2>
                    </div>

                    <div className="card-dpm discount">
                        <p>$0</p>
                        <h2>Discount</h2>
                    </div>

                    <div className="card-dpm total">
                        <p>$880</p>
                        <h2>Total</h2>
                    </div>

                    <a href="cart.html">Checkout</a>


                </div>

            </div>


        </div>
    )
};

export default Cart;