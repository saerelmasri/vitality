import { loginStyles } from "./LoginStyle";
import { View, Text, TextInput, Image } from "react-native";
import Button from "../../Components/Button/Button";
const Login = () => {
    return(
        <View style={loginStyles.loginScreen}>
            <Image source={require('../../assets/app-img/login.jpg')} style={loginStyles.loginImg}></Image>
            <Text style={loginStyles.txtTile}>Glad To See You!</Text>
            <Text style={loginStyles.txt}>Please sign in to continue</Text>

            <View style={loginStyles.inputs}>
                <Text>Email</Text>
                <TextInput label='Email' value="" style={loginStyles.input}/>
            </View>

            <View style={loginStyles.inputs}>
                <Text>Password</Text>
                <TextInput label='Password' value="" style={loginStyles.input} keyboardType="visible-password"/>
            </View>

            <Text style={loginStyles.forgotPassword}>Forgot Password?</Text>

            <Button title={'Log In'} action={() => {console.log('Log in');}}/>
            
            <Text style={loginStyles.actions}>Need an account? <Text style={loginStyles.span} onPress={() => {console.log('Register Screen');}}>Register</Text></Text>
        </View>

);
}

export default Login