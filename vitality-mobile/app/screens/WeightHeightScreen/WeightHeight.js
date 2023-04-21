import { View, Text, TextInput, Image, Pressable, Alert, TouchableOpacity } from "react-native";
import { weightHeightStylings } from "./WeightHeightStylings";
const WeightHeight = () => {

    return(
        <View style={weightHeightStylings.mainContainer}>
            <View style={weightHeightStylings.backBtn}>
                <Pressable onPress={() => Alert.alert('image clicked')}>
                    <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                </Pressable>
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
                        <TouchableOpacity style={weightHeightStylings.leftButton} onPress={() => {console.log('LB pressed');}}>
                            <Text style={weightHeightStylings.textBtn}>LB</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={weightHeightStylings.rightButton} onPress={() => {console.log('KG pressed');}}>
                            <Text style={weightHeightStylings.textBtn}>KG</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={weightHeightStylings.input}  underlineColorAndroid="transparent" keyboardType="numeric"></TextInput>
                </View>
                <View style={weightHeightStylings.heightContainer}>
                <Text style={weightHeightStylings.Title}>What is your height?</Text>
                    <View style={weightHeightStylings.buttonsContainer}>
                        <TouchableOpacity style={weightHeightStylings.leftButton} onPress={() => {console.log('FT pressed');}}>
                            <Text style={weightHeightStylings.textBtn}>FT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={weightHeightStylings.rightButton} onPress={() => {console.log('CM pressed');}}>
                            <Text style={weightHeightStylings.textBtn}>CM</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput style={weightHeightStylings.input}  underlineColorAndroid="transparent" keyboardType="numeric"></TextInput>
                </View>
            </View>
        </View>
    );
}

export default WeightHeight