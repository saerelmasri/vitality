import { View, Text, TextInput, Image, Pressable, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useState } from 'react'
import { weightHeightStylings } from "./WeightHeightStylings";
import NextBtn from "../../Components/NextBtn/NextBtn";

const WeightHeight = ({navigation}) => {
    const [ weight, setWeight ] = useState('')
    const [ height, setHeight ] = useState('')
 
    const data = {
        userWeight: weight,
        userHeight: height
    }

    const checkInputs = () => {
        if(weight === '' || height === ''){
            Alert.alert('All fields are required')
        }else{
            navigation.navigate('Gender', {data})
        }
    }

    return(
        <ScrollView>
            <View style={weightHeightStylings.mainContainer}>  
                <View style={weightHeightStylings.headerContainer}>
                    <Text style={weightHeightStylings.headerText}>Please provide the following <Text style={weightHeightStylings.span}>information</Text></Text>
                </View>
                <View style={weightHeightStylings.descriptionContainer}>
                    <Text style={weightHeightStylings.descriptionText}>To give you a better experience we need to know your weight and height</Text>
                </View>

                <View style={weightHeightStylings.weightHeightContainer}>
                    <View style={weightHeightStylings.weightContainer}>
                        <Text style={weightHeightStylings.Title}>What is your weight?</Text>
                        <View style={weightHeightStylings.buttonsContainer}>
                            <View style={weightHeightStylings.leftButton}>
                                <Text style={weightHeightStylings.textBtn}>KG</Text>
                            </View>
                        </View>
                        <TextInput 
                            style={weightHeightStylings.input}  
                            underlineColorAndroid="transparent" 
                            keyboardType="numeric"
                            value={weight}
                            onChangeText={(text) => setWeight(text)}
                            placeholder="Weight"
                            ></TextInput>
                    </View>
                    <View style={weightHeightStylings.heightContainer}>
                    <Text style={weightHeightStylings.Title}>What is your height?</Text>
                        <View style={weightHeightStylings.buttonsContainer}>
                            <View style={weightHeightStylings.leftButton}>
                                <Text style={weightHeightStylings.textBtn}>CM</Text>
                            </View>
                        </View>
                        <TextInput 
                            style={weightHeightStylings.input}  
                            underlineColorAndroid="transparent" 
                            keyboardType="numeric"
                            value={height}
                            onChangeText={(text) => setHeight(text)}
                            placeholder="Height"
                        ></TextInput>
                        
                    </View>
                    
                </View>
                <NextBtn action={checkInputs}/>
            </View>
            
        </ScrollView>
    );
}

export default WeightHeight