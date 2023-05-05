import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { statsStyling } from "./ChangeUserHeightStyle";
import { BASE_URL } from '@env'
import Indicator from "../../Components/ActivityIndicator/indicator";

const ChangeUserHeight = ({navigation}) => {
    const [ newValue, setNewValue ] = useState('')
    const [ height, setHeight ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ JWT, setJWT ] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token)
            })
            .catch(error => {
                console.log(error);
            })
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    

    useEffect(()=> {
        const fetchHeight = async() => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/user_route/user_extra_info`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setHeight(res.data.message[0]['height']);
                }).catch(err => {
                    console.log(err.response.data);
                })
            }
        }

        fetchHeight()
    },[JWT])

    const handleTextIput = async(param) => {
        if(newValue === " "){
            Alert.alert('Nothing to update')
        }else{
            await axios({
                method: 'PUT',
                url: `${BASE_URL}/user_route/update_profile_extra_info`,
                data: {
                    "column_name": "height",
                    "valueToUpdate": param
                },headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.data.status === 201){
                    setIsLoading(true)
                    setTimeout(() => {
                        navigation.navigate('Success', {title: 'Height changed', screen: 'Profile'})
                    }, 2000);
                }
            }).catch(err => {
                setIsLoading(false)
                Alert.alert(err.response.data.response)
            })
        }
    }

    return(            
            <View style={statsStyling.container}>
            { isLoading ? (<Indicator/>) : (
                <>
                    <ScrollView>
                        <View style={statsStyling.inputContainer}>
                            <View style={statsStyling.heightContainer}>
                                <View style={statsStyling.TitleContainer}>
                                    <Text style={{fontSize: 20, color: Color.white}}>Height:</Text>
                                </View>
                                <View style={statsStyling.inputTextContainer}>
                                    <TextInput 
                                        style={statsStyling.textInputStyle}
                                        value={newValue} 
                                        onChangeText={text => setNewValue(text)}
                                        underlineColorAndroid="transparent"
                                        placeholder={height}
                                    />
                                </View>
                                <View style={statsStyling.statsContainer}>
                                    <Text style={{fontSize: 40, color: Color.white}}>CM</Text>
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
    );
}

export default ChangeUserHeight