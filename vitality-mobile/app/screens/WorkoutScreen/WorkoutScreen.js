import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const WorkoutDashboard = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={workoutDashboardStyling.container}>
                <ScrollView>
                    <View style={workoutDashboardStyling.headerTitle}>
                        <Text style={workoutDashboardStyling.title}>
                            Our Collections
                        </Text>
                    </View>

                    <View style={workoutDashboardStyling.targetMuscleContainer}>
                        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: 'chest'})}}>
                            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={require('../../assets/app-img/chest.jpg')} imageStyle={{borderRadius: 10, opacity: 0.6}}>
                                <View style={workoutDashboardStyling.topContainer}>
                                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                                        Target muscle: Chest
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

                        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: 'back'})}}>
                            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={require('../../assets/app-img/back.jpg')} imageStyle={{borderRadius: 10, opacity: 0.6}}>
                                <View style={workoutDashboardStyling.topContainer}>
                                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                                        Target muscle: Back
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

                        <TouchableOpacity  onPress={()=> {navigation.navigate('ExerciseListing', {target: 'shoulders'})}}>
                            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={require('../../assets/app-img/shoulder.jpg')} imageStyle={{borderRadius: 10, opacity: 0.6}}>
                                <View style={workoutDashboardStyling.topContainer}>
                                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                                        Target muscle: Shoulders
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

                        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: 'upper legs'})}}>
                            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={require('../../assets/app-img/legs.jpg')} imageStyle={{borderRadius: 10, opacity: 0.6}}>
                                <View style={workoutDashboardStyling.topContainer}>
                                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                                        Target muscle: Legs
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

                        <TouchableOpacity onPress={()=> {navigation.navigate('ExerciseListing', {target: 'upper arms'})}}>
                            <ImageBackground style={workoutDashboardStyling.targetMuscleComponent} source={require('../../assets/app-img/arms.jpg')} imageStyle={{borderRadius: 10, opacity: 0.6}}>
                                <View style={workoutDashboardStyling.topContainer}>
                                    <Text style={{fontSize: 25, fontWeight: 500, color : Color.white}}>
                                        Target muscle: Bicep/Tricep
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
                    </View>


                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const workoutDashboardStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerTitle: {
        width: width,
        height: height / 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 22,
        color: Color.white
    },
    titleTouch:{
        fontSize: 16,
        color: Color.white
    }, 
    videoContainers: {
        borderWidth: 1,
        width: width,
        height: height / 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%'
    },
    videoComponent: {
        width: width / 1.7,
        height: height / 6,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '5%',
        paddingBottom: '5%', 
        marginRight: 10
    },
    targetMuscleContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 10
    },
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
    emojiContainer: {
        width: '10%',
        height: '70%'
    },
    exerciseCounter: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center'
    }


})


export default WorkoutDashboard