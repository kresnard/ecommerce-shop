const Home = () => {
    return (
        <div className="container">

            <div className="header">
                <div className="logo">
                    <img src="" alt="logo-Eshop"/>
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

        
            <div className="hero-img">
                <img className="banner" src="./asssets/images/home/banner.jpg" alt=""/>
            </div>

            
            <div className="categories">
                <h2>Categories</h2>

                <div className="group-box-card">

                    <div className="box-card">
                        <div className="card-categories">
                            <img className="img-cat" src="/asset/home/home-ctgr/gadget.svg" alt=""/>
                            <h6>Gadget</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/furniture.svg" alt=""/>
                            <h6>Furniture</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/makeup.svg" alt=""/>
                            <h6>Make Up</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/sneaker.svg" alt="" />
                            <h6>Sneaker</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/tools.svg" alt="" />
                            <h6>Tools</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/baby.svg" alt="" />
                            <h6>baby</h6>
                        </div>
                    </div>

                </div>

            </div>

        
            <div id="products" className="products">
                <h2>Products</h2>

                <div className="group-box-card">

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/green-sofa.png" alt="" />
                            </div>
                            <h6>Green Sofa</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/orange-bogotta.png" alt="" />
                            </div>
                            <h6>Orange Bogotta</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/apple-watch.png" alt="" />
                            </div>
                            <h6>Apple Watch</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/maketti-powder.png" alt="" />
                            </div>
                            <h6>Maketti Powder</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/glass-plate.png" alt="" />
                            </div>
                            <h6>Glass Plate</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/drone.png" alt="" />
                            </div>
                            <h6>Mavick Drone</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/nike.png" alt="" />
                            </div>
                            <h6>Nike Black</h6>
                            <p>$400</p>
                        </a>
                    </div>

                    <div className="box-card">
                        <a href="detail-product.html">
                            <div className="card-products">
                                <img src="/asset/home/home-prdct/monkey.png" alt="" />
                            </div>
                            <h6>Monkey Toys</h6>
                            <p>$400</p>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Home;