import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Friend from "../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { BASE_URL } from '@env'
import Indicator from "../../Components/ActivityIndicator/indicator";

const AddFriend = ({navigation}) => {
    const [ JWT, setJWT ] = useState('')
    const [ userDetail, setUserDetail ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

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
        const fetchUser = async() => {
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
        fetchUser()
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
            <View style={addFriendStyling.container}>
                <ScrollView>
                    <View style={addFriendStyling.headerContainer}>
                        <View style={addFriendStyling.header}>
                            <Text style={{fontSize: 18, fontWeight: 500, marginBottom: 5}}>
                                Invite to workout with
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: 400}}>
                                You can surely invite your friends to workout together 
                                virtually and compete to increase motivation
                            </Text>
                        </View>
                    </View>
                    
                    <View style={addFriendStyling.friendListConteiner}>
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
    );
}

const addFriendStyling = StyleSheet.create({
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
        alignItems: 'center',
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
    searchContainer: {
        width: width,
        height: height / 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    findFriend: {
        width: width / 1.2,
        height: height / 14,
        borderRadius: 10,
        backgroundColor: Color.white,
        paddingLeft: '5%'
    }
})


export default AddFriend