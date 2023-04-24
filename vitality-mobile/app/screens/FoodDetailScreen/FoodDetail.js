import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from 'react'
import { Color } from "../../../globalStyling";

const { height, width } = Dimensions.get('window')


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

const foodStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
    },
    backBtnContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
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
    headerMeal: {
        width: width,
        height: height / 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 300,
        color: Color.white
    },
    detailContainer: {
        width: width - 40,
        marginLeft: 20,
        height: height /3,
        display: 'flex',
        justifyContent: 'space-around', 
        marginTop: 50
    },
    detailStats: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 2,
        borderColor: Color.white
    },
    txtInput: {
        width: '30%',
        height: '70%',
        borderBottomWidth: 1
    },
    btnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    btn: {
        width: '50%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FoodDetail