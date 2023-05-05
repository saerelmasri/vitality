import { View, Alert, Pressable, Image, Text, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activityLevelStyle } from "./ActivityLevelStylings"
import NextBtn from "../../Components/NextBtn/NextBtn"
import ActivityLevelTypes from "../../Components/activityLevel/ActivityComponent"
import Indicator from '../../Components/ActivityIndicator/indicator'
var JWT = ''
import { BASE_URL } from '@env'

const ActivityLevel = ({navigation}) => {
    const [ activity, setActivity ] = useState('')
    const [ calories, setCalories] = useState('')
    const [loading, setLoading] = useState(false);
    const route = useRoute()
    const toPass = route.params.data

    
    AsyncStorage.getItem('token')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });

    useEffect(() => {
        const calculateCalories = async() => {
            await axios({
                method: 'GET',
                url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
                params: {
                    age: toPass['toPass']['toPass']['age'],
                    gender: toPass['toPass']['toPass']['toPass']['gender'],
                    height: toPass['toPass']['toPass']['toPass']['weightHeight']['userHeight'],
                    weight: toPass['toPass']['toPass']['toPass']['weightHeight']['userWeight'],
                    activitylevel: activity,
                    goal: toPass['toPass']['goal']['goal'],
                },
                headers: {
                  'content-type': 'application/octet-stream',
                  'X-RapidAPI-Key': '0be9f1d9fbmsh909221869cd9123p1b8f03jsnc224a276d142',
                  'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
                }
            }).then(res => {
                setCalories(res.data.data['calorie'])
            }).catch(err => console.log(err))
        }

        calculateCalories()

    }, [])

    const data = JSON.stringify({
        'weight': toPass['toPass']['toPass']['toPass']['weightHeight']['userWeight'],
        'height': toPass['toPass']['toPass']['toPass']['weightHeight']['userHeight'],
        'gender': toPass['toPass']['toPass']['toPass']['gender'],
        'age': toPass['toPass']['toPass']['age'],
        'goal_type_id': toPass['toPass']['goal']['goalID'],
        'diet_type_id': toPass['diet'],
        'activity_type_id': activity
    })

    const checkActivity = async() => {
        if(activity === ''){
            Alert.alert('Select an activity please')
        }else{
            console.log(calories);
            await axios({
                method: 'POST',
                url: `${BASE_URL}/extra_info/extraInfoUser`,
                data: data,
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.data.status === 200){
                    axios({
                        method: 'POST',
                        url: `${BASE_URL}/foodLog/addDailyCalories`,
                        data: {
                            'daily_calories': calories
                        },
                        headers: {
                            'Authorization': JWT,
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        setLoading(true)
                        setTimeout(() => {
                            navigation.navigate('Success', {title: 'Account Created', screen: 'Login'})
                        }, 2000);
                    }).catch(err => {
                        setLoading(false)
                        axios({
                            method: 'delete',
                            url: BASE_URL + 'auth/removeUser',
                            headers: {
                                'Authorization': JWT,
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            }
                        }).then(res => {
                            if(res.data.status === 201){
                                Alert.alert('Something went wrong')
                                navigation.navigate('Register')
                            }
                        })
                    })
                }
            }).catch(err => {
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
                                <Pressable onPress={() => Alert.alert('image clicked')}>
                                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                                </Pressable>
                            </View>
                        </View>
                        <View style={activityLevelStyle.contentContainer}>
                            <View style={activityLevelStyle.headerContainer}>
                                <Text style={activityLevelStyle.headerText}>Select <Text style={activityLevelStyle.span}>activity level</Text></Text>
                            </View>
                            <View style={activityLevelStyle.descriptionContainer}>
                                <Text style={activityLevelStyle.descriptionText}>To give you a better experience we need to know your activity level</Text>
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
                            <NextBtn action={checkActivity}/>
                        </View>
                    </View>
                </>
            )}
            
        </View>
    )
}

export default ActivityLevel