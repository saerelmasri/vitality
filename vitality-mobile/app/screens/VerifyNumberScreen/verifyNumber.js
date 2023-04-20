import { View, Text, TextInput, Image, Pressable, Alert } from "react-native";
import { verifyNumberStyling } from "./verifyNumberStylings";
import Button from "../../Components/Button/Button";


const VerifyNumber = () => {
    return(
        <View style={verifyNumberStyling.mainContainer}>
            <View style={verifyNumberStyling.backBtn}>
                <Pressable onPress={() => Alert.alert('image clicked')}>
                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                </Pressable>
            </View>
            
            <View style={verifyNumberStyling.container}>
                <View style={verifyNumberStyling.headerContainer}>
                    <Text style={verifyNumberStyling.headerText}>We need to verify your phone number</Text>
                </View>
                <View style={verifyNumberStyling.descriptionContainer}>
                <Text style={verifyNumberStyling.descriptionText}>We sent you a SMS with a code to number <Text style={verifyNumberStyling.span} >+961 00 000 000</Text></Text>
                </View>

                <View style={verifyNumberStyling.codeContainer}>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                    <TextInput underlineColorAndroid="transparent" style={verifyNumberStyling.code} keyboardType="numeric"></TextInput>
                </View>

                <View style={verifyNumberStyling.expiredContainer}>
                    <Text style={verifyNumberStyling.expiredText}>Code expired in <Text style={verifyNumberStyling.span}>5:00 minutes</Text></Text>
                </View>

                <Button action={() => {console.log('Verify Number Action');}} title={'Verify Number'}/>
            </View>
        </View>
    );
}


export default VerifyNumber