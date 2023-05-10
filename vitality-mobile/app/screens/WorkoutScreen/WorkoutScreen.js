import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import TargetMuscle from "../../Components/TargetMuscleComponent/TargetMuscle";
const { height, width } = Dimensions.get('window')


const WorkoutDashboard = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={workoutDashboardStyling.container}>
                <ScrollView>
                    <View style={workoutDashboardStyling.headerOptions}>
                        <TouchableOpacity style={workoutDashboardStyling.options} onPress={() => navigation.navigate('WorkoutDashboard')}>
                            <Text style={workoutDashboardStyling.text}>Workouts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={workoutDashboardStyling.options} onPress={() => navigation.navigate('CoachDashboard')}>
                            <Text style={workoutDashboardStyling.text}>Coaches</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={workoutDashboardStyling.headerTitle}>
                        <Text style={workoutDashboardStyling.title}>
                            Our Collections
                        </Text>
                    </View>

                    <View style={workoutDashboardStyling.targetMuscleContainer}>
                        <TargetMuscle target={'Chest'}/>
                        <TargetMuscle target={'Back'}/>
                        <TargetMuscle target={'Shoulders'}/>
                        <TargetMuscle target={'Legs'}/>
                        <TargetMuscle target={'Arms'}/>
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
    targetMuscleContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingBottom: 10
    },
    headerOptions: {
        width: width,
        height: height / 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    options: {
        width: '40%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        color: Color.black,
        fontWeight: 500
    }
})


export default WorkoutDashboard