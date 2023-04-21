import { View, Alert, Pressable, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Color } from "../../../globalStyling"
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

const goalStyling = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        alignItems: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    backBtnContainer: {
        width: '100%',
        height: '10%',
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
    contentContainer: {
        borderWidth: 1,
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    span: {
        fontWeight: 600
    },
    descriptionContainer: {
        width: '100%',
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    goalContainer: {
        width: '80%',
        height: '65%',
        display: 'flex',
        justifyContent: 'space-around'
    }
})



export default Goal