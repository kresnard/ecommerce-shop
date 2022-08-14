const Register = () => {
    return (
        <div className="container">

        <div className="header">
            <div className="logo">
                <img src="/asset/logo.png" alt="logo-Eshop"/>
            </div>
            <nav>
                <ul>
                    <li><a className="" href="index.html">Home</a></li>
                </ul>
            </nav>
        </div>

        <div className="login">
            <h1>Sign Up</h1>
            <form action="" method="">
                <p>Nama</p>
                <input type="text" name="name" placeholder="Input your name"/><br/>
                <p>Email</p>
                <input type="text" name="email" placeholder="Input your email"/><br/>
                <p>Password</p>
                <input type="password" name="pass" placeholder="Input your password"/><br/>
            </form>
            <a className="login" href="login.html">Sign Up</a>
        </div>

    </div>
    )
    
};
export default Register;