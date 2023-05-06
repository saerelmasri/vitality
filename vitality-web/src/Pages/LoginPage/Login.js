import './LoginStyle.css'
import Button from '../../Components/Button'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import Toastify from 'toastify-js';
import axios from 'axios';

const Login = () => {
    const navigator = useNavigate();
    const [ email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')

    const data = JSON.stringify({
        "email": email,
        "password": password
    })

    const handle_register = () => {
        navigator('/register');
    }

    const handle_submit = () => {
        if(email === "" && password === ""){
            alertFail('All fields are required');
        }else{
            axios({
                method: 'POST',
                url: `http://192.168.1.104:5000/coach/login`,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(res => {
                console.log(res.data);
                localStorage.setItem('token',res.data.token);
                window.location.href="http://localhost:3000/dashboard";
            }).catch(err => {
                alertFail(err.response);
            });
        }
        
    }

    return (
        <div className="container">
            <div className='loginContainer'>
                <div className='logoContainer'></div>
                <h1>Hello Coach!</h1>
                <div className='input'>
                    <h4>Email</h4>
                    <input type='email' className='inputText'
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                    placeholder={"Your Email"}
                />
                    
                </div>
                <div className='input'>
                    <h4>Password</h4>
                    <input 
                        type='password' 
                        className='inputText'
                        onChange={(e) => {setPassword(e.target.value)}}
                        value={password}
                        placeholder={"Password"}
                    />
                </div>
                <div className='no-account' onClick={() => handle_register()}>
                    <p>You don't have an account? Join us today coach!</p>
                </div>
                <div className='btnContainer'>
                    <Button title={'Login'} action={() => handle_submit()}/>
                </div>
            </div>

        </div>
    )
}
const alertFail = (message) => {
    Toastify({
        text: message,
        duration: 3000,
        close: false,
        style: {
          background: "red",
          color: 'white',
          textAlign: 'center'
        },
        onClick: function(){}
      }).showToast();
}

export default Login