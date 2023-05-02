import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
const { height, width } = Dimensions.get('window')
import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwMzAzMTIsImV4cCI6MTY4MzAzMzkxMn0.Nh4xQBuLclimi68Qr_xIPTJsKd_9hnsow82RV9tnR6w"
import CountDown from "react-native-countdown-component";

const OnGoingActivity = ({navigation}) => {
    // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    const route = useRoute()
    const id = route.params.competitionID
    const [ challengeDetail, setChallengeDetail ] = useState([])
    const [isCountdownFinished, setIsCountdownFinished] = useState(false)
    const [timeInMinutes, setTimeInMinutes] = useState(null)

    const handleCountdownFinish = () => {
        setIsCountdownFinished(true);
    };

    useEffect(() => {
        const fetchInfoCompetition = async() => {
            await axios({
                method: 'POST',
                url: 'http://192.168.1.104:5000/competition_route/challengeDetails',
                data: {
                    "challenge_id": id
                },
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if(res.data.status === 201){
                    setChallengeDetail(res.data.message);
                    const time = res.data.message.rules;
                    setTimeInMinutes(time * 60);
                }
            }).catch(err => {
                console.log(err.response.data);
            })
        }
    
        fetchInfoCompetition()
    
    }, [id])


    const finishCompetition = async() => {
        await axios({
            method: 'POST',
            url: 'http://192.168.1.104:5000/competition_route/winner',
            data: {
                "challenge_id": id,
                "rewards": challengeDetail.reward
            },
            headers: {
                'Authorization': JWT,
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data.message);
            if(res.data.status === 201){
                navigation.navigate('Winner/Loser', {title: "winner"})
            }else{
                navigation.navigate('Winner/Loser', {title: "loser"})
            }
        }).catch(err => {
            console.log(err.response.data);
        })
    }
    const time = challengeDetail.rules

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <ImageBackground style={onGoingActivityStyling.container} source={require('../../../assets/app-img/ads.jpg')}>
                <ScrollView>
                    <View style={onGoingActivityStyling.content}>
                        
                        <View style={onGoingActivityStyling.timingConteiner}>
                            <View style={onGoingActivityStyling.timing}>
                                <CountDown
                                    size={30}
                                    until={ timeInMinutes * 60}
                                    showSeparator
                                    timeToShow={['M', 'S']}
                                    digitStyle={{ backgroundColor: 'transparent' }}
                                    digitTxtStyle={{ color: 'white', fontSize: 50 }}
                                    timeLabelStyle={{ color: 'white' }}
                                    onFinish={handleCountdownFinish}
                                />

                            </View>
                        </View>
                        <View style={onGoingActivityStyling.challengeNameContainer}>
                            <Text style={{fontSize: 50, fontWeight: 500, color: Color.white, textTransform: 'uppercase', textAlign: 'center'}}>
                                {challengeDetail.nickName}'s Challenge
                            </Text>
                        </View>
                        <View style={onGoingActivityStyling.extraInfo}>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                Workout Name
                            </Text>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                {challengeDetail.workout_name}
                            </Text>
                        </View>
                        <View style={onGoingActivityStyling.extraInfo}>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                Your Rules
                            </Text>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                {challengeDetail.rules} minutes
                            </Text>
                        </View>

                        {isCountdownFinished &&
                            <View style={onGoingActivityStyling.btnContainer}>
                                <Button title={'Done!'} action={() => finishCompetition()}/>
                            </View>
                        }
                        

                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const onGoingActivityStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.darkGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
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
    content: {
        marginTop: '15%',
        height: height /1.1,
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    timingConteiner: {
        width: width - 50,
        height: height / 6
    },
    timing: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timingHeader: {
        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    challengeNameContainer: {
        height: height / 5,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    extraInfo: {
        width: width,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    extraInfoText: {
        fontSize: 30, 
        color: Color.white, 
        textAlign: 'center'
    },
    btnContainer: {
        width: width,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default OnGoingActivity