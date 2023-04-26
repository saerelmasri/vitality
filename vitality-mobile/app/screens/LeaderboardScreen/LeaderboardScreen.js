import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from 'react'
import Challenge from "../../Components/ChallengeComponent/Challenge";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import LeaderboardItem from "../../Components/LeaderboardItem/LeaderboardItem";
const { height, width } = Dimensions.get('window')



const Leaderboard = ({navigation}) => {
    
    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={leaderboardStyle.container}>
                <ScrollView>
                    <Header action1={()=> navigation.navigate('PlaygroundDashboard')}/>
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
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
                            <LeaderboardItem/>
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