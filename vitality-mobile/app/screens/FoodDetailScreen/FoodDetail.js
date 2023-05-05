import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { Color } from "../../../globalStyling";
import { foodStyling } from "./FoodDetailStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { BASE_URL } from '@env'
var JWT =''

const FoodDetail = ({navigation}) => {
    const [serving, setServing] = useState('');
    const [ foodStats, setFoodStats ] = useState('')
    const route = useRoute()
    const data = route.params.foodInfo

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });


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


    const logFood = async() => {
        if(serving === ''){
            Alert.alert('Cannot continue without your serving size')
        }else{
            await axios({
                method: 'POST',
                url: `${BASE_URL}/foodLog/addLog`,
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
            <View style={foodStyling.container}>
                <ScrollView>
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
    );
}

export default FoodDetail