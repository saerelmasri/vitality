import { StyleSheet, View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react'
import { Color } from "../../../globalStyling";

const { height, width } = Dimensions.get('window')


const WelcomeKitchen = () => {

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={kitchenStyle.container}>
                <ScrollView>
                    <View style={kitchenStyle.backBtnContainer}>
                        <View style={kitchenStyle.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={kitchenStyle.imgCover}>
                        <Image source={require('../../assets/app-img/kitchen.png')}/>
                    </View>
                    <View style={kitchenStyle.txt}>
                        <Text style={kitchenStyle.txtContent}>It's Cooking Time</Text>
                    </View>

                    <View style={kitchenStyle.btnContainer}>
                        <TouchableOpacity style={kitchenStyle.btn}>
                            <Text style={{fontSize: 20, fontWeight: 400}}>
                                Add Food
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const kitchenStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
    },
    backBtnContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
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
    imgCover: {
        width: width,
        height: height / 2.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        width: width / 1.5,
        height: height / 3.2,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20

    },
    txtContent:{
        fontSize: 60,
        fontWeight: 500,
        color: Color.white
    },
    btnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20
    },
    btn: {
        width: '50%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default WelcomeKitchen