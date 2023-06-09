import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import FriendComponent from "../../Components/ListFriend/ListFriend";
const { height, width } = Dimensions.get('window')
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { BASE_URL } from '@env'
import Indicator from "../../Components/ActivityIndicator/indicator";
import NoFriends from "../../Components/NoFriends/NoFriends";
import Friend from "../../Components/FriendComponent/Friend";

const FriendList = ({navigation}) => {

    const [ friend, setFriends ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ userDetail, setUserDetail ] = useState([])
    const [ JWT, setJWT ] = useState('')
    
    useEffect(() => {
        const interval = setInterval(() => {
            AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token)
            })
            .catch(error => {
                console.log(error);
            })
        }, 2000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const fetchUsers = async() => {
            if (JWT) {
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/friends_route/myfriends`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setIsLoading(true)
                    setInterval(() => {
                        setFriends(res.data.message);
                        setIsLoading(false)
                    }, 2000)
                }).catch(err => {
                    setIsLoading(false)
                    console.log(err.response.data);
                })
            }
        }
        fetchUsers()

        const fetchSuggestions = async() => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/friends_route/displayUsers`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setIsLoading(true)
                    setInterval(() => {
                        setUserDetail(res.data.message);
                        setIsLoading(false)
                    }, 2000)
                }).catch(err => {
                    setIsLoading(false)
                    console.log(err.response);
                })
            }
        }
        fetchSuggestions()
    }, [JWT])

    const addFriend = async(id) => {
        await axios({
            method: 'POST',
            url: `${BASE_URL}/friends_route/addFriend`,
            data: {
                "friend_id": id
            },
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if(res.data.status === 201){
                Alert.alert('Added to friend list')
            }
        }).catch(err => {
            Alert.alert(res.response.data.message)
        })
    }


    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={friendStyle.container}>
                <ScrollView>
                    <View style={friendStyle.headerContainer}>
                        <View style={friendStyle.header}>
                            <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 5}}>
                                Invite to workout with
                            </Text>
                            <Text style={{fontSize: 18, fontWeight: 400}}>
                                You can surely invite your friends to workout together 
                                virtually and compete to increase motivation
                            </Text>
                        </View>
                    </View>
                    <View style={friendStyle.listFriendTxtContainer}>
                        <Text style={{fontSize: 28, color: Color.white, fontWeight: 600}}>
                            Workout Friends
                        </Text>
                    </View>
                    <View style={friendStyle.friendListConteiner}>
                    {isLoading ? (
                        <Indicator />
                    ) : friend && friend.length > 0 ? (
                        <ScrollView>
                            {friend.map((item) => (
                                <FriendComponent key={item.id} name={item.nickname} photo={item.photo_url} />
                            ))}
                        </ScrollView>
                    ) : (
                        <NoFriends />
                    )}
                    </View>
                    <View style={friendStyle.listFriendTxtContainer}>
                        <Text style={{fontSize: 28, color: Color.white, fontWeight: 600}}>
                            Recommended profiles
                        </Text>
                    </View>
                    <View style={friendStyle.friendListConteiner}>
                        { isLoading ? (
                            <Indicator/>
                        ):(
                            <ScrollView>
                                {userDetail.map((item) => (
                                    <Friend key={item.id} name={item.full_name} photo={item.photo_url} action={() => {addFriend(item.id)}}/>
                                ))}
                            </ScrollView>
                        )}
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const friendStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerContainer: {
        width: width,
        height: height / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: height / 6,
        width: width / 1.2,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    listFriendTxtContainer: {
        width: width,
        height: height / 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    friendListConteiner: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%'
    }
})


export default FriendList