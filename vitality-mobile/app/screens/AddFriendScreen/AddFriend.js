import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Friend from "../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
let JWT ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwMjQ2NDMsImV4cCI6MTY4MzAyODI0M30.u2z5BSxG8jGVIriQkEeIdV57SxqYf8ct3qeKU_LZAg8"

const AddFriend = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    const [ userDetail, setUserDetail ] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchUser = async() => {
                await axios({
                    method: 'GET',
                    url: 'http://192.168.1.104:5000/friends_route/displayUsers',
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setUserDetail(res.data.message);
                }).catch(err => {
                    console.log(err.response);
                })
            }

            fetchUser()
        }, 5000)
        return () => clearInterval(interval);
    }, [])
    
    const addFriend = async(id) => {
        await axios({
            method: 'POST',
            url: 'http://192.168.1.104:5000/friends_route/addFriend',
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
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={addFriendStyling.container}>
                <ScrollView>
                <View style={addFriendStyling.backBtnContainer}>
                        <View style={addFriendStyling.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
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
                        <ScrollView>
                            {userDetail.map((item) => (
                                <Friend key={item.id} name={item.full_name} photo={item.photo_url} action={() => {addFriend(item.id)}}/>
                            ))}
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
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
        height: height / 1.9,
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