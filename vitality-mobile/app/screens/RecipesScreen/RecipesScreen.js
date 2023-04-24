import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity } from "react-native";
import { Color } from "../../../globalStyling";
import { recipesStyling } from "./RecipesScreenStyling";
import RecipeComponent from "../../Components/RecipeComponent/Recipe";

const Recipes = () => {
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
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Breakfast</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Lunch</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={recipesStyling.btn}>
                            <Text style={recipesStyling.btnTxt}>Snack</Text>
                        </TouchableOpacity>
                    </View>

                   
                    <View style={recipesStyling.recipesContainer}>
                        <RecipeComponent level={'Easy'} name={'Healthy Banana Oatmeal Pancakes'}/>
                    </View>
                   

                    
                    
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}


export default Recipes