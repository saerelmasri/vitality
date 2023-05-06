import './ExtraInfoStyle.css'
import Button from '../../Components/Button'
import { useState } from 'react'
import Toastify from 'toastify-js';
import axios from 'axios';

const ExtraInfo = () => {
    const token = localStorage.getItem('token');
    const [ type, setType ] = useState('')
    const [ experience, setExperience ] = useState('')
    const [gym, setGym ] = useState('')
    const [description, setDescription ] = useState('')

    const data = JSON.stringify({
        "coach_type": type,
        "coach_experience": experience,
        "gym": gym,
        "description": description
    })

    const handle_submit = () => {
        if(type === "" || experience === '' || gym === "" || description === ""){
            alertFail('All fields are required');
        }else{
            axios({
                method: 'POST',
                url: `http://192.168.1.104:5000/coach/add_coach_extra_info`,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                data: data
            }).then(res => {
                window.location.href="http://localhost:3000/dashboard";
            }).catch(err => {
                alertFail(err.response);
            });
        }
        
    }

    return (
        <div className="container">
            <div className='loginContainer'>
                <h1>We need a bit more info</h1>
                <h2>Please provide the following</h2>
                <div className='input'>
                    <h4>Coach Type</h4>
                    <input type='text' className='inputText'
                    onChange={(e) => {setType(e.target.value)}}
                    value={type}
                    placeholder={"ex. Bodybuilder"}
                    />
                </div>
                <div className='input'>
                    <h4>Coach Experience</h4>
                    <input type='text' className='inputText'
                    onChange={(e) => {setExperience(e.target.value)}}
                    value={experience}
                    placeholder={"ex. 2 years"}
                    />
                </div>
                <div className='input'>
                    <h4>Gym</h4>
                    <input 
                        type='text' 
                        className='inputText'
                        onChange={(e) => {setGym(e.target.value)}}
                        value={gym}
                        placeholder={"ex. GoodLife Fitness"}
                    />
                </div>
                <div className='inputDescription'>
                    <h4>Description</h4>
                    <input 
                        type='text' 
                        className='inputTextDescription'
                        onChange={(e) => {setDescription(e.target.value)}}
                        value={description}
                        placeholder={"Tell us a bit about yourself"}
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

export default ExtraInfo