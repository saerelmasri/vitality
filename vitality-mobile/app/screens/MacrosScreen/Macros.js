import { View, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { useState, useEffect } from 'react'
import { macrosStyling } from "./MacrosStyling"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
let JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODI2MDI4MzMsImV4cCI6MTY4MjYwNjQzM30.F7mkLUTPvL3u2EMBe1EuQFAYTHSCiELEko1FPvcPWBM'

const Macros = ({navigation}) => {
    const [ calories, setCalories ] = useState('')

    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    useEffect(()=>{
        const getCalories = async() => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/foodLog/getDailyCalories',
                headers: {
                    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODI2MzYyMjgsImV4cCI6MTY4MjYzOTgyOH0.RP6_s5O_3ANEg0nHYe760fHYhtgqB-sO5k3hqnMhoe0",
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
    }, [])
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
                                <Text style={macrosStyling.textTop}>0</Text>
                                <Text style={macrosStyling.textBottom}>Food</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>=</Text>
                            </View>
                            <View style={macrosStyling.remainsContainer}>
                                <Text style={macrosStyling.textTop}>{calories}</Text>
                                <Text style={macrosStyling.textBottom}>Remaining</Text>
                            </View>
                        </View>
                    </View>
                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Breakfast</Text>
                        <Text style={macrosStyling.addFood}>406</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Breakfast'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Lunch</Text>
                        <Text style={macrosStyling.addFood}>325</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Lunch'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Dinner</Text>
                        <Text style={macrosStyling.addFood}>725</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
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