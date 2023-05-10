import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
import Friend from "../../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
//var JWT = ""
import { BASE_URL } from '@env'
import Indicator from "../../../Components/ActivityIndicator/indicator";

const InviteFriends = ({navigation}) => {
    const [JWT, setJWT] = useState(null)
    const route = useRoute()
    const competitionID = route.params.competitionInfo

    const [ friends, setFriends ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        const getToken = async () => {
          try {
            const token = await AsyncStorage.getItem('jwt');
            setJWT(token || '');
          } catch (error) {
            console.log(error);
          }
        };
        getToken();
    }, []);

    const deleteCompetition = async() => {
        await axios({
            method: 'DELETE',
            url: `${BASE_URL}/competition_route/deleteCompetiton`,
            data: competitionID,
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.data.status === 201){
                navigation.goBack()
            }
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    
    useEffect(() => {
        const fetchFriends = async () => {
          try {
            const res = await axios({
              method: 'GET',
              url: `${BASE_URL}/friends_route/myfriends`,
              headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });
            setIsLoading(true)
            setInterval(() => {
                setFriends(res.data.message);
                setIsLoading(false);
            }, 2000)
          } catch (err) {
            setIsLoading(false);
            console.log(err.response.data);
          }
        };
        fetchFriends();

    }, [JWT]);

    
    const sendInvitation = async(recipient_id) => {
        await axios({
            method: 'POST',
            url: `${BASE_URL}/competition_route/sendInvitation`,
            data: {
                "competition_id": competitionID['id'],
                "recipient_id": recipient_id,
                "status": "Pending"
            },
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            Alert.alert(res.data.message);
        }).catch(err => {
            Alert.alert(err.response.data.message)
        })
    }


    return(
            <View style={activityInfoStyle.container}>
                <ScrollView>
                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>Invite Friends</Text>
                    </View>

                    <View style={activityInfoStyle.friendsContainer}>
                        <View style={activityInfoStyle.headerFriend}>
                            <Text style={{fontSize: 17, fontWeight: 500, color: Color.white}}>Challenge a friend</Text>
                        </View>
                        <View style={activityInfoStyle.friendsSection}>
                            { isLoading ? (
                                <Indicator/>
                            ) : friends.length > 0 ? (
                                <ScrollView>
                                {friends.map(friend => (
                                    <Friend key={friend.id} name={friend.nickname} photo={friend.photo_url} action={() => sendInvitation(friend.id)}/>
                                ))}
                                </ScrollView>
                            ) : (
                                <View style={{width: width, height: height / 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/app-img/nofriend.png')} style={{height: 250, width: 250}}/>
                                    <Text style={{fontSize: 25, fontWeight: 500, color: Color.white}}>Add friends to compete with!</Text>

                                </View>
                            )}
                        </View>
                    </View>
                    <View style={activityInfoStyle.btnContainer}>
                        <Button title={'Continue'} action={()=> navigation.navigate('PlaygroundDashboard')}/>
                    </View>
                    <View style={activityInfoStyle.btnContainer}>
                        <Button title={'Delete Competition'} action={()=> deleteCompetition()}/>
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
    friendsContainer: {
        width: width,
        height: height / 2,
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: '10%',
    },
    btnContainer: {
        width: width,
        height: width / 3.5,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    friends: {
        width: width / 1.3,
        height: height / 9,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    headerFriend: {
        width: width,
        height: height / 18,
        display: 'flex',
        justifyContent: 'center', 
        paddingLeft: '10%'
    },
    friendsSection: {
        width: width,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    addContainer: {
        height: '100%',
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
    
})


export default InviteFriends