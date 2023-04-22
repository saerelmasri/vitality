import { View, Text, TextInput, Image, Pressable, Alert } from "react-native";
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyNumberStyling } from "./verifyNumberStylings";
import Button from "../../Components/Button/Button";
import axios from "axios";

var JWT = ''

const VerifyNumber = ({navigation}) => {
    const [ phone, setPhone ] = useState('')

    useEffect(() => {
        AsyncStorage.getItem('token')
            .then(token => {
                JWT = token
                return axios({
                    method: 'GET',
                    url: 'http://192.168.1.104:5000/auth/getUserInfobyToken',
                    headers: {
                        'Authorization': JWT
                    }
                })
            })
            .then(res => {
                const userPhone = res.data.response[0].phone_number
                setPhone(userPhone)
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return(
        <View style={verifyNumberStyling.mainContainer}>
            <View style={verifyNumberStyling.container}>
                <View style={verifyNumberStyling.headerContainer}>
                    <Text style={verifyNumberStyling.headerText}>We need to verify your phone number</Text>
                </View>
                <View style={verifyNumberStyling.descriptionContainer}>
                    <Text style={verifyNumberStyling.descriptionText}>We sent you a SMS with a code to number <Text style={verifyNumberStyling.span}>{phone}</Text></Text>
                </View>

                <View style={verifyNumberStyling.codeContainer}>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                </View>

                <View style={verifyNumberStyling.expiredContainer}>
                    <Text style={verifyNumberStyling.expiredText}>Code expired in <Text style={verifyNumberStyling.span}>5:00 minutes</Text></Text>
                </View>

                <Button action={() => {}} title={'Verify Number'}/>
            </View>
        </View>
    );
}

export default VerifyNumber
