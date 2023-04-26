import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
const { height, width } = Dimensions.get('window')

const onGoingActivity = () => {
    
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <ImageBackground style={onGoingActivityStyling.container} source={require('../../../assets/app-img/ads.jpg')}>
                <ScrollView>
                    <View style={onGoingActivityStyling.backBtnContainer}>
                        <View style={onGoingActivityStyling.backBtn}>
                            <Pressable onPress={() => console.log('hello')}>
                                <Image source={require('../../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={onGoingActivityStyling.content}>
                        
                        <View style={onGoingActivityStyling.timingConteiner}>
                            <View style={onGoingActivityStyling.timing}>
                                <Text style={{fontSize: 60, fontWeight: 500, color: Color.white}}>
                                    01: 23:49
                                </Text>
                            </View>
                            <View style={onGoingActivityStyling.timingHeader}>
                                <Text style={{fontSize: 25, fontWeight: 300, color: Color.white}}>
                                    Duration
                                </Text>
                            </View>
                        </View>
                        <View style={onGoingActivityStyling.challengeNameContainer}>
                            <Text style={{fontSize: 50, fontWeight: 500, color: Color.white, textTransform: 'uppercase', textAlign: 'center'}}>
                                Saer's Challenge
                            </Text>
                        </View>
                        <View style={onGoingActivityStyling.extraInfo}>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                Workout Name
                            </Text>
                        </View>
                        <View style={onGoingActivityStyling.extraInfo}>
                            <Text style={onGoingActivityStyling.extraInfoText}>
                                Your Rules
                            </Text>
                        </View>

                        <View style={onGoingActivityStyling.btnContainer}>
                            <Button title={'Done!'}/>

                        </View>

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

export default onGoingActivity