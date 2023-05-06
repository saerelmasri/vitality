import './DashboardStyle.css'
import { useEffect, useState } from 'react'
import Toastify from 'toastify-js';
import axios from 'axios';

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const [ name, setName ] = useState([])
    

    useEffect(()=> {
        const fetchUser = async() => {
            await axios({
                method: 'GET',
                url: `http://192.168.1.104:5000/coach/getCoachesInfo`,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            }).then(res => {
                setName(res.data.message[0])
            }).catch(err => {
                alertFail(err.response.data);
            });
        }

        fetchUser()
    }, [])

    const handle_logout = () => {
        localStorage.clear();
        window.location.href="http://localhost:3000/home"; 
    }


    return (
        <div className="container">
            <div className='loginContainer'>
                <h1>Hello, {name['full_name']}</h1>
                <div className='imageContainer'>
                    <div className='image'>
                       <img src={name['photo_url']} className='img'/>
                    </div>
                </div>
                <h1>{name['email']}</h1>
                <p style={{fontSize:20, cursor: 'pointer' }}>Change Profile Pic</p>
                <p style={{fontSize:20, cursor: 'pointer', fontWeight: 500 }} onClick={() => {handle_logout()}}>Log Out</p>
                

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

export default Dashboard