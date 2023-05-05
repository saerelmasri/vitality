import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const TargetMuscle = ({navigation, target, img, navLink}) => {
    let path = ''
    if(target === 'Chest'){
        path = require('../../assets/app-img/chest.jpg')
    }else if(target === 'Back'){
        path = require('../../assets/app-img/back.jpg')
    }else if(target === 'Shoulders'){
        path = require('../../assets/app-img/shoulder.jpg')
    }else if(target === 'Legs'){
        path = require('../../assets/app-img/legs.jpg')
    }else if(target === 'Arms'){
        path = require('../../assets/app-img/arms.jpg')
    }
    return(
        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: {navLink}})}}>
            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={path} imageStyle={{borderRadius: 10}}>
                <View style={workoutDashboardStyling.topContainer}>
                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                        Target muscle: {target}
                    </Text>
                </View>
                <View style={workoutDashboardStyling.bottomContainer}>
                    <View style={workoutDashboardStyling.exerciseCounter}>
                        <Text style={{fontSize: 20, fontWeight: 400, color : Color.white}}>
                            50 exercise
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const workoutDashboardStyling = StyleSheet.create({
    targetMuscleComponent: {
        width: width - 40,
        height: height / 5,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    topContainer: {
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    bottomContainer: {
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '5%'
    },
    exerciseCounter: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center'
    }

})
export default TargetMuscle