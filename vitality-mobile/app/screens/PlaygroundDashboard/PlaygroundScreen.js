import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from 'react'
import Challenge from "../../Components/ChallengeComponent/Challenge";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
const { height, width } = Dimensions.get('window')



const PlaygroundDashboard = ({navigation}) => {
    
    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={runningStyling.container}>
                <ScrollView>
                    <Header action2={()=> {navigation.navigate('Leaderboard')}}/>

                    <View style={runningStyling.imageContainer}>
                        <ImageBackground style={runningStyling.imageContent} source={require('../../assets/app-img/friends.jpg')} imageStyle={{width: width - 73,height: height / 3.3, borderRadius: 10, opacity: 0.7,}}>
                            <View style={runningStyling.imageTextContent} >
                                <Text style={runningStyling.text}>
                                    Create your challenges and compete with your friends!
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={runningStyling.btnContainer}>
                        <Button title={'Create a party'}/>
                    </View>

                    <View
                        style={{
                            marginTop: '5%',
                            marginBottom: '5%',
                            borderBottomWidth: 1,
                            borderBottomColor: Color.white,
                            width: width - 40,
                            marginLeft: '5%'
                        }}
                    ></View>

                    <View style={runningStyling.challengesContainer}>
                        <ScrollView>
                            <Challenge/>
                            <Challenge/>
                            <Challenge/>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const runningStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: width, 
        height: height / 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    imageContainer: {
        height: height / 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContent: {
        width: '80%',
        height: '90%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    imageTextContent: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 500,
        color: Color.white
    },
    btnContainer: {
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    challengesContainer: {
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10
    },
    challengeHeader: {
        height: height / 9,
        width: width / 1.2,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    txtContainer: {
        height: '80%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '2%'
    },
    iconContainer: {
        height: '80%',
        width: '20%'
    }
    

})


export default PlaygroundDashboard