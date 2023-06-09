import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
var JWT = " "
import { BASE_URL } from '@env'

const ActivityInfo = ({navigation}) => {
    const [ challengeName, setChallengeName ] = useState('')
    const [ workoutName, setWorkoutName ] = useState('')
    const [ rules, setRules ] = useState('')
    const [ competitionID, setCompetitionID ] = useState('')

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });


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
                    url: `${BASE_URL}/competition_route/createCompetition`,
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
                console.log(err.response.data.message)
            }
        }
    }
    return(
            <View style={activityInfoStyle.container}>
                <ScrollView>
                    <View style={activityInfoStyle.inputContainer}>
                        <Text style={{fontSize: 25, fontWeight: 500, color: Color.white}}>Set your workout challenge</Text>
                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white, paddingBottom: 10}}>Challenge Name</Text>
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
                            <Text style={{color: Color.white, paddingBottom: 10}}>Workout Name</Text>
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
                            <Text style={{color: Color.white, paddingBottom: 10}}>Your rule</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Set the minutes"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                                value={rules}
                                onChangeText={text => setRules(text)}
                            />
                            <Text style={{color: Color.white, fontSize: 15, paddingTop: 10}}>Enter time only in minutes</Text>
                        </View>
                    </View>

                    <View style={activityInfoStyle.btnContainer}>
                        <Button title={'Create'} action={createCompetition}/>
                    </View>
                    
                    
                </ScrollView>
            </View>
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
        height: width / 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    
    
})


export default ActivityInfo