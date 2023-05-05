import { View, ScrollView, SafeAreaView, Image, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import LoginProvider, { LoginContext, useLogin } from "../../context/LoginProvider";
var JWT =""
import { BASE_URL } from '@env'

const Profile = ({navigation}) => {
    const [profileDetail, setProfileDetail ] = useState([])
    const [ JWT, setJWT ] = useState('')
    const [ image, setImage ] = useState('')
    const { handleLogout } = useLogin()

    useEffect(() => {
        AsyncStorage.getItem('jwt')
            .then(token => {
                setJWT(token);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    useEffect(() => {
        const fetUserDetails = async() => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/user_route/user_details`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setProfileDetail(res.data.message[0]);
                }).catch(err => {
                    console.log(err.response.data);
                });
            }
        }

        fetUserDetails()
        
        const fetchLastPhoto = async () => {
            if(JWT){
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/photos_route/getLastPhotoUrl`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setImage(res.data.message.photo_url)
                }).catch(err => {
                    console.log(err.response);
                })
            }
        }
        fetchLastPhoto();
    }, [JWT]);

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={profileStyling.container}>
                <ScrollView>
                    <ImageBackground style={profileStyling.profileContainer} source={require('../../assets/app-img/profile.png')} imageStyle={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
                        <View style={profileStyling.infoContainer}>
                            <View style={profileStyling.profileAvatar}>
                                <Text style={profileStyling.avatarTxt}>Your Profile</Text>
                                {
                                    profileDetail.photo_url ? (
                                        <Image style={profileStyling.avatar} source={{ uri: `${image}`}}/>
                                    ) : (
                                        <Image style={profileStyling.avatar} source={require('../../assets/app-img/default.jpg')}/>
                                    )
                                }
                                <Text style={profileStyling.avatarTxt}>{profileDetail['full_name']}</Text>
                                <Text style={profileStyling.avatarTxt}>@{profileDetail['nickname']}</Text>
                            </View>
                            <View style={profileStyling.levelContainer}>
                                <Text style={profileStyling.avatarTxt}>
                                    Level {profileDetail['level']}
                                </Text>
                                <Text style={profileStyling.avatarTxt}>
                                {profileDetail['progress']} / 500
                                </Text>
                            </View>  
                        </View>
                    </ImageBackground>

                    <View style={profileStyling.collectionSection}>
                        <View style={profileStyling.optionSection}>
                            <TouchableOpacity onPress={() => navigation.navigate('Settins')}>
                                <Text style={profileStyling.optionTxt}>Settings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('FriendList')}>
                            <Text style={profileStyling.optionTxt}>Friend/Add Friends</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLogout()}>
                            <Text style={profileStyling.optionTxt}>Log Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const profileStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    profileContainer: {
        width: width, 
        height: height / 2.2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoContainer: {
        borderColor: Color.white,
        width: width / 2.5,
        height: height / 3
    },
    profileAvatar: {
        borderColor: Color.white,
        height: height / 4.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    avatar: {
        borderColor: Color.white,
        width: '60%',
        height: '55%',
        borderRadius: 100,
        backgroundColor: Color.white
    },
    avatarTxt: {
        color: Color.white, 
        fontSize: 20, 
        fontWeight: 500,
        marginTop: 5,
        marginBottom: 5
    },
    levelContainer: {
        borderColor: Color.white,
        height: height / 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    collectionSection: {
        width: width, 
        height: height / 2,
        backgroundColor: Color.grey,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    optionSection: {
        width: width / 1.2,
        height: height / 3,
        display: 'flex',
        justifyContent: 'center',
    },
    optionTxt: {
        fontSize: 30,
        fontWeight: 500,
        marginBottom: '2%'
    }
})


export default Profile

