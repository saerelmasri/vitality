import { View, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { useState, useEffect } from 'react'
import { macrosStyling } from "./MacrosStyling"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"

const Macros = ({navigation}) => {
    const [ calories, setCalories ] = useState('')
    const [ food, setFood ] = useState(0)
    const [ breakfastCal, setBreakfastCal ] = useState('')
    const [ lunchCal, setLunchCal ] = useState('')
    const [ dinnerCal, setDinnerCal ] = useState('')
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODI3NjIwNzQsImV4cCI6MTY4Mjc2NTY3NH0.CjZhoZynO1LxFKAihOw5clU-2chUmxiP2usr8tlgp0Q"
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });


    useEffect(()=>{
        const interval = setInterval(() => {
            const getCalories = async() => {
                await axios({
                    method: 'GET',
                    url: 'http://192.168.1.104:5000/foodLog/getDailyCalories',
                    headers: {
                        'Authorization': token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setCalories(res.data.message);
                }).catch(err => {
                    console.log(err.response);
                })
            }
            getCalories()

            const getTotalCalories = async() => {
                await axios({
                    method: 'POST',
                    url: 'http://192.168.1.104:5000/foodLog/sumOfCalories',
                    headers: {
                        'Authorization': token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res=> {
                    setBreakfastCal(res.data.message.breakfast);
                    setDinnerCal(res.data.message.dinner);
                    setLunchCal(res.data.message.lunch);
                }).catch(err => console.error(err))
            };
    
            getTotalCalories()
        }, 2000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setFood(Number(breakfastCal) + Number(lunchCal) + Number(dinnerCal));
      }, [breakfastCal, lunchCal, dinnerCal]);

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={macrosStyling.container}>
                <ScrollView style={{display: "flex",flex: 1,}}>
                    <View  style={macrosStyling.backBtnContainer}>
                        <View style={macrosStyling.backBtn}>
                            <Pressable onPress={() => navigation.navigate('Nutrition')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={macrosStyling.headerContainer}>
                        <Text style={macrosStyling.headerTitle}>
                            Diary
                        </Text>
                    </View>
                    <View style={macrosStyling.statsContainer}>
                        <View style={macrosStyling.containerTitle}>
                            <Text style={macrosStyling.TitleTxt}>
                                Calories Remaining
                            </Text>
                        </View>
                        <View style={macrosStyling.contentContainer}>
                            <View style={macrosStyling.goalContainer}>
                                <Text style={macrosStyling.textTop}>{calories}</Text>
                                <Text style={macrosStyling.textBottom}>Goal</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>-</Text>
                            </View>
                            <View style={macrosStyling.foodContainer}>
                                <Text style={macrosStyling.textTop}>{food}</Text>
                                <Text style={macrosStyling.textBottom}>Food</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>=</Text>
                            </View>
                            <View style={macrosStyling.remainsContainer}>
                                <Text style={macrosStyling.textTop}>{calories - food}</Text>
                                <Text style={macrosStyling.textBottom}>Remaining</Text>
                            </View>
                        </View>
                    </View>
                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Breakfast</Text>
                        <Text style={macrosStyling.addFood}>{breakfastCal}</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        {/* <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View> */}
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Breakfast'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Lunch</Text>
                        <Text style={macrosStyling.addFood}>{lunchCal}</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        {/* <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View> */}
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Lunch'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Dinner</Text>
                        <Text style={macrosStyling.addFood}>{dinnerCal}</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        {/* <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View> */}
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Dinner'})}>
                            <Text style={macrosStyling.addFood}>Add Dinner</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default Macros