import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Color } from "../../../globalStyling";
import { recipesStyling } from "./RecipesScreenStyling";
import RecipeComponent from "../../Components/RecipeComponent/Recipe";

const Recipes = ({navigation}) => {

    const [ filter, setFilter ] = useState('')
    const [recipes, setRecipes] = useState([]);

    useEffect( () => {
        const fetchRecipes = async(filter) => {
            await axios({
                method: 'GET',
                url: 'https://api.spoonacular.com/recipes/complexSearch',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'ecdb01301621466d810eb52c1ef0ead1',
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                },
                params: {
                    'includeIngredients': true,
                    'instructionsRequired': true,
                    'addRecipeInformation': true,
                    'addRecipeNutrition': true,
                    'type': filter,
                    'number': 15
                }
            }).then((res) => {
                const recipeList = res.data.results.map((result) => ({
                    image: result.image,
                    title: result.title,
                    nutrition: result.nutrition.nutrients,
                    instructions: result.analyzedInstructions[0].steps.map((step) => step.step),
                    ingredients: result.nutrition.ingredients.map((name) => name),
                }));
                setRecipes(recipeList);
            }).catch(err => {
                console.log(err);
            })
        }
        fetchRecipes(filter)

    }, [filter])


    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={recipesStyling.container}>
                <ScrollView>
                    <View style={recipesStyling.header}>
                        <Text style={recipesStyling.text}>What you want to cook today?</Text>
                    </View>

                    <View style={recipesStyling.searchContainer}>
                        <View style={recipesStyling.searchIconContainer}>
                        </View>
                        <TextInput style={recipesStyling.searchInput} placeholder="Search food"></TextInput>
                    </View>

                    <View style={recipesStyling.aiBtn}>
                        <Pressable onPress={() => {Alert.alert('Pressed')}}>
                            <View style={recipesStyling.chefTxt} >
                                <Text style= {{fontSize: 20, fontWeight: 500, color: Color.white,}}>
                                    Don’t know what to cook?Check our new AI chef!
                                </Text>
                            </View>
                            <Image source={require('../../assets/app-img/chef.jpg')} style={{resizeMode: 'cover', height: 123, width: 340, borderRadius: 10, opacity: 0.5}}/>
                        </Pressable>
                    </View>

                    <View style={recipesStyling.btnContainer}>
                        <TouchableOpacity style={recipesStyling.btn} onPress={()=> {setFilter('breakfast')}}>
                            <Text style={recipesStyling.btnTxt}>Breakfast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn} onPress={()=> {setFilter('main course')}}>
                            <Text style={recipesStyling.btnTxt}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn} onPress={()=> {setFilter('snack')}}>
                            <Text style={recipesStyling.btnTxt}>Snack</Text>
                        </TouchableOpacity>
                    </View>

                   <View style={recipesStyling.recipesContainer}>
                        <ScrollView>
                            {recipes.map((recipe) => (
                                <RecipeComponent level={recipe.image} name={recipe.title} action={() => {navigation.navigate('RecipeDescription', {recipeInfo: recipe})}}/>
                            ))}
                        </ScrollView>
                   </View>
                                        

                    
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}


export default Recipes