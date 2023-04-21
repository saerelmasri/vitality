import { View, Alert, Pressable, Image, Text } from "react-native"
import { goalStyling } from "./GoalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import GoalBtn from "../../Components/GoalBtn/GoalBtn"

const Goal = () => {
    return(
        <View style={goalStyling.mainContainer}>
            <View  style={goalStyling.backBtnContainer}>
                <View style={goalStyling.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={goalStyling.contentContainer}>
                <View style={goalStyling.headerContainer}>
                    <Text style={goalStyling.headerText}>What is your <Text style={goalStyling.span}>goal?</Text></Text>
                </View>
                <View style={goalStyling.descriptionContainer}>
                    <Text style={goalStyling.descriptionText}>To give you a better experience we need to know your fitness goal</Text>
                </View>
                <View style={goalStyling.goalContainer}>
                    <GoalBtn goalName={'To lose weight.'}/>
                    <GoalBtn goalName={'To gain weight.'}/>
                    <GoalBtn goalName={'To lose fat.'}/>
                    <GoalBtn goalName={'To build muscles..'}/>
                </View>
                
                <NextBtn/>
            </View>
        </View>
    )
}
export default Goal