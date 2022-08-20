import React, { useState, useEffect } from "react";
import { auth, logInWithEmailAndPassword } from "config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleLogin = async (e, param) => {
        e.preventDefault()
        if (param === "login") {
            await logInWithEmailAndPassword(login.email, login.password);
        }
    }

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate('/');
        if (error) alert(error);
    }, [loading, user,error,navigate]);

    return (
        <div className="container">
            
            <div className="login">
                <h1>Sign In</h1>
                <form action="" method="">
                    <p>Email</p>
                    <input
                    type="text"
                    name="email"
                    placeholder="Input your email"
                    value={login.email}
                    onChange={ ((e) => 
                        setLogin({
                            ...login,
                            email: e.target.value,
                        })
                    )}
                    /><br/>
                    <p>Password</p>
                    <input
                    type="password"
                    name="pass"
                    placeholder="Input your password"
                    value={login.password}
                    onChange={ ((e) => 
                        setLogin({
                            ...login,
                            password: e.target.value,
                        })
                    )}
                    /><br/>
                    <button onClick={(e) => handleLogin(e,"login")}>Sign In</button>
                </form>
                
            </div>

        </div>
    )  
};

export default Login;