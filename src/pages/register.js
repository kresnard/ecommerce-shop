import React, { useState, useEffect } from 'react';
import { auth, registerWithEmailAndPassword } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = async (e, params) => {
        e.preventDefault()
        if (params === 'register'){
            await registerWithEmailAndPassword(
                register.name,
                register.email,
                register.password
            );
            alert('Registration success!');
        }
    };
    
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate('/')
        if (error) alert(error);
    }, [loading, user, navigate, error]);

    return (
        <div className="container">

            <div className="signup">
                <h1>Sign Up</h1>
                <form action="" method="">
                    <p>Nama</p>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Input your name"
                    value={register.name}
                    onChange={(e) => setRegister({...register, name:e.target.value})}
                    /><br/>
                    <p>Email</p>
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Input your email"
                    value={register.email}
                    onChange={(e) => setRegister({...register, email:e.target.value})}
                    /><br/>
                    <p>Password</p>
                    <input 
                    type="password" 
                    name="pass" 
                    placeholder="Input your password"
                    value={register.password}
                    onChange={(e) => setRegister({...register, password:e.target.value})}
                    /><br/>
                    <button onClick={e => handleSubmit(e, 'register')}>Sign Up</button>
                </form>
            </div>

    </div>
    )
    
};
export default Register;