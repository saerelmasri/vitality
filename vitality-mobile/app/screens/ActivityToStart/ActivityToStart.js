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

const ActivityToStart = ({navigation}) => {
    AsyncStorage.getItem('jwt')
    .then(token => {
        JWT = token
    })
    .catch(error => {
        console.log(error);
    });
    const route = useRoute()
    const competitionID = route.params.competitionInfo

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        const fetchInvitation = async() => {
            await axios({
                method: 'GET',
                url: `${BASE_URL}/competition_route/allUserInvitated/${competitionID['id']}`,
                data: { competition_id: competitionID['id'] },
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.data.status === 201){
                    setUsers(res.data.message)
                }
            }).catch(err => {
                console.log(err.response);
            })
        }

        fetchInvitation()
    }, [])


    

    const startCompetition = async() => {
        await axios({
            method: 'PUT',
            url: `${BASE_URL}/competition_route/startCompetition`,
            data: {
                "id": competitionID['id'],
                "status": "started"
            },
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.data.status === 201){
                navigation.navigate('onGoingActivity', { competitionID: competitionID['id'] })
            }
        }).catch(err => {
            console.error(err.response.data.message);
        })
    }

    const cancelCompetition = async() => {
        await axios({
            method: 'DELETE',
            url: `${BASE_URL}/competition_route/deleteCompetiton`,
            data: {
                "id": competitionID['id']
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
            console.error(err.response.data.message);
        })
    }

    
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={activityToStartStyling.container}>
                <ScrollView>
                    <View style={activityToStartStyling.backBtnContainer}>
                        <View style={activityToStartStyling.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={activityToStartStyling.header}>
                        <Text style={activityToStartStyling.txt}>Challenge Dashboard</Text>
                    </View>
                    
                    <View style={activityToStartStyling.detailContainer}>
                        <View style={activityToStartStyling.detailInfo}>
                            <Text style={activityToStartStyling.leftTxt}>
                                Friends invitated
                            </Text>
                        </View>
                        <View style={activityToStartStyling.friends}>
                        {users && users.length && users[0].nickname ? (
                            <ScrollView>
                                {users.map(user => (
                                    <View style={activityToStartStyling.friendItem}>
                                        <Text style={activityToStartStyling.leftTxt}>{user['nickname']}</Text>
                                        <Text style={activityToStartStyling.leftTxt}>{user['status']}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        ): (
                            <View style={activityToStartStyling.item}>
                                <Text style={activityToStartStyling.rightTxt}>No one has accepted yet</Text>
                            </View>
                        )}
                        </View>
                    </View>
                    <View style={activityToStartStyling.disclaimer}>
                        <Text style={{fontSize: 18, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is started, it will start right away.   
                        </Text>

                    </View>
                    <View style={activityToStartStyling.topBtn}>
                        <Button title={'Start Competition'} action={() => startCompetition()}/>
                    </View>
                    <View style={activityToStartStyling.topBtn}>
                        <Button title={'Cancel competition'} action={() => cancelCompetition()}/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const activityToStartStyling = StyleSheet.create({
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
        height: height / 2.2,
        display: 'flex',
    },
    detailInfo: {
        width: width,
        height: height / 17,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    friends: {
        height: '87%',
        display: 'flex',
        alignItems: 'center'
        
    },
    friendItem: {
        height: height / 19,
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    item: {
        height: height / 19,
        width: width,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    leftTxt: {
        fontSize: 22,
        fontWeight: 500,
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


export default ActivityToStart