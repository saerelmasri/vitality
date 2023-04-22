import { View, Text, TextInput, ScrollView, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerStyle } from "./RegisterStyling";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import axios from "axios";


const Register = ({navigation}) => {

    const [ fullName, setFullName ] = useState('')
    const [ nickName, setNickName ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const data = JSON.stringify({
        "nickname": nickName,
        "full_name": fullName,
        "email": email,
        "password": password,
        "phone_number": phoneNumber
    })
    
    const handleSubmition = async () => {
        if(fullName === "" && nickName === "" && phoneNumber === "" && email === "" && password === ""){
            Alert.alert('All fields are required to continue!')
        }else if(password !== confirmPassword){
            Alert.alert('Passwords should match!')
        }else{
            await axios({
                method: 'POST',
                url: 'http://192.168.1.104:5000/auth/register',
                data: data,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                const token = res.data.token
                AsyncStorage.setItem('token', token)
                navigation.navigate('VerifyNumber')
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return(
        <ScrollView style={registerStyle.scrollView}>
            <View style={registerStyle.container}>
                <View style={registerStyle.header}>
                    <Text style={registerStyle.headerTitle}>Create New Account</Text>
                </View>

                <View style={registerStyle.description}>
                    <Text style={registerStyle.descriptionText}>Join the community of fitness and start your journey</Text>
                </View>

                <View style={registerStyle.inputsContainer}>
                    <View style={registerStyle.inputs}>
                        <Text>Full Name</Text>
                        <TextInput 
                            label='Email' 
                            value={fullName} 
                            style={registerStyle.input} 
                            onChangeText={text => setFullName(text)}
                            placeholder="Your full name"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={registerStyle.inputs}>
                        <Text>Nickname</Text>
                        <TextInput 
                            label='Email' 
                            value={nickName} 
                            style={registerStyle.input}
                            onChangeText={text => setNickName(text)}
                            placeholder="Enter your nickname"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={registerStyle.inputs}>
                        <Text>Phone Number</Text>
                        <TextInput 
                            label='Phone Number' 
                            value={phoneNumber} 
                            style={registerStyle.input}
                            onChangeText={text => setPhoneNumber(text)}
                            placeholder="Enter your phone number"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={registerStyle.inputs}>
                        <Text>Email</Text>
                        <TextInput 
                            label='Email' 
                            value={email} 
                            style={registerStyle.input}
                            onChangeText={text => setEmail(text)}
                            placeholder="Enter your email"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={registerStyle.inputs}>
                        <Text>Password</Text>
                        <TextInput 
                            label='Password' 
                            value={password}
                            style={registerStyle.input}
                            onChangeText={text => setPassword(text)}
                            placeholder="Enter your password"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={registerStyle.inputs}>
                        <Text>Confirm Password</Text>
                        <TextInput 
                            label='Password' 
                            value={confirmPassword}
                            style={registerStyle.input}
                            onChangeText={text => setConfirmPassword(text)}
                            placeholder="Enter your password again"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={registerStyle.btnContainer}>
                        <Button action={handleSubmition} title={'Register'}/>
                    </View>
                </View>

                <Text>By clicking register you agree to our <Text style={registerStyle.span}>Term and Conditions</Text></Text>
            </View>
        </ScrollView>
    );
}

export default Register