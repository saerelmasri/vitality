import { View, ScrollView, Image, Text, Dimensions, ImageBackground, SafeAreaView } from "react-native";
import { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { BASE_URL } from '@env'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CoachInfoStyle } from "./CoachInfoStyle";

const CoachInfo = () => {
    const [JWT, setJWT] = useState('');
    const [ coach, setCoach ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const route = useRoute()
    const coachId = route.params.id
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
        setInterval(() => {
            const fetchCoaches = async() => {
                if (JWT) {
                    await axios({
                        method: 'GET',
                        url: `${BASE_URL}/coach/get_coach_extra_info/${coachId}`,
                        headers: {
                            'Authorization': JWT,
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    }).then(res => {
                        setIsLoading(true)
                        setInterval(() => {
                            setCoach(res.data.message[0]);
                            setIsLoading(false)
                        }, 2000)
                    }).catch(err => {
                        setIsLoading(false)
                        console.log(err.response.data);
                    })
                }
            }
    
            fetchCoaches()
        }, 10000)
        
    }, [JWT])
    return(
        <SafeAreaView style={{flex:1}}>
            <ImageBackground style={CoachInfoStyle.container} source={require('../../assets/app-img/ads.jpg')} blurRadius={10}>
                <ScrollView>
                    <View style={CoachInfoStyle.mainContainer}>
                        {
                            coach['photo_url'] !== null && coach['photo_url'] !== undefined ? (
                                <Image style={CoachInfoStyle.profile} source={{uri: `${coach['photo_url']}`}}/>
                            ) : (
                                <Image style={CoachInfoStyle.profile} source={require('../../assets/app-img/default.jpg')}/>
                            )
                        }
                        <View style={CoachInfoStyle.infoContainer}>
                            <View style={CoachInfoStyle.nameContainer}>
                                <Text style={{fontSize: 30, fontWeight: '500'}}>{coach['full_name']}</Text>
                                <Text style={{fontSize: 20, fontWeight: '400'}}>Experience: {coach['coach_experience']}</Text>
                            </View>
                            <View style={CoachInfoStyle.aboutContainer}>
                                <Text style={{fontSize: 20}}>About Me:{'\n'} {coach['description']}</Text>
                            </View>
                            <View style={CoachInfoStyle.infoCardContainer}>
                                <View style={[CoachInfoStyle.cardContainer]}> 
                                    <Text style={{fontSize: 20}}>Speciality:{'\n'}{coach['coach_type']}</Text>
                                </View>
                                <View style={[CoachInfoStyle.cardContainer]}> 
                                    <Text style={{fontSize: 20}}>Gym:{'\n'}{coach['gym']}</Text>
                                </View>
                            </View >
                            <View style={CoachInfoStyle.contactContainer}>
                                <Text style={{fontSize: 20}}>Contact Me: {coach['email']}</Text>

                            </View>
                            

                        </View>

                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default CoachInfo