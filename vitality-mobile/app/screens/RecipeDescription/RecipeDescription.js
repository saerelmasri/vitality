import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const RecipesDescription = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <ImageBackground style={recipeDescription.container} source={require('../../assets/app-img/test.jpg')} resizeMode="cover" imageStyle={{width: width, height: height / 2.5, zIndex: 0}}>
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
                                Healthy Banana Oatmeal Pancakes
                            </Text>
                        </View>
                        <View style={recipeDescription.nutritionFacts}>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    345
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Calories
                                </Text>
                            </View>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    250
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Protein
                                </Text>
                            </View>
                            <View style={recipeDescription.factsContent}>
                                <Text style={recipeDescription.factsNumber}>
                                    250
                                </Text>
                                <Text style={recipeDescription.factsTxt}>
                                    Carbs
                                </Text>
                            </View>
                        </View>

                        <View style={recipeDescription.ingredientsContainer}>

                        </View>
                        <View style={recipeDescription.preparationContainer}>

                        </View>
                        

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
        height: height,
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
        borderWidth: 1,
        width: width - 40,
        height: height / 3,
        marginTop: '5%',
    }

})

export default RecipesDescription