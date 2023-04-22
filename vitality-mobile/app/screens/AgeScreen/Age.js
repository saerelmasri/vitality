import { View, Alert, Pressable, Image, Text, TextInput } from "react-native"
import { useRoute } from "@react-navigation/native"
import { useState } from 'react'
import { ageStyling } from "./AgeStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"

const Age = ({navigation}) => {
    const route = useRoute()
    const toPass = route.params.toPass

    const [ age, setAge ] = useState('')

    const data = {
        toPass,
        age: age
    }

    const checkAge = () => {
        if(age === ''){
            Alert.alert('Please enter your age to continue')
        }else{
            navigation.navigate('Goal', {data})
        }
    }
    return(
        <View style={ageStyling.mainContainer}>
            <View  style={ageStyling.backBtnContainer}>
                <View style={ageStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={ageStyling.contentContainer}>
                <View style={ageStyling.headerContainer}>
                    <Text style={ageStyling.headerText}>How <Text style={ageStyling.span}>old</Text> are you?</Text>
                </View>
                <View style={ageStyling.descriptionContainer}>
                    <Text style={ageStyling.descriptionText}>To give you a better experience we need to know your age</Text>
                </View>
                <View style={ageStyling.pickerContainer}>
                    <TextInput 
                        style={ageStyling.ageSelector} 
                        underlineColorAndroid="transparent" 
                        keyboardType="numeric"  
                        value={age}
                        onChangeText={(text) => setAge(text)}
                        placeholder="Age"
                    />
                </View>
                <NextBtn action={checkAge}/>
            </View>
        </View>
    )
}



export default Age