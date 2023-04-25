import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import axios from 'axios'
import CardComponent from "../../Components/Card/CardComponent";
const { height, width } = Dimensions.get('window')
import Indicator from '../../Components/ActivityIndicator/indicator'
import { API_KEY_EXERCISES } from '@env'


const ExerciseListing = ({navigation}) => {
    const route = useRoute()
    const listingTarget = route.params.target
    const [ exercise, setExercise ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const fetchExercise = async (listingTarget) => {
            await axios({
                method: 'GET',
                url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${listingTarget}`,
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': API_KEY_EXERCISES,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'  
                },
            }).then(res => {
                setIsLoading('true')
                setTimeout(() => {
                    const exerciseData = res.data && res.data.map(exercise => ({
                        name: exercise.name,
                        gifUrl: exercise.gifUrl,
                        target: exercise.target
                    }));
                    setExercise(exerciseData);
                    setIsLoading(false)
                }, 2000);
                
            }).catch((err) => {
                setIsLoading(false)
                console.log(err.response);
            })
        }
    
        fetchExercise(listingTarget); // Add parentheses to call the function with the listingTarget parameter
    
    }, [])
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={workoutDashboardStyling.container}>
                <ScrollView>
                    <View style={workoutDashboardStyling.backBtnContainer}>
                        <View style={workoutDashboardStyling.backBtn}>
                            <Pressable onPress={() => navigation.navigate('WorkoutDashboard')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    {isLoading ? (<Indicator/>) : (
                        <>
                            <View style={workoutDashboardStyling.header}>
                                <Text style={{fontSize: 25, fontWeight: 500, color: Color.white, textTransform: 'capitalize', textDecorationLine: 'underline'}}>
                                    {listingTarget}
                                </Text>
                            </View>

                            <View style={workoutDashboardStyling.videoContainer}>
                                <ScrollView>
                                {exercise.slice(0, 50).map((exerciseData) => (
                                    <CardComponent text={exerciseData.name} target={exerciseData.target} image={exerciseData.gifUrl}/>
                                ))}
                                </ScrollView>
                            </View>
                        </>
                    )}
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
    backBtnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
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
    header: {
        height: height / 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingTop: '5%'
    },
    cardComponent: {
        width: width / 1.2,
        height: height / 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: '5%'
    },
    textCard: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'

    }

})


export default ExerciseListing