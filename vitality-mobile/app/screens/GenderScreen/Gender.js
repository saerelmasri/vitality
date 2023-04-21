import { View, Pressable, Image, Text, TouchableOpacity, Alert } from "react-native"
import { genderStylings } from "./GenderStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"

const Gender = () => {
    return(
        <View style={genderStylings.mainContainer}>
            <View  style={genderStylings.backBtnContainer}>
                <View style={genderStylings.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>

           <View style={genderStylings.contentContainer}>
                <View style={genderStylings.headerContainer}>
                    <Text style={genderStylings.headerText}>What is your <Text style={genderStylings.span}>gender</Text></Text>
                </View>
                <View style={genderStylings.descriptionContainer}>
                    <Text style={genderStylings.descriptionText}>To give you a better experience we need to know your gender</Text>
                </View>

                <View style={genderStylings.btnsContainer}>
                    <TouchableOpacity style={genderStylings.genderBtn}  onPress={() => {console.log('Male Pressed');}}>
                        <Image style={genderStylings.imgGender} source={require('../../assets/app-img/male.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={genderStylings.genderBtn} onPress={() => {console.log('Female Pressed');}}>
                        <Image source={require('../../assets/app-img/female.png')}></Image>
                    </TouchableOpacity>
                </View>
                <NextBtn/>
           </View>
        </View>
    )
}

export default Gender