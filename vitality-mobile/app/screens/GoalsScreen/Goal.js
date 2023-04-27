import { View, Alert, Pressable, Image, Text } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useState } from 'react'
import { goalStyling } from "./GoalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import GoalBtn from "../../Components/GoalBtn/GoalBtn"

const Goal = ({navigation}) => {
    // const route = useRoute()
    // const toPass = route.params.data

    // const [ goal , setGoal ] = useState('')

    // const data = {
    //     toPass,
    //     goal: goal
    // }
    const checkGoal = () => {
        if(goal === ''){
            Alert.alert('Select a goal to continue')
        }else{
            navigation.navigate('Diet', {data})
        }
    }

    return(
        <View style={goalStyling.mainContainer}>
            <View  style={goalStyling.backBtnContainer}>
                <View style={goalStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={goalStyling.contentContainer}>
                <View style={goalStyling.headerContainer}>
                    <Text style={goalStyling.headerText}>What is your <Text style={goalStyling.span}>goal?</Text></Text>
                </View>
                <View style={goalStyling.descriptionContainer}>
                    <Text style={goalStyling.descriptionText}>To give you a better experience we need to know your fitness goal</Text>
                </View>
                <View style={goalStyling.goalContainer}>
                    <GoalBtn goalName={'Maintain weight'} action={() => {setGoal('1')}}/>
                    <GoalBtn goalName={'Mild weight loss'} action={() => {setGoal('2')}}/>
                    <GoalBtn goalName={'Weight loss'} action={() => {setGoal('3')}}/>
                    <GoalBtn goalName={'Extreme weight loss'} action={() => {setGoal('4')}}/>
                    <GoalBtn goalName={'Mild weight gain'} action={() => {setGoal('5')}}/>
                    <GoalBtn goalName={'Weight gain'} action={() => {setGoal('6')}}/>
                    <GoalBtn goalName={'Extreme weight gain'} action={() => {setGoal('7')}}/>
                </View>
                
                <NextBtn action={checkGoal}/>
            </View>
        </View>
    )
}
export default Goal