import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const WorkoutDashboard = () => {
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={workoutDashboardStyling.container}>
                <ScrollView>
                    <View style={workoutDashboardStyling.headerTitle}>
                        <Text style={workoutDashboardStyling.title}>
                            Our Popular Routines
                        </Text>
                        <Pressable onPress={() => {Alert.alert('More')}}>
                            <Text style={workoutDashboardStyling.titleTouch}>
                                View all
                            </Text>
                        </Pressable>
                    </View>

                    <View style={workoutDashboardStyling.titleTouch}>

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
    }
})


export default WorkoutDashboard