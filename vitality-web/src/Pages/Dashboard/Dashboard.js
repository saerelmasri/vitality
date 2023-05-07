import './DashboardStyle.css';
import { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import axios from 'axios';

const Dashboard = () => {
    const token = localStorage.getItem('token');
    const [ name, setName ] = useState([]);
    const [ file, setFile ] = useState(null);
    const [ imageUrl, setImageUrl ] = useState(null);

    const handleImage = (e) =>{
        setFile(e.target.files[0]);
    }

    console.log(file);
    const uploadImage = async() => {
        if (file) {
            const formData = new FormData();
            formData.append("image", file);
            await axios({
                method: 'POST',
                url: `http://192.168.1.104:5000/coach/addProfilePhoto`,
                headers: { 
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': token
                },
                data: formData
            }).then(res => {
                console.log(res.data);
                setImageUrl(res.data.photo_url);
                setName(prevState => ({...prevState, photo_url: res.data.photo_url}));
            }).catch(err => {
                alertFail(err.response.data);
            });
        }
    }

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
                        {imageUrl ? (
                            <img src={imageUrl} className='img'/>
                        ) : (
                            <img src={name['photo_url']} className='img'/>
                        )}
                    </div>
                </div>
                <h1>{name['email']}</h1>
                <input type="file" onChange={handleImage} />
                <p style={{fontSize:20, cursor: 'pointer' }} onClick={() => uploadImage()}>Change Profile Pic</p>
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

export default Dashboard;
