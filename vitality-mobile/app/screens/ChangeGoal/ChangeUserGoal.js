import { View, Alert, Pressable, Image, Text } from "react-native"
import { goalStyling } from "./ChangeUserGoalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import GoalBtn from "../../Components/GoalBtn/GoalBtn"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from "../../Components/Button/Button"
import Indicator from "../../Components/ActivityIndicator/indicator"
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwNjA0NjksImV4cCI6MTY4MzA2NDA2OX0.Az21H7eiC6xrF7rsRdortwxIgoteAPk_QlyOZHzCFLI"


const ChangeGoal = ({navigation}) => {

    const [ goal , setGoal ] = useState('')
    const [ goalID, setGoalID ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)


    const checkGoal = async(param) => {
        if(goal === ''){
            Alert.alert('Select a goal to continue')
        }else{
            await axios({
                method: 'PUT',
                url: 'http://192.168.1.104:5000/user_route/update_profile_extra_info',
                data: {
                    "column_name": "goal_type_id",
                    "valueToUpdate": param
                },
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setIsLoading(true)
                setTimeout(() => {
                    navigation.navigate('Success', {title: 'Goal changed', screen: 'Profile'})
                }, 2000);
            }).catch(err => {
                setIsLoading(false)
                console.log(err.response);
            })
        }
    }

    return(
        <View style={goalStyling.mainContainer}>
            { isLoading ? (<Indicator/>) : (
                <>
                    <View  style={goalStyling.backBtnContainer}>
                        <View style={goalStyling.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={goalStyling.contentContainer}>
                        <View style={goalStyling.headerContainer}>
                            <Text style={goalStyling.headerText}>Do you want to change your <Text style={goalStyling.span}>goal?</Text></Text>
                        </View>
                    <View style={goalStyling.goalContainer}>
                        <GoalBtn goalName={'Maintain weight'} action={() => {setGoal('maintain'), setGoalID('1')}} />
                        <GoalBtn goalName={'Mild weight loss'} action={() => {setGoal('mildlose'), setGoalID('2')}}/>
                        <GoalBtn goalName={'Weight loss'} action={() => {setGoal('weightlose'), setGoalID('3')}}/>
                        <GoalBtn goalName={'Extreme weight loss'} action={() => {setGoal('extremelose'), setGoalID('4')}}/>
                        <GoalBtn goalName={'Mild weight gain'} action={() => {setGoal('mildgain'), setGoalID('5')}}/>
                        <GoalBtn goalName={'Weight gain'} action={() => {setGoal('weightgain'), setGoalID('6')}}/>
                        <GoalBtn goalName={'Extreme weight gain'} action={() => {setGoal('extremegain'), setGoalID('7')}}/>
                    </View>
                    <Button action={() => checkGoal(goalID)} title={'Continue'}/>
                    </View>
                </>
            )}
        </View>
    )
}
export default ChangeGoal