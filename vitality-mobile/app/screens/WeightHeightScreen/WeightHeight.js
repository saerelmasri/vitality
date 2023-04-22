import { View, Text, TextInput, Image, Pressable, Alert, TouchableOpacity, ScrollView } from "react-native";
import { useState } from 'react'
import { weightHeightStylings } from "./WeightHeightStylings";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NextBtn from "../../Components/NextBtn/NextBtn";

var JWT = ''

const WeightHeight = ({navigation}) => {
    const [ weight, setWeight ] = useState('')
    const [ height, setHeight ] = useState('')
    const [ metricWeight, setMetricWeight ] = useState('LB')
    const [ metricHeight, setMetricHeight ] = useState('LB')

    AsyncStorage.getItem('token')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });

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
                <View style={weightHeightStylings.backContainer}>
                    <View style={weightHeightStylings.backBtn}>
                        <Pressable onPress={() => Alert.alert('image clicked')}>
                            <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                        </Pressable>
                    </View>
                </View>
                
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
                            <TouchableOpacity style={weightHeightStylings.leftButton} onPress={() => {setMetricWeight('LB')}}>
                                <Text style={weightHeightStylings.textBtn}>LB</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={weightHeightStylings.rightButton} onPress={() => {setMetricWeight('KG')}}>
                                <Text style={weightHeightStylings.textBtn}>KG</Text>
                            </TouchableOpacity>
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
                            <TouchableOpacity style={weightHeightStylings.leftButton} onPress={() => {setMetricHeight('FT')}}>
                                <Text style={weightHeightStylings.textBtn}>FT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={weightHeightStylings.rightButton} onPress={() => {setMetricHeight('CM')}}>
                                <Text style={weightHeightStylings.textBtn}>CM</Text>
                            </TouchableOpacity>
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