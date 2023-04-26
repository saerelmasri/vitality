import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Button from "../../Components/Button/Button";
const { height, width } = Dimensions.get('window')

const InvitationDetail = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={invitationStyle.container}>
                <ScrollView>
                    <View style={invitationStyle.backBtnContainer}>
                        <View style={invitationStyle.backBtn}>
                            <Pressable onPress={() => console.log('hello')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={invitationStyle.header}>
                        <Text style={invitationStyle.txt}>Challenge Details</Text>
                    </View>
                    <View style={invitationStyle.invitationName}>
                        <Text style={{fontSize: 28, color: Color.white}}> 
                            Saer El Masri challenge!
                        </Text>
                    </View>
                    <View style={invitationStyle.detailContainer}>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Challenge Type 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                Workout
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Workout Name 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                Planks
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Rules 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                5 minutes
                            </Text>
                        </View>
                        <View style={invitationStyle.detailInfo}>
                            <Text style={invitationStyle.leftTxt}>
                                Reward 
                            </Text>
                            <Text style={invitationStyle.rightTxt}>
                                100pts
                            </Text>
                        </View>
                    </View>
                    <View style={invitationStyle.disclaimer}>
                        <Text style={{fontSize: 18, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is started, it will start right away.   
                        </Text>

                    </View>
                    <View style={invitationStyle.topBtn}>
                        <Button title={'Accept'}/>
                    </View>
                    <View style={invitationStyle.topBtn}>
                        <Button title={'Decline'}/>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const invitationStyle = StyleSheet.create({
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
    header: {
        height: height / 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 25,
        fontWeight: 500,
        color: Color.white
    },
    inputContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    inputs:{
        width: 310,
        height: 80, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', 
    },
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    btnContainer: {
        width: width,
        height: width / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    invitationName: {
        width: width,
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    detailContainer: {
        width: width,
        height: height / 3,
        display: 'flex',
        justifyContent: 'center'
    },
    detailInfo: {
        width: width,
        height: height / 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    leftTxt: {
        fontSize: 25,
        fontWeight: 500,
        color: Color.white
    },
    rightTxt: {
        fontSize: 20,
        color: Color.white
    },
    topBtn: {
        width: width,
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disclaimer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    }
    
    
    
})


export default InvitationDetail