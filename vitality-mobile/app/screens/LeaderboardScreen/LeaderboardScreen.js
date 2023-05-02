import { View, ScrollView, SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import LeaderboardItem from "../../Components/LeaderboardItem/LeaderboardItem";
const { height, width } = Dimensions.get('window')
import { useEffect, useState } from "react"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
let JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU0LCJpYXQiOjE2ODMwMzAzMTIsImV4cCI6MTY4MzAzMzkxMn0.Nh4xQBuLclimi68Qr_xIPTJsKd_9hnsow82RV9tnR6w"


const Leaderboard = ({navigation}) => {
 // AsyncStorage.getItem('token')
    // .then(token => {
    //     JWT = token
    // })
    // .catch(error => {
    //     console.log(error);
    // });

    const [ list, setList ] = useState([])
    const [ topThree, setTopThree ] = useState([])

    useEffect(()=> {
        const fetchLeaderboard = async() => {
            await axios({
                method: 'GET',
                url: 'http://192.168.1.104:5000/leaderboard_route/level_leaderboard',
                headers: {
                    'Authorization': JWT,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                setTopThree(res.data.message.slice(0, 3))
                setList(res.data.message)
            }).catch(err => {
                console.log(err);
            })
        }

        fetchLeaderboard()

    }, [])

    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={leaderboardStyle.container}>
                <ScrollView>
                    <Header action1={()=> navigation.navigate('PlaygroundDashboard')} action3={() => navigation.navigate('Invitations')}/>
                    <View style={leaderboardStyle.headerContainer}>
                        <View style={leaderboardStyle.boardContainer}>
                            <View style={leaderboardStyle.boardPlace}>
                                <View style={leaderboardStyle.profile}></View>
                                <View style={leaderboardStyle.position}>
                                    <Text style={{fontSize: 15, fontWeight: 500}}>
                                        3
                                    </Text>
                                </View>
                            </View>
                            <View style={leaderboardStyle.boardPlace}>
                                <View style={leaderboardStyle.profileFirst}></View>
                                <View style={leaderboardStyle.positionFirst}>
                                    <Text style={{fontSize: 15, fontWeight: 500}}>
                                        1
                                    </Text>
                                </View>
                            </View>
                            <View style={leaderboardStyle.boardPlace}>
                                <View style={leaderboardStyle.profile}></View>
                                <View style={leaderboardStyle.position}>
                                    <Text style={{fontSize: 15, fontWeight: 500}}>
                                        2
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={leaderboardStyle.leaderboard}>
                        <ScrollView>
                            {
                                list.map((item, index) => (
                                    <LeaderboardItem position={index + 1} name={item.full_name} level={item.level}/>
                                ))
                            }   
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const leaderboardStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerContainer: {
        width: width,
        height: height / 5,
        display: 'flex',
        alignItems: 'center'
    },
    boardContainer: {
        width: ' 95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boardPlace: {
        width: '35%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: '65%',
        height: '52%',
        borderRadius: 100,
        backgroundColor: Color.white,
        borderWidth: 2
    },
    profileFirst:{
        width: '77%',
        height: '62%',
        borderRadius: 100,
        backgroundColor: Color.white,
        borderWidth: 2
    },
    position: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '62%',
        left: '36%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    positionFirst: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '65%',
        left: '35%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leaderboard: {
        width: width,
        height: height / 1.8,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },

})


export default Leaderboard