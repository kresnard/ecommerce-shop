import React, { useState, useEffect } from 'react';

const Register = () => {
    return (
        <div className="container">

            <div className="signup">
                <h1>Sign Up</h1>
                <form action="" method="">
                    <p>Nama</p>
                    <input type="text" name="name" placeholder="Input your name"/><br/>
                    <p>Email</p>
                    <input type="text" name="email" placeholder="Input your email"/><br/>
                    <p>Password</p>
                    <input type="password" name="pass" placeholder="Input your password"/><br/>
                    <button>Sign Up</button>
                </form>
            </div>

    </div>
    )
    
};
export default Register;