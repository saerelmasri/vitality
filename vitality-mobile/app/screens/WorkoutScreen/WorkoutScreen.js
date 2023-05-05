import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import TargetMuscle from "../../Components/TargetMuscleComponent/TargetMuscle";
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
                        <TargetMuscle navLink={'chest'} target={'Chest'}/>
                        <TargetMuscle navLink={'back'} target={'Back'}/>
                        <TargetMuscle navLink={'shoulders'} target={'Shoulders'}/>
                        <TargetMuscle navLink={'upper legs'} target={'Legs'}/>
                        <TargetMuscle navLink={'upper arms'} target={'Arms'}/>
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
    }
})


export default WorkoutDashboard