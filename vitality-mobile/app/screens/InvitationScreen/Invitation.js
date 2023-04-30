import { View, ScrollView, SafeAreaView, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Color } from "../../../globalStyling";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import InvitationCard from "../../Components/InvitationComponent/Invitation";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY4Mjg2OTY2NSwiZXhwIjoxNjgyODczMjY1fQ.e-liGJRdmb1w2HSQPxr-Ee3ndRTeM5sTG0NFkviBqd0"


const Invitation = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const [ invitations, setInvitations ] = useState([])

    useEffect(() => {
        const fetchInvitations = async () => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/competition_route/allInvitation',
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

        fetchInvitations()
    }, [])

    const changeStatus = async(id, statusInfo) => {
        await axios({
            method: 'PUT',
            url: 'http://192.168.1.104:5000/competition_route/changeStatus',
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
                        <Text style={{fontSize: 30, fontWeight: 400, color: Color.white}}>
                            Check who invite you to a challenge!
                        </Text>
                    </View>
                    <View style={invitationStyle.disclaimerContent}>
                        <Text style={{fontSize: 15, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is accepted, it will start right away.   
                        </Text>
                    </View>
                    <View style={invitationStyle.invitationContainer}>
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
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
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