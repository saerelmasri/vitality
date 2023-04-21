import { View, Text, TextInput } from "react-native";
import { registerStyle } from "./RegisterStyling";
import Button from "../../Components/Button/Button";
import { useState } from "react";


const Register = () => {

    const [ fullName, setFullName ] = useState('')
    const [ nickName, setNickName ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const data = {
        fullname: fullName,
    }

    console.log(fullName);

    return(
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
                    <Button action={() => {console.log('hello');}} title={'Register'}/>
                </View>
            </View>

            <Text>By clicking register you agree to our <Text style={registerStyle.span}>Term and Conditions</Text></Text>
        </View>
    );
}

export default Register