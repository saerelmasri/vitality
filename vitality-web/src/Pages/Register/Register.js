import './RegisterStyle.css'
import Button from '../../Components/Button'
import { useState } from 'react'
import Toastify from 'toastify-js';
import axios from 'axios';

const Register = () => {
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [confirmPassword, setConfirmPassword ] = useState('')

    const data = JSON.stringify({
        "full_name": fullName,
        "email": email,
        "password": password
    })

    const handle_submit = () => {
        if(confirmPassword !== password){
            alertFail('Password does not match');
        }else if(fullName === "" || email === '' || password === "" || confirmPassword === ""){
            alertFail('All fields are required')
        }else{
            axios({
                method: 'POST',
                url: `http://192.168.1.104:5000/coach/register`,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data: data
            }).then(res => {
                console.log(res.data);
                localStorage.setItem('token',res.data.token);
                window.location.href="http://localhost:3000/extra_info";
            }).catch(err => {
                alertFail(err.response);
            });
        }
        
    }

    return (
        <div className="container">
            <div className='loginContainer'>
                <h1>Welcome coach!</h1>
                <h2>Let's create you an account</h2>
                <div className='input'>
                    <h4>Full Name</h4>
                    <input type='text' className='inputText'
                    onChange={(e) => {setFullName(e.target.value)}}
                    value={fullName}
                    placeholder={"Your Email"}
                    />
                </div>
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
                <div className='input'>
                    <h4>Confirm Password</h4>
                    <input 
                        type='password' 
                        className='inputText'
                        onChange={(e) => {setConfirmPassword(e.target.value)}}
                        value={confirmPassword}
                        placeholder={"Password"}
                    />
                </div>
                
                <div className='btnContainer'>
                    <Button title={'Register'} action={() => handle_submit()}/>
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

export default Register