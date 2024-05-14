import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { KEY_ACCESS_TOKEN, setItem } from '../../utils/localStorageManager';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();


        const payload = JSON.stringify({
            email,
            password
        })

        const data = await axios.post('http://localhost:4000/api/login', {
            email,
            password
        })

        console.log(data);

        if (data.data.status == "Ok") {
            setItem(KEY_ACCESS_TOKEN, data.data.result.token);
            toast.success(data.data.result.msg)
            navigate('/')
        } else if(data.data.message == 'All fields are required'){
            
            toast.error(data.data.message)
        }else{
            toast.error("Invalid credentials");
            <Navigate to='/login' />
        }
    }

    return (
        <>
            <div className='outer-box'>
                <div className='inner-box'>

                    <header className='login-header'>
                        <h1>Login</h1>
                        <p>It Just takes 30 seconds</p>
                    </header>

                    <main className='login-body'>
                        <form action='#'>
                            <p>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' placeholder='Enter Your email' onChange={(e) => setEmail(e.target.value)} />
                            </p>
                            <p>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' placeholder='Enter Your password' onChange={(e) => setPassword(e.target.value)} />
                            </p>
                            <p>
                                <input type='submit' id='submit' value="Login" onClick={handleLogin} />
                            </p>
                            <h4 className='separater'>
                                ....................................Or...........................
                            </h4>
                        </form>
                        <div className='google-outh'>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    var credResponseDecode = jwtDecode(credentialResponse.credential)
                                    console.log(credResponseDecode);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </main>

                    <footer className='login-footer'>
                        <p>Create a New Account ? <Link to='/signup'>Signup</Link></p>
                    </footer>



                </div>
                <div className='circle c2'></div>
                <div className='circle c2'></div>

            </div>
        </>
    )
}

export default Login;