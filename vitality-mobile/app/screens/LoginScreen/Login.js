import { View, Text, TextInput, Image, Alert, ScrollView } from "react-native";
import { useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginStyles } from "./LoginStyle";
import Button from "../../Components/Button/Button";

const Login = ({navigation}) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    console.log(password);

    const data = JSON.stringify({
        "email": email,
        "password": password
    })
    const login = async() => {
        if(email === '' || password === ''){
            Alert.alert('Please provide all the requirements')
        }else{
            await axios({
                method: 'POST',
                url: 'http://192.168.1.104:5000/auth/login',
                data: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.data.status == 200){
                    AsyncStorage.setItem('token', res.data.token)
                    navigation.navigate('Home')
                }
            }).catch((err) => {
                console.log(err.response.data);
            })
        }
    }

    return(
        <ScrollView>
            <View style={loginStyles.loginScreen}>
                <Image source={require('../../assets/app-img/login.jpg')} style={loginStyles.loginImg}></Image>
                <Text style={loginStyles.txtTile}>Glad To See You!</Text>
                <Text style={loginStyles.txt}>Please sign in to continue</Text>

                <View style={loginStyles.inputs}>
                    <Text>Email</Text>
                    <TextInput 
                        label='Email' 
                        value={email}
                        style={loginStyles.input}
                        onChangeText={text => {setEmail(text)}}
                        placeholder="Email"
                        underlineColorAndroid="transparent"
                        autoCapitalize='none'
                    />
                </View>

                <View style={loginStyles.inputs}>
                    <Text>Password</Text>
                    <TextInput 
                        label='Password' 
                        value={password}
                        style={loginStyles.input} 
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        onChangeText={text => {setPassword(text)}}

                    />
                </View>

                <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>

                <Button title={'Log In'} action={login}/>
                
                <Text style={loginStyles.actions}>Need an account? <Text style={loginStyles.span} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
                </View>
        </ScrollView>

    );
}

export default Login