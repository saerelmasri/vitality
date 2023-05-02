import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwNDgwMzMsImV4cCI6MTY4MzA1MTYzM30.j9A5T8GTejXSZCfuJJ10MoqJ-s399MdSOU1sZLIA78w"
import { statsStyling } from "./ChangeUserHeightStyle";

const ChangeUserHeight = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const [ newValue, setNewValue ] = useState('')
    const [ height, setHeight ] = useState('')

    useEffect(()=> {
        const fetchHeight = async() => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/user_route/user_extra_info',
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setHeight(res.data.message[0]['height']);
            }).catch(err => {
                console.log(err);
            })
        }

        fetchHeight()
    },[])

    const handleTextIput = async(param) => {
        if(newValue === " "){
            Alert.alert('Nothing to update')
        }else{
            await axios({
                method: 'PUT',
                url: 'http://192.168.1.104:5000/user_route/update_profile_extra_info',
                data: {
                    "column_name": "height",
                    "valueToUpdate": param
                },headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res);
                if(res.data.status === 201){
                    Alert.alert('Height changed')
                    navigation.navigate('Profile')
                }
            }).catch(err => {
                Alert.alert(err.response.data.response)
            })
        }
    }

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={statsStyling.container}>
                <ScrollView>
                <View style={statsStyling.backBtnContainer}>
                    <View style={statsStyling.backBtn}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                        </Pressable>
                    </View>
                </View>
                <View style={statsStyling.headerContent}>
                    <Text style={{fontSize: 28, fontWeight: 500, color: Color.white}}>Change your Height</Text>
                </View>

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
                    <Button title={'Confirm'} action={() => handleTextIput()}/>

                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default ChangeUserHeight