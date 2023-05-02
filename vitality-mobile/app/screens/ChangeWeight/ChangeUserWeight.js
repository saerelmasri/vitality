import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwNTkyODUsImV4cCI6MTY4MzA2Mjg4NX0.Hgfhz-YXAyn0R5RaS2PfSStr1ljmfBWwKU8u0y-1Csk"
import { statsStyling } from "./ChangeUserWeightStyle";
import Indicator from "../../Components/ActivityIndicator/indicator";

const ChangeUserWeight = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const [ newValue, setNewValue ] = useState('')
    const [ weight, setWeight ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false) 

    useEffect(()=> {
        const fetchWeight = async() => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/user_route/user_extra_info',
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setWeight(res.data.message[0]['weight']);
            }).catch(err => {
                console.log(err);
            })
        }

        fetchWeight()
    },[])

    const handleTextIput = async(param) => {
        if(newValue === " "){
            Alert.alert('Nothing to update')
        }else{
            await axios({
                method: 'PUT',
                url: 'http://192.168.1.104:5000/user_route/update_profile_extra_info',
                data: {
                    "column_name": "weight",
                    "valueToUpdate": param
                },headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setIsLoading(true)
                setTimeout(() => {
                    navigation.navigate('Success', {title: 'Weight changed', screen: 'Profile'})
                }, 2000);
            }).catch(err => {
                setIsLoading(false)
                Alert.alert(err.response.data.response)
            })
        }
    }

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={statsStyling.container}>
                {isLoading ? ( <Indicator/>): (
                    <>
                    <ScrollView>
                        <View style={statsStyling.backBtnContainer}>
                            <View style={statsStyling.backBtn}>
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                                </Pressable>
                            </View>
                        </View>
                        <View style={statsStyling.headerContent}>
                            <Text style={{fontSize: 28, fontWeight: 500, color: Color.white}}>Change your Weight</Text>
                        </View>

                        <View style={statsStyling.inputContainer}>
                            <View style={statsStyling.heightContainer}>
                                <View style={statsStyling.TitleContainer}>
                                    <Text style={{fontSize: 20, color: Color.white}}>Weight:</Text>
                                </View>
                                <View style={statsStyling.inputTextContainer}>
                                    <TextInput 
                                        style={statsStyling.textInputStyle}
                                        value={newValue} 
                                        onChangeText={text => setNewValue(text)}
                                        underlineColorAndroid="transparent"
                                        placeholder={weight}
                                    />
                                </View>
                                <View style={statsStyling.statsContainer}>
                                    <Text style={{fontSize: 40, color: Color.white}}>KG</Text>
                                </View>
                            </View>
                        </View>

                        <View style={statsStyling.btnContainer}>
                            <Button title={'Confirm'} action={() => handleTextIput(newValue)}/>
                        </View>
                    </ScrollView>
                    </>
                )}
            </View>
        </SafeAreaView>
    );
}

export default ChangeUserWeight