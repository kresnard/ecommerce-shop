const Header = () => {
    return (
        <div className="container">

            <div className="header">
                <div className="logo">
                    <img src="" alt="logo-Eshop"/>
                </div>


                
                <nav>
                    <ul>
                        <li><a classNameName="home" href="login.html">Home</a></li>
                        <li><a className="" href="#products">Products</a></li>
                        <li><a className="" href="login.html">Sign In</a></li>
                        <li><a className="" href="login.html">Sign Up</a></li>
                    </ul>
                </nav>
            </div>

        
            <div className="hero-img">
                <img className="banner" src="./asssets/images/home/banner.jpg" alt=""/>
            </div>

        </div>

    )
};

export default Header;