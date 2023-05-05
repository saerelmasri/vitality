import { View, Alert, Pressable, Image, Text, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activityLevelStyle } from "./ChangeActivityLevelStyling";
import ActivityLevelTypes from "../../Components/activityLevel/ActivityComponent"
import Indicator from '../../Components/ActivityIndicator/indicator'
import Button from "../../Components/Button/Button";
import { BASE_URL } from '@env'
import { ScrollView } from "react-native-gesture-handler";


const ChangeActivityLevel = ({navigation}) => {
    const [ activity, setActivity ] = useState('')
    const [loading, setLoading] = useState(false);
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

    const checkActivity = async(param) => {
        if(activity === ''){
            Alert.alert('Select an activity please')
        }else{
            if(JWT){
                await axios({
                    method: 'PUT',
                    url: `${BASE_URL}/user_route/update_profile_extra_info`,
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
    }
    return(
        <View style={activityLevelStyle.mainContainer}>
            { loading ? (<Indicator/>) : (
                <>
                    <View>
                        <ScrollView>
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
                                <View style={activityLevelStyle.btnContainer}>
                                    <Button action={() => checkActivity(activity)} title={"Continue"}/>
                                </View>

                            </View>
                        </ScrollView>
                    </View>
                </>
            )}
            
        </View>
    )
}

export default ChangeActivityLevel