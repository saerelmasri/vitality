import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { foodStyling } from "./FoodListingStyling";
import { useRoute } from "@react-navigation/native"
import Food from "../../Components/FoodComponent/Food";
import { useState } from "react";
import axios from "axios";
import Indicator from '../../Components/ActivityIndicator/indicator'
import { Color } from "../../../globalStyling";


const FoodListing = ({navigation}) => {
    const route = useRoute()
    const mealType = route.params.mealType

    const [ foodData, setFoodData ] = useState('')
    const [ foodName, setFoodName ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    let mealID = ''
    if(mealType === 'Breakfast'){
        mealID = 1
    }else if(mealType === 'Lunch'){
        mealID = 2
    }else if(mealType === 'Dinner'){
        mealID = 3
    }

    const searchFood = async () => {
        await axios({
            method: 'GET',
            url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '0be9f1d9fbmsh909221869cd9123p1b8f03jsnc224a276d142',
                'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
            },
            params: {
                query: foodName
            }
        }).then((res) => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                const { protein_g, calories, carbohydrates_total_g, fat_total_g, serving_size_g, name } = res.data[0];
                setFoodData({protein: protein_g, calories: calories, carbs: carbohydrates_total_g, fat: fat_total_g, serving: serving_size_g, nameProduct: name});    
            }, 2000)
        }).catch(err => {
            setIsLoading(false)
            console.log(err.response)})
    }

    const dataToSend = {
        meal: mealID,
        food: foodData
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
                            {mealType}
                        </Text>
                    </View>

                    <View style={foodStyling.searchContainer}>
                        <TextInput style={foodStyling.searchInput} 
                            placeholder="Search food"
                            value={foodName}
                            onChangeText={(text) => setFoodName(text)}
                        />
                        <TouchableOpacity style={foodStyling.searchBtn} onPress={() => {searchFood()}}>
                            <Text style={{fontSize: 25, fontWeight: 500}}>Filter</Text>
                        </TouchableOpacity>
                    </View >

                    <View style={foodStyling.instruction}>
                        <Text style={{fontSize: 22, textAlign: 'center', color: Color.white}}>Search for any food here and log it to keep track of your calories!</Text>
                        
                    </View>

                    {isLoading ? (
                        <Indicator />
                        ) : foodData ? (
                        <View style={foodStyling.foodItemList}>
                            <Food name={foodData['nameProduct']} serving={foodData['serving']} action={()=>{navigation.navigate('FoodDetail', {foodInfo: dataToSend})}} />
                        </View>
                        ) : null
                    }
                    
                </ScrollView>

            </View>

        </SafeAreaView>
    );
}
export default FoodListing