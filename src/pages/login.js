import React from "react"


const Login = () => {
    return (
        <div className="container">
            
            <div className="login">
                <h1>Sign In</h1>
                <form action="" method="">
                    <p>Email</p>
                    <input type="text" name="email" placeholder="Input your email"/><br/>
                    <p>Password</p>
                    <input type="password" name="pass" placeholder="Input your password"/><br/>
                    <button>Sign In</button>
                </form>
                
            </div>

        </div>
    )  
};

export default Login;