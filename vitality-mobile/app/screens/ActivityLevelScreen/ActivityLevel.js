import { View, Alert, Pressable, Image, Text } from "react-native"
import { activityLevelStyle } from "./ActivityLevelStylings"
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

export default ActivityLevel