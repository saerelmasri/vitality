import { View, ScrollView, SafeAreaView, Text, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";
import { Color } from "../../../globalStyling";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import InvitationCard from "../../Components/InvitationComponent/Invitation";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '@env'
import Indicator from "../../Components/ActivityIndicator/indicator";

const Invitation = ({navigation}) => {
    const [ JWT, setJWT ] = useState('')
    const [ invitations, setInvitations ] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token)
            })
            .catch(error => {
                console.log(error);
            })
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const fetchInvitations = async () => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/competition_route/allInvitation`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setInvitations(res.data.message);
                }).catch(err => {
                    console.log(err.response.data.message);
                })
            }
        }

        fetchInvitations()
    }, [JWT])

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
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.message);
        }) 
    }

    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={invitationStyle.container}>
                <ScrollView>
                    <Header action1={()=> navigation.navigate('PlaygroundDashboard')} action2={()=> {navigation.navigate('Leaderboard')}}/>
                    <View style={invitationStyle.headerTitle}>
                        <ImageBackground style={invitationStyle.headerCard} source={require('../../assets/app-img/challenge.jpg')} imageStyle={{borderRadius: 10}}>
                            <Text style={{fontSize: 32, fontWeight: 500, color: Color.black, textAlign: 'center', paddingLeft: '5%', paddingRight: '5%'}}>
                                Check who invite you to a challenge!
                            </Text>
                        </ImageBackground>
                    </View>
                    <View style={invitationStyle.disclaimerContent}>
                        <Text style={{fontSize: 15, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is accepted, it will start right away.
                        </Text>
                    </View>
                    <View style={invitationStyle.invitationContainer}>
                        { invitations.length === 0 ? (
                            <View style={{width: width, height: height / 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={require('../../assets/app-img/no-invitation1.png')} style={{width: 320, height: 320}}   resizeMode="contain"/>
                                    <Text style={{fontSize: 30, fontWeight: 500, color: Color.white}}>No invitations</Text>
                            </View>
                        ) : (
                            <ScrollView>
                            {
                                invitations.map(item => (
                                    <InvitationCard 
                                        from={item.creator_username} 
                                        key={item.id} 
                                        action1={() => {changeStatus(item.competition_id, "accepted")}} 
                                        action2={() => {changeStatus(item.competition_id, "declined")}} 
                                        action3={() => navigation.navigate('InvitationDetail',{ competitionInfo: { id: item.competition_id }} )}
                                    />
                                ))
                            }
                            </ScrollView>
                        )}
                        
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
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerTitle: {
        width: width,
        height: height / 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerCard: {
        width: width - 40,
        height: height / 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disclaimerContent: {
        width: width,
        height: height / 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    invitationContainer: {
        width: width,
        height: height / 1.7,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5%'
    },
})
export default Invitation