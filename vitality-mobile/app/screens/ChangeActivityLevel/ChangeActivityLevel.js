import { View, Alert, Pressable, Image, Text, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activityLevelStyle } from "./ChangeActivityLevelStyling";
import NextBtn from "../../Components/NextBtn/NextBtn"
import ActivityLevelTypes from "../../Components/activityLevel/ActivityComponent"
import Indicator from '../../Components/ActivityIndicator/indicator'
import Button from "../../Components/Button/Button";
var JWT = ""

const ChangeActivityLevel = ({navigation}) => {
    const [ activity, setActivity ] = useState('')
    const [loading, setLoading] = useState(false);

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });


    const checkActivity = async(param) => {
        if(activity === ''){
            Alert.alert('Select an activity please')
        }else{
            await axios({
                method: 'PUT',
                url: 'http://192.168.1.104:5000/user_route/update_profile_extra_info',
                data: {
                    "column_name": "activity_type_id",
                    "valueToUpdate": param
                },
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setLoading(true)
                setTimeout(() => {
                    navigation.navigate('Success', {title: 'Activity Changed', screen: 'Profile'})
                }, 2000);
            }).catch(err => {
                setLoading(false)
                console.log(err.response);
            })
        }
    }
    return(
        <View style={activityLevelStyle.mainContainer}>
            { loading ? (<Indicator/>) : (
                <>
                    <View>
                        <View  style={activityLevelStyle.backBtnContainer}>
                            <View style={activityLevelStyle.backBtn}>
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                                </Pressable>
                            </View>
                        </View>
                        <View style={activityLevelStyle.contentContainer}>
                            <View style={activityLevelStyle.headerContainer}>
                                <Text style={activityLevelStyle.headerText}>Select your new <Text style={activityLevelStyle.span}>activity level</Text></Text>
                            </View>
                            
                            <View style={activityLevelStyle.activityContainer}>
                                <ActivityLevelTypes 
                                    title={'Sedentary: little or no exercise'} 
                                    action={() => setActivity('2')}
                                />
                                <ActivityLevelTypes 
                                    title={'Exercise 1-3 times/week'} 
                                    action={() => {setActivity('3')}}
                                />
                                <ActivityLevelTypes 
                                    title={'Exercise 4-5 times/week'} 
                                    action={() => setActivity('4')}
                                />
                                <ActivityLevelTypes 
                                    title={'Daily exercise or intense exercise 3-4 times/week'} 
                                    action={() => setActivity('5')}
                                />
                                <ActivityLevelTypes 
                                    title={'Intense exercise 6-7 times/week'} 
                                    action={() => setActivity('6')}
                                />
                                <ActivityLevelTypes 
                                    title={'Very intense exercise daily, or physical job'} 
                                    action={() => setActivity('7')}
                                />
                                
                            </View>
                            <Button action={() => checkActivity(activity)} title={"Continue"}/>
                        </View>
                    </View>
                </>
            )}
            
        </View>
    )
}

export default ChangeActivityLevel