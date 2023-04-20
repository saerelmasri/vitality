import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
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

const loginStyles = StyleSheet.create({
    loginScreen: {
      backgroundColor: Color.grey,
      display: "flex",
      flex: 1,
      alignItems: 'center',
      height: 932,
      overflow: "hidden",
      width: "100%",
    },
    loginImg: {
        width: '100%',
        height: '30%',
    },  
    txtTile: {
        fontSize: 30,
        fontWeight: 600,
        height: 36,
        marginTop: 40,
        marginRight: 100 
    },
    txt: {
        fontSize: 20,
        fontWeight: 400,
        height: 36,
        marginRight: 100 
    },
    inputs:{
        width: 310,
        height: 100, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
    },
    forgotPassword:{
        fontSize: 15,
        fontWeight: 500,
        height: 18,
        marginRight: 200,
        marginTop: 10,
        marginBottom: 10
    },
    actions: {
        fontSize: 15,
        marginRight: 150,
        marginBottom: 10
    },
    span: {
        fontSize: 15,
        fontWeight: 600
    },
});


export default Login