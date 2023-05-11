import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';


const TargetMuscle = ({target}) => {
    const navigation = useNavigation();

    let path = ''
    let link = ''
    if(target === 'Chest'){
        path = require('../../assets/app-img/chest.jpg')
        link = 'chest'
    }else if(target === 'Back'){
        path = require('../../assets/app-img/back.jpg')
        link = 'back'
    }else if(target === 'Shoulders'){
        path = require('../../assets/app-img/shoulder.jpg')
        link = 'shoulders'
    }else if(target === 'Legs'){
        path = require('../../assets/app-img/legs.jpg')
        link = 'upper legs'
    }else if(target === 'Arms'){
        path = require('../../assets/app-img/arms.jpg')
        link = 'upper arms'
    }
    return(
        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: link})}}>
            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={path} imageStyle={{borderRadius: 10}}>
                <View style={workoutDashboardStyling.topContainer}>
                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.black}}>
                        Target muscle: {target}
                    </Text>
                </View>
                <View style={workoutDashboardStyling.bottomContainer}>
                    <View style={workoutDashboardStyling.exerciseCounter}>
                        <Text style={{fontSize: 20, fontWeight: 400, color : Color.black}}>
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
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        backgroundColor: Color.white,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 15
    },
    bottomContainer: {
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '5%'
    },
    exerciseCounter: {
        backgroundColor: Color.white,
        borderRadius: 10,
        width: '35%',
        height: '70%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default TargetMuscle