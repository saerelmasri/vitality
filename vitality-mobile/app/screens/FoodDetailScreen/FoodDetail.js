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
                            <Text style={{fontSize: 18, color: Color.white}}>
                                Meal
                            </Text>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 150, backgroundColor: Color.grey}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Breakfast" value="breakfast" />
                                <Picker.Item label="Lunch" value="lunch" />
                                <Picker.Item label="Dinner" value="dinner" />
                                <Picker.Item label="Snack" value="snack" />
                            </Picker>
                        </View>
                        <View style={foodStyling.detailStats}>
                            <Text style={{fontSize: 18, color: Color.white}}>
                                Number of servings
                            </Text>
                            <TextInput style={foodStyling.txtInput} placeholder="Number of Serving"></TextInput>
                        </View>

                        <View style={foodStyling.detailStats}>
                            <Text style={{fontSize: 18, color: Color.white}}>
                                Serving Size
                            </Text>
                            <TextInput style={foodStyling.txtInput} placeholder="Serving Size"></TextInput>
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