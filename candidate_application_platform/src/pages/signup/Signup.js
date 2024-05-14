import React from 'react';
import './Signup.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('')

    const navigate = useNavigate()

    const handleSignup = async(e) =>{

        e.preventDefault();

        try {
            
            const data = await axios.post('http://localhost:4000/api/signup',{
                name,
                email,
                password
            })

           if(data.data.status == "Ok"){
            console.log(data);
            toast.success(data.data.result.msg);
            navigate('/login')
           }else{
            toast.error(data.data.message)
           }


        } catch (error) {
            console.log('Error Occured from signup API ',error);
        }
    }

    return (
        <>
            <div className='outer-box'>
                <div className='inner-box'>

                    <header className='signup-header'>
                        <h1>Signup</h1>
                        <p>It Just takes 30 seconds</p>
                    </header>

                    <main className='signup-body'>
                        <form action='#'>
                            <p>
                                <label htmlFor='fullname'>Full Name</label>
                                <input type='text' id='fullname' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
                            </p>
                            <p>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' placeholder='Enter Your email' onChange={(e)=>setEmail(e.target.value)}/>
                            </p>
                            <p>
                                <label htmlFor='password'>Password</label>
                                <input type='password' id='password' placeholder='Enter Your password' onChange={(e)=>setPassword(e.target.value)}/>
                            </p>
                            <p>
                                <input type='submit' id='submit' value="Signup" onClick={handleSignup}/>
                            </p>
                        </form>
                    </main>

                    <footer className='signup-footer'>
                        <p>Already have an account ? <Link to='/login'>Login</Link></p>
                    </footer>



                </div>
                <div className='circle c2'></div>
                <div className='circle c2'></div>

            </div>
        </>
    )
}

export default Signup;