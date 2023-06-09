import { View, Pressable, Image, Text, TouchableOpacity, Alert, ScrollView } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useState } from 'react'
import { genderStylings } from "./GenderStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Gender = ({navigation}) => {
    const [ gender, setGender ] = useState('')
    const route = useRoute()
    const data = route.params?.data

    const toPass = {
        weightHeight: data,
        gender: gender
    }

    const checkGender = () => {
        if(gender === ''){
            Alert.alert('Please select your gender')
        }else{
            navigation.navigate('Age', { toPass })
        }
    }
    return(
        <ScrollView>
            <View style={genderStylings.mainContainer}>
            <View style={genderStylings.contentContainer}>
                    <View style={genderStylings.headerContainer}>
                        <Text style={genderStylings.headerText}>What is your <Text style={genderStylings.span}>gender</Text></Text>
                    </View>
                    <View style={genderStylings.descriptionContainer}>
                        <Text style={genderStylings.descriptionText}>To give you a better experience we need to know your gender</Text>
                    </View>

                    <View style={genderStylings.btnsContainer}>
                        <TouchableOpacity style={genderStylings.genderBtn}  onPress={() => {setGender('male')}}>
                            <Image style={genderStylings.imgGender} source={require('../../assets/app-img/male.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={genderStylings.genderBtn} onPress={() => {setGender('female')}}>
                            <Image source={require('../../assets/app-img/female.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <NextBtn action={checkGender}/>
            </View>
            </View>
        </ScrollView>
    )
}

export default Gender