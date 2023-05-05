import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
const { height, width } = Dimensions.get('window')
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
var JWT = ""
import { BASE_URL } from '@env'

const InvitationDetail = ({navigation}) => {
    const route = useRoute()
    const competitionID = route.params.competitionInfo

    const [ challengeDetails, setChallengeDetails ] = useState([])

    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });

    useEffect(()=> {
        const fetchDetail = async() => {
            await axios({
                method: 'POST',
                url: `${BASE_URL}/competition_route/challengeDetails`,
                data: {
                    "challenge_id": competitionID['id']
                },
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setChallengeDetails(res.data.message);
            }).catch(err => {
                console.log(err.response.data);
            })
        }
        fetchDetail()
    }, [])

    const changeStatus = async(id, statusInfo) => {
        await axios({
            method: 'PUT',
            url: `${BASE_URL}/competition_route/changeStatus`,
            data: {
                "competition_id": id,
                "status": statusInfo
            },
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.data.status === 201){
                navigation.navigate('PlaygroundDashboard')
            }
        }).catch(err => {
            Alert.alert(err.response.message)
            navigation.navigate('PlaygroundDashboard')
        }) 
    }
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={invitationStyle.container}>
                <ScrollView>
                    <View style={invitationStyle.backBtnContainer}>
                        <View style={invitationStyle.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={invitationStyle.header}>
                        <Text style={invitationStyle.txt}>Challenge Details</Text>
                    </View>
                    <View style={invitationStyle.invitationName}>
                        <Text style={{fontSize: 28, color: Color.white}}> 
                            {challengeDetails.title} challenge!
                        </Text>
                    </View>
                    <View style={invitationStyle.detailContainer}>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Challenge Type 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                Workout
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Workout Name 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                {challengeDetails.workout_name}
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Rules 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                {challengeDetails.rules}
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Reward 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                {challengeDetails.reward} pts
                            </Text>
                        </View>
                    </View>
                    <View style={invitationStyle.disclaimer}>
                        <Text style={{fontSize: 18, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is started, it will start right away.   
                        </Text>

                    </View>
                    <View style={invitationStyle.topBtn}>
                        <Button title={'Accept'} action={() => changeStatus(competitionID['id'], "accepted")}/>
                    </View>
                    <View style={invitationStyle.topBtn}>
                        <Button title={'Decline'} action={() => changeStatus(competitionID['id'], "declined")}/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const invitationStyle = StyleSheet.create({
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
        width: 310,
        height: 80, 
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
    invitationName: {
        width: width,
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    detailContainer: {
        width: width,
        height: height / 3,
        display: 'flex',
        justifyContent: 'center'
    },
    detailInfo: {
        width: width,
        height: height / 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    leftTxt: {
        fontSize: 25,
        fontWeight: 500,
        color: Color.white
    },
    rightTxt: {
        fontSize: 20,
        color: Color.white
    },
    topBtn: {
        width: width,
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disclaimer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    }
    
    
    
})


export default InvitationDetail