import { View, Text, TextInput, Image, Alert, ScrollView } from "react-native";
import { useEffect, useState } from "react"
import { loginStyles } from "./LoginStyle";
import Button from "../../Components/Button/Button";
import LoginProvider, { LoginContext, useLogin } from "../../context/LoginProvider";
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { handleLogin, jwt } = useLogin()

    const login = async() => {
        if(email === '' || password === ''){
            Alert.alert('Please provide all the requirements')
        }else{
            handleLogin(email, password)
        }
    }
    useEffect(() => {
        if(jwt) {
            navigation.navigate('Home');
        }
      }, [jwt, navigation])

    return(
        <LoginProvider>
            <ScrollView>
                <View style={loginStyles.loginScreen}>
                    <Image source={require('../../assets/app-img/login.jpg')} style={loginStyles.loginImg}></Image>
                    <View style={loginStyles.header}>
                        <Text style={loginStyles.txtTile}>Glad To See You!</Text>
                        <Text style={loginStyles.txt}>Please sign in to continue</Text>
                    </View>
                    

                    <View style={loginStyles.inputs}>
                        <Text style={{paddingBottom: 10, fontSize: 18}}>Email</Text>
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
                        <Text style={{paddingBottom: 10, fontSize: 18}}>Password</Text>
                        <TextInput 
                            label='Password' 
                            value={password}
                            style={loginStyles.input} 
                            placeholder="Password"
                            underlineColorAndroid="transparent"
                            onChangeText={text => {setPassword(text)}}

                        />
                    </View>

                    <View style={loginStyles.btnConteiner}>
                        <Button title={'Log In'} action={() => login()}/>
                    </View>
                    
                    <Text style={loginStyles.actions}>Need an account? <Text style={loginStyles.span} onPress={() => navigation.navigate('Register')}>Register</Text></Text>
                    </View>
            </ScrollView>
        </LoginProvider>
    );
}

export default Login