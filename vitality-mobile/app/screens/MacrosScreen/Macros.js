import { View, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { useState, useEffect } from 'react'
import { macrosStyling } from "./MacrosStyling"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import FoodIntake from "../../Components/FoodIntakeComponent/FoodIntake";
var JWT = ''
import { BASE_URL } from '@env'

const Macros = ({navigation}) => {
    const [ calories, setCalories ] = useState('')
    const [ food, setFood ] = useState(0)
    const [ breakfastCal, setBreakfastCal ] = useState('')
    const [ lunchCal, setLunchCal ] = useState('')
    const [ dinnerCal, setDinnerCal ] = useState('')
    const [ foodMeal1, setFoodMeal1 ] = useState([])
    const [ foodMeal2, setFoodMeal2 ] = useState([])
    const [ foodMeal3, setFoodMeal3 ] = useState([])

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });


    useEffect(()=>{
        const interval = setInterval(() => {
            const getCalories = async() => {
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/foodLog/getDailyCalories`,
                    headers: {
                        'Authorization': JWT,
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
                    url: `${BASE_URL}/foodLog/sumOfCalories`,
                    headers: {
                        'Authorization': JWT,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res=> {
                    setBreakfastCal(res.data.message.breakfast);
                    setDinnerCal(res.data.message.dinner);
                    setLunchCal(res.data.message.lunch);
                }).catch(err => console.log(err.response))
            };
    
            getTotalCalories()

            
            
        }, 2000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setFood(Number(breakfastCal) + Number(lunchCal) + Number(dinnerCal));

        const getFoods = async(meal) => {
            await axios({
                method: 'GET',
                url: `${BASE_URL}/foodLog/fetchUserMealLogs/${meal}`,
                headers: {
                    'Authorization': JWT,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(meal === 1){
                    setFoodMeal1(res.data.message)
                }else if(meal === 2){
                    setFoodMeal2(res.data.message)
                }else if(meal === 3){
                    setFoodMeal3(res.data.message)
                }
                
            }).catch(err => console.log(err.response.data.message))
        }
        
        getFoods(1)
        getFoods(2)
        getFoods(3)
    
      }, [breakfastCal, lunchCal, dinnerCal]);


    return(
            <View style={macrosStyling.container}>
                <ScrollView style={{display: "flex",flex: 1,}}>
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
                        <ScrollView>
                            {
                                foodMeal1.map((food, index) => {
                                    return <FoodIntake name={food['food_name']} calories={food['calories']}/>
                                })
                            }
                        </ScrollView>
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
                        <ScrollView>
                            {
                                foodMeal2.map((food, index) => {
                                    return <FoodIntake name={food['food_name']} calories={food['calories']}/>
                                })
                            }
                        </ScrollView>
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
                        <ScrollView>
                            {
                                foodMeal3.map((food, index) => {
                                    return <FoodIntake name={food['food_name']} calories={food['calories']}/>
                                })
                            }
                        </ScrollView>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Dinner'})}>
                            <Text style={macrosStyling.addFood}>Add Dinner</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>            
    )
}

export default Macros