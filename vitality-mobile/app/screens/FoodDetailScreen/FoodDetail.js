import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react'
import { Color } from "../../../globalStyling";
import { foodStyling } from "./FoodDetailStyle";

const FoodDetail = () => {
    const [selectedValue, setSelectedValue] = useState("java");

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={foodStyling.container}>
                <ScrollView>
                    <View style={foodStyling.backBtnContainer}>
                        <View style={foodStyling.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={foodStyling.headerMeal}>
                        <Text style={foodStyling.headerTitle}>
                            Banana
                        </Text>
                    </View>

                    <View style={foodStyling.detailContainer}>
                        <View style={foodStyling.detailStats}>
                            <Text style={foodStyling.text}>
                                Meal
                            </Text>
                            <Text style={foodStyling.text}>
                                Breakfast
                            </Text>
                        </View>
                        <View style={foodStyling.detailStats}>
                            <Text style={{fontSize: 18, color: Color.white}}>
                                Serving Size
                            </Text>
                            <TextInput style={foodStyling.txtInput} placeholder="Serving Size"></TextInput>
                        </View>
                    </View>

                    <View style={foodStyling.foodStats}>
                        <View style={foodStyling.top}>
                            <View style={foodStyling.calorieCounter}>
                                <Text style={{fontSize: 45, fontWeight: 500, color: Color.white}}>
                                    2,000
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
                                        200g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Protein
                                    </Text>
                                </View>
                                <View style={foodStyling.statInfo}>
                                    <Text style={foodStyling.numberStyle}>
                                        200g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Protein
                                    </Text>
                                </View>
                                <View style={foodStyling.statInfo}>
                                    <Text style={foodStyling.numberStyle}>
                                        200g
                                    </Text>
                                    <Text style={foodStyling.textStyle}>
                                        Protein
                                    </Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    <View style={foodStyling.btnContainer}>
                        <TouchableOpacity style={foodStyling.btn}>
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