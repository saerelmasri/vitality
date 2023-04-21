import { View, Alert, Pressable, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Color } from "../../../globalStyling"
import NextBtn from "../../Components/NextBtn/NextBtn"
import ActivityLevelTypes from "../../Components/activityLevel/ActivityComponent"

const ActivityLevel = () => {
    return(
        <View style={activityLevelStyle.mainContainer}>
            <View  style={activityLevelStyle.backBtnContainer}>
                <View style={activityLevelStyle.backBtn}>
                    <Pressable onPress={() => Alert.alert('image clicked')}>
                        <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                    </Pressable>
                </View>
            </View>
            <View style={activityLevelStyle.contentContainer}>
                <View style={activityLevelStyle.headerContainer}>
                    <Text style={activityLevelStyle.headerText}>Select <Text style={activityLevelStyle.span}>activity level</Text></Text>
                </View>
                <View style={activityLevelStyle.descriptionContainer}>
                    <Text style={activityLevelStyle.descriptionText}>To give you a better experience we need to know your activity level</Text>
                </View>
                <View style={activityLevelStyle.activityContainer}>
                    <ActivityLevelTypes title={'Sedentary'} description={'Little to no exercise or physical activity in daily routine.'}/>
                    <ActivityLevelTypes title={'Sedentary'} description={'Little to no exercise or physical activity in daily routine.'}/>
                    <ActivityLevelTypes title={'Sedentary'} description={'Little to no exercise or physical activity in daily routine.'}/>
                    <ActivityLevelTypes title={'Sedentary'} description={'Little to no exercise or physical activity in daily routine.'}/>
                    
                </View>

                
                
                <NextBtn/>
            </View>
        </View>
    )
}

const activityLevelStyle = StyleSheet.create({
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
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center'
    },
    headerContainer: {
        width: '100%',
        height: '7%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    activityContainer: {
        width: '100%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})
export default ActivityLevel