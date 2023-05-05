import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, StyleSheet, Dimensions, ImageBackground, FlatList } from "react-native";
import { Color } from "../../../globalStyling";
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react";
const { height, width } = Dimensions.get('window')
import { recipeDescription } from "./RecipeDescriptionStyling";

const RecipesDescription = ({navigation}) => {
    const route = useRoute()
    const recipeInfo = route.params.recipeInfo
    const [ calories, setCalories ] = useState('')
    const [ protein, setProtein ] = useState('')
    const [ carbs, setCarbs ] = useState('')
    const [recipeSteps, setRecipeSteps] = useState([]);
    const [ ingredients, setIngredients ] = useState([])

    useEffect(() => {
        setCalories(recipeInfo.nutrition[0].amount)
        setCarbs(recipeInfo.nutrition[3].amount)
        setProtein(recipeInfo.nutrition[8].amount)

        
        recipeInfo.instructions.map((step, index) => {
            setRecipeSteps(prevSteps => [...prevSteps, `Step ${index + 1}: ${step}\n`]);
        });

        const ingredientsData = recipeInfo.ingredients.map((ingredient) => {
            const { name, amount, unit } = ingredient;
            return { name, amount, unit };
        });
        
        setIngredients(ingredientsData)
    }, [])

    return(
            <ImageBackground style={recipeDescription.container} source={{uri: recipeInfo.image}} resizeMode="cover" imageStyle={{width: width, height: height / 2.5, zIndex: 0}}>
                <ScrollView>
                    <View style={recipeDescription.backBtnContainer}  >
                    </View>

                    <View style={recipeDescription.descriptionContainer}>
                        <View style={recipeDescription.titleHeader}>
                            <Text style={recipeDescription.title}>
                                {recipeInfo.title}
                            </Text>
                        </View>
                        <View style={recipeDescription.nutritionFacts}>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    {calories}
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Calories
                                </Text>
                            </View>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    {protein}
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Protein
                                </Text>
                            </View>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    {carbs}
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Carbs
                                </Text>
                            </View>
                        </View>

                        <View style={recipeDescription.ingredientsContainer}>
                            <Text style={{fontSize: 35, fontWeight: 500, color: Color.white, textDecorationLine: 'underline', marginBottom: '2%' }}>Ingredients</Text>
                            <FlatList
                                data={ingredients}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View >
                                        <Text style={{fontSize: 20, color: Color.white}}>{item.amount} {item.unit} {item.name}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        <ScrollView >
                            <View style={recipeDescription.preparationContainer}>
                                <Text style={{fontSize: 35, fontWeight: 500, color: Color.white, textDecorationLine: 'underline', marginBottom: '2%' }}>Instructions</Text>  

                                <Text style={{fontSize: 20, color: Color.white}}>
                                            {recipeSteps}
                                </Text>
                            </View>
                        </ScrollView>
                    </View>

                </ScrollView>
            </ImageBackground>
    );
}



export default RecipesDescription