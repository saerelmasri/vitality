import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwNjA0NjksImV4cCI6MTY4MzA2NDA2OX0.Az21H7eiC6xrF7rsRdortwxIgoteAPk_QlyOZHzCFLI"


const Settings = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    const [ user, setUser ] = useState('')

    useEffect(() => {
        const fetchFullName = async () => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/user_route/user_details',
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setUser(res.data.message[0]['full_name']);
            }).catch(err => {
                console.log(err);
            })
        }
        fetchFullName()
    }, [])
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={settingStyle.container}>
                <ScrollView>
                <View style={settingStyle.backBtnContainer}>
                    <View style={settingStyle.backBtn}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                        </Pressable>
                    </View>
                </View>
                <View style={settingStyle.headerContent}>
                    <Text style={{fontSize: 25}}>Settings</Text>
                </View>
                <View style={settingStyle.profileContainer}>
                    <View style={settingStyle.avatarContent}>
                        <View style={settingStyle.picture}></View>
                    </View>
                    <View style={settingStyle.name}>
                        <Text style={{fontSize: 22, fontWeight: 500}}>
                            {user}
                        </Text>
                    </View>
                </View>

                <View style={settingStyle.optionsContainer}>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeHeight')}>
                        <Text style={settingStyle.optionTxt}>Change Height</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeWeight')}>
                        <Text style={settingStyle.optionTxt}>Change Weight</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeGoal')}>
                        <Text style={settingStyle.optionTxt}>Change goal</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeActivity')}>
                        <Text style={settingStyle.optionTxt}>Change activity level</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>

                </View>

                   

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const settingStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    backBtnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        backgroundColor: Color.grey
    },
    backBtn: {
        height: 50,
        width: 50,
        marginTop: 0,
        marginLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    headerContent: {
        width: width,
        height: height / 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.grey
    },
    profileContainer: {
        width: width,
        height: height / 7,
        backgroundColor: Color.grey,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '5%'
    },
    avatarContent: {
        width: width / 4,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture:{
        width: '80%',
        height: '65%',
        borderRadius: 100,
        backgroundColor: Color.white
    },
    name: {
        width: width / 1.8,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    actionBtn: {
        width: width / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsContainer: {
        width: width,
        height: height / 3,
        backgroundColor: Color.grey,
        marginTop: ' 20%'
    },
    option: {
        height: height / 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: ' 10%',
        paddingRight: ' 10%',
    },
    optionTxt: {
        fontSize: 22
    }
    
})


export default Settings