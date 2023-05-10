import { View, ScrollView, Alert, Text } from "react-native";
import { addFriendStyling } from "./AddFriendStyle";
import Friend from "../../Components/FriendComponent/Friend";
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
                            <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 5}}>
                                Invite to workout with
                            </Text>
                            <Text style={{fontSize: 18, fontWeight: 400}}>
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

export default AddFriend