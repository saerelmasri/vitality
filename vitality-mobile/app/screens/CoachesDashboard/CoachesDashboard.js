import { View, ScrollView, Image, Text, Dimensions } from "react-native";
import { useEffect, useState } from 'react'
import { BASE_URL } from '@env'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Color } from "../../../globalStyling";
import { coachDashboardStyle } from "./CoachesDashboardStyle";
const { width } = Dimensions.get('window')
import CoachComponent from "../../Components/CoachComponent/CoachComponent";
import Indicator from "../../Components/ActivityIndicator/indicator";


const CoachDashboard = ({navigation}) => {
    const [JWT, setJWT] = useState('');
    const [ coaches, setCoaches ] = useState([])
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
        const fetchCoaches = async() => {
            if (JWT) {
                await axios({
                    method: 'GET',
                    url: `${BASE_URL}/coach/allCoaches`,
                    headers: {
                        'Authorization': JWT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    setIsLoading(true)
                    setInterval(() => {
                        setCoaches(res.data.message);
                        setIsLoading(false)
                    }, 2000)
                }).catch(err => {
                    setIsLoading(false)
                    console.log(err.response.data);
                })
            }
        }

        fetchCoaches()
    }, [JWT])

    return(
            <View style={coachDashboardStyle.container}>
                <ScrollView>
                    <View style={coachDashboardStyle.header}>
                        <Text style={coachDashboardStyle.text}>Contact one of our certified coaches!</Text>
                    </View>
                    <View style={coachDashboardStyle.aiBtn}>
                        <View>
                            <View style={coachDashboardStyle.chefTxt} >
                                <Text style= {{fontSize: 20, fontWeight: 500, color: Color.white, textShadowColor: 'black',  textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5}}>
                                    Get help and achieve your fitness goal!
                                </Text>
                            </View>
                            <Image source={require('../../assets/app-img/coaching.jpg')} style={{resizeMode: 'cover', height: 150, width: 340, borderRadius: 10}}/>
                        </View>
                    </View>
                    <View style={coachDashboardStyle.header}>
                        <Text style={coachDashboardStyle.text}>Our coaches</Text>
                    </View>

                    <View style={coachDashboardStyle.coachesContainer}>
                        { isLoading ? (
                            <Indicator/>
                        ) : (
                            <ScrollView style={{width: width, flex: 1,}}>
                            {
                                coaches.map((item, index) => (
                                    <CoachComponent name={item.full_name} experience={item.coach_experience} gym={item.gym} avatar={item.photo_url} action={() => navigation.navigate('CoachInfo', {id: item.id})}/>
                                ))
                            }   
                            </ScrollView>
                        )}
                   </View>
                </ScrollView>
            </View>
    );
}

export default CoachDashboard