import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import { useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react";
const { height, width } = Dimensions.get('window')

const RecipesDescription = () => {
    const route = useRoute()
    const recipeInfo = route.params.recipeInfo
    const [ calories, setCalories ] = useState('')
    const [ protein, setProtein ] = useState('')
    const [ carbs, setCarbs ] = useState('')
    const [recipeSteps, setRecipeSteps] = useState([]);

    useEffect(() => {
        setCalories(recipeInfo.nutrition[0].amount)
        setCarbs(recipeInfo.nutrition[3].amount)
        setProtein(recipeInfo.nutrition[8].amount)

        
        recipeInfo.instructions.map((step, index) => {
            setRecipeSteps(prevSteps => [...prevSteps, `Step ${index + 1}: ${step}\n`]);
        });
    }, [])


    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <ImageBackground style={recipeDescription.container} source={{uri: recipeInfo.image}} resizeMode="cover" imageStyle={{width: width, height: height / 2.5, zIndex: 0}}>
                <ScrollView>
                    <View style={recipeDescription.backBtnContainer}  >
                        <View style={recipeDescription.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
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
        </SafeAreaView>
    );
}

const recipeDescription = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        zIndex: 1
    },
    backBtnContainer: {
        width: width,
        height: height / 3,
        display: 'flex',
    },
    backBtn: {
        height: 50,
        width: 50,
        marginTop: 0,
        marginLeft: 10,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        width: width,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 1,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        alignItems: 'center',
        paddingTop: ' 5%'
    },
    titleHeader: {
        width: width - 40,
        height: height / 11,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        color: Color.white
    },
    nutritionFacts: {
        width: width - 40,
        height: height / 8,
        marginTop: '5%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, 
    factsContent: {
        width: '33%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    factsNumber: {
        fontSize: 25,
        fontWeight: 400
    },
    factsTxt: {
        fontSize: 20,
        fontWeight: 400
    },
    ingredientsContainer: {
        borderWidth: 1,
        width: width - 40,
        height: height / 3,
        marginTop: '5%',
    },
    preparationContainer: {
        
        flex: 1,
        width: width - 40,
        marginTop: '5%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
      steps: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
})

export default RecipesDescription