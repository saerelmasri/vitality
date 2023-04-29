import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { Color } from "../../../globalStyling";
import { foodStyling } from "./FoodDetailStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

// let JWT =''

const FoodDetail = ({navigation}) => {
    const [serving, setServing] = useState('');
    const [ foodStats, setFoodStats ] = useState('')
    const route = useRoute()
    const data = route.params.foodInfo

    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });


    let mealType = ''
    if(data['meal'] === 1){
        mealType = 'Breakfast'
    }else if(data['meal'] === 2){
        mealType = 'Lunch'
    }else if(data['meal'] === 3){
        mealType = 'Dinner'
    }
    
    useEffect(() => {
        const updateData = async () => {
            const query = serving + "g" + " " + data['food'];
            try {
                const res = await axios({
                    method: 'GET',
                    url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
                    params: {
                        query: query
                    },
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': '0be9f1d9fbmsh909221869cd9123p1b8f03jsnc224a276d142',
                        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
                    }
                });
                const { calories, name, fat_total_g, protein_g, carbohydrates_total_g } = res.data[0];
                setFoodStats({ calories, nameProduct: name, fats: fat_total_g, protein: protein_g, carbs: carbohydrates_total_g });
            } catch (error) {
                console.error(error.response.data);
            }
        };
        if (serving !== '') {
            updateData();
        }
    }, [serving, data]);

    const log = {
        "mealID": data['meal'], 
        "food_name": data['food'],
        "calories": foodStats.calories,
        "carbs": foodStats['carbs'],
        "fats": foodStats['fats'],
        "protein": foodStats['protein'],
        "serving_size": serving
    }

    let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODI3NjIwNzQsImV4cCI6MTY4Mjc2NTY3NH0.CjZhoZynO1LxFKAihOw5clU-2chUmxiP2usr8tlgp0Q"

    const logFood = async() => {
        if(serving === ''){
            Alert.alert('Cannot continue without your serving size')
        }else{
            await axios({
                method: 'POST',
                url: 'http://192.168.1.104:5000/foodLog/addLog',
                data: log,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': JWT
                }
            }).then((res) => {
                if(res.data.status === 201){
                    navigation.goBack()
                }
            }).catch(err => {
                Alert.alert(err.response.data)
            })
        }
    }
    
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={foodStyling.container}>
                <ScrollView>
                    <View style={foodStyling.backBtnContainer}>
                        <View style={foodStyling.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={foodStyling.headerMeal}>
                        <Text style={foodStyling.headerTitle}>
                            {data['food']}
                        </Text>
                    </View>

                    <View style={foodStyling.detailContainer}>
                        <View style={foodStyling.detailStats}>
                            <Text style={foodStyling.text}>
                                Meal
                            </Text>
                            <Text style={foodStyling.text}>
                                {mealType}
                            </Text>
                        </View>
                        <View style={foodStyling.detailStats}>
                            <Text style={{fontSize: 18, color: Color.white}}>
                                Serving Size
                            </Text>
                            <TextInput style={foodStyling.txtInput} 
                                placeholder="Serving Size"
                                value={serving}
                                onChangeText={(text) => 
                                    {
                                        setServing(text);
                                    }}
                                keyboardType="numeric"
                                returnKeyType="next"
                                variant="outline"
                            />
                            <Text style={{fontSize: 15, color: Color.white}}>
                                gr
                            </Text>
                        </View>
                    </View>

                    <View style={foodStyling.foodStats}>
                        <View style={foodStyling.top}>
                            <View style={foodStyling.calorieCounter}>
                                <Text style={{fontSize: 45, fontWeight: 500, color: Color.white}}>
                                    {foodStats.calories}
                                </Text>
                                <Text style={{fontSize: 25, fontWeight: 500, color: Color.white}}>
                                    Calories
                                </Text>
                            </View>
                        </View>
                        <View style={foodStyling.bottom}>
                            <View style={foodStyling.stats}>
                                <View style={foodStyling.statInfo}>
                                    <Text style={foodStyling.numberStyle}>
                                        {foodStats['protein']}g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Protein
                                    </Text>
                                </View>
                                <View style={foodStyling.statInfo}>
                                    <Text style={foodStyling.numberStyle}>
                                        {foodStats['carbs']}g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Carbs
                                    </Text>
                                </View>
                                <View style={foodStyling.statInfo}>
                                    <Text style={foodStyling.numberStyle}>
                                        {foodStats['fats']}g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Fats
                                    </Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={foodStyling.btnContainer}>
                        <TouchableOpacity style={foodStyling.btn} onPress={logFood}>
                            <Text style={{fontSize: 20, fontWeight: 400}}>
                                Add Food
                            </Text>
                        </TouchableOpacity>

                    </View>
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

export default FoodDetail