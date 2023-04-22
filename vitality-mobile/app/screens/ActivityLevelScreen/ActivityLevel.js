import { View, Alert, Pressable, Image, Text, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { activityLevelStyle } from "./ActivityLevelStylings"
import NextBtn from "../../Components/NextBtn/NextBtn"
import ActivityLevelTypes from "../../Components/activityLevel/ActivityComponent"
import Indicator from '../../Components/ActivityIndicator/indicator'
var JWT = ''

const ActivityLevel = ({navigation}) => {
    const [ activity, setActivity ] = useState('')
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


    const data = JSON.stringify({
        'weight': toPass['toPass']['toPass']['toPass']['weightHeight']['userWeight'],
        'height': toPass['toPass']['toPass']['toPass']['weightHeight']['userHeight'],
        'gender': toPass['toPass']['toPass']['toPass']['gender'],
        'age': toPass['toPass']['toPass']['age'],
        'goal_type_id': toPass['toPass']['goal'],
        'diet_type_id': toPass['diet'],
        'activity_type_id': activity
    })

    const checkActivity = async() => {
        if(activity === ''){
            Alert.alert('Select an activity please')
        }else{
            await axios({
                method: 'POST',
                url: 'http://192.168.1.104:5000/extra_info/extraInfoUser',
                data: data,
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.data.status === 200){
                    setLoading(true)
                    setTimeout(() => {
                        
                        navigation.navigate('Success', {title: 'Account Created'})
                    }, 2000);
                }
            }).catch(err => {
                setLoading(false)
                Alert.alert('Something went wrong')
                navigation.navigate('Register')
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
                                    title={'Sedentary'} 
                                    description={'Little to no exercise or physical activity in daily routine.'} 
                                    action={() => setActivity('1')}
                                />
                                <ActivityLevelTypes 
                                    title={'Light Active'} 
                                    description={'You work a job with light physical demands, or you work a desk job and perform light exercise for 30 minutes per day, 3-5 times per week.'}
                                    action={() => {setActivity('2')}}
                                />
                                <ActivityLevelTypes 
                                    title={'Active'} 
                                    description={' You average more than 60 minutes of physical activity a day'}
                                    action={() => setActivity('3')}
                                />
                                <ActivityLevelTypes 
                                    title={'Very Active'} 
                                    description={'You do intentional exercise every day that is equivalent to briskly walking for at least four hours and 15 minutes - briskly walking is walking at 4mph'}
                                    action={() => setActivity('4')}
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