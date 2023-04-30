import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import { useState } from "react";
const { height, width } = Dimensions.get('window')

const SelectActivity = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={selectActivity.container}>
                <ScrollView>
                    <View style={selectActivity.backBtnContainer}>
                        <View style={selectActivity.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    
                    <View style={selectActivity.contentContainer}>
                        <View style={selectActivity.boxOfContent}>
                            <Text style={[selectActivity.text, { color: Color.white }]}>
                                Select the type of challenge
                            </Text>
                            <TouchableOpacity style={selectActivity.circle} onPress={() =>{ 
                                navigation.navigate('ActivityInfo')
                            }}>
                                <Text style={selectActivity.text}>
                                    Workout Challenge
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const selectActivity = StyleSheet.create({
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
    contentContainer: {
        width: width,
        height: height / 1.1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxOfContent: {
        width: width  / 1.2,
        height: height / 1.2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        width: '65%',
        height: '30%',
        borderRadius: 100,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: '8%'
    },
    text: {
        fontSize: 20, 
        fontWeight: 500, 
        textAlign: 'center'
    }
    
})


export default SelectActivity