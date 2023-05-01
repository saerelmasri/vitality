import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY4Mjk1NTY0OCwiZXhwIjoxNjgyOTU5MjQ4fQ.XsmQVtKSNx6vtd_PlHngwbzbNjZqhFFQniamhlz8Pb8"

const ActivityInfo = ({navigation}) => {
    const [ challengeName, setChallengeName ] = useState('')
    const [ workoutName, setWorkoutName ] = useState('')
    const [ rules, setRules ] = useState('')
    const [ competitionID, setCompetitionID ] = useState('')

    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });


    const info = {
        "title": challengeName,
        "type": 'workout', 
        "workout_name": workoutName,
        "rules": rules,
        "reward": 150
    }

    const competitionInfo = {
        "id": competitionID
    }

    const createCompetition = async() => {
        if(challengeName === "" || workoutName === "" || rules === ""){
            Alert.alert('Please fill fields')
        }else{
            try {
                const res = await axios({
                    method: 'POST',
                    url: 'http://192.168.1.104:5000/competition_route/createCompetition',
                    data: info,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                if(res.data.status === 201){
                    setCompetitionID(res.data.competition_id)
                    Alert.alert(res.data.message)
                    navigation.navigate("InviteFriends", { competitionInfo: { id: res.data.competition_id } })
                }
            } catch (err) {
                console.error(err.response.data.message)
            }
        }
    }
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={activityInfoStyle.container}>
                <ScrollView>
                    <View style={activityInfoStyle.backBtnContainer}>
                        <View style={activityInfoStyle.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>Create Challenge</Text>
                    </View>
                    <View style={activityInfoStyle.inputContainer}>
                        <View style={activityInfoStyle.input}>
                            <Text>Workout</Text>
                        </View>
                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Challenge Name</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Enter challenge Name"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                                value={challengeName}
                                onChangeText={text => setChallengeName(text)}
                            />
                        </View>

                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Workout Name</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Enter your challenge objective"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                                value={workoutName}
                                onChangeText={text => setWorkoutName(text)}
                            />
                        </View>
                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Your rule</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Set the minutes"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                                value={rules}
                                onChangeText={text => setRules(text)}
                            />
                            <Text style={{color: Color.white, fontSize: 15}}>Enter time only in minutes</Text>
                        </View>
                    </View>

                    <View style={activityInfoStyle.btnContainer}>
                        <Button title={'Register'} action={createCompetition}/>
                    </View>
                    
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const activityInfoStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
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
        height: height / 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 25,
        fontWeight: 500,
        color: Color.white
    },
    inputContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    inputs:{
        width: width / 1.2,
        height: height / 7, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', 
    },
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    btnContainer: {
        width: width,
        height: width / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    
    
})


export default ActivityInfo