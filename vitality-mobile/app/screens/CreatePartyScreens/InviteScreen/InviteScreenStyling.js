import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
import Friend from "../../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')

const InviteFriends = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={activityInfoStyle.container}>
                <ScrollView>
                    <View style={activityInfoStyle.backBtnContainer}>
                        <View style={activityInfoStyle.backBtn}>
                            <Pressable onPress={() => console.log('hello')}>
                                <Image source={require('../../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>Invite Friends</Text>
                    </View>

                    <View style={activityInfoStyle.friendsContainer}>
                        <View style={activityInfoStyle.headerFriend}>
                            <Text style={{fontSize: 17, fontWeight: 500, color: Color.white}}>Challenge a friend</Text>
                        </View>
                        <View style={activityInfoStyle.friendsSection}>
                            <ScrollView>
                                <Friend name={'Saer El Masri'}/>
                                <Friend name={'Saer El Masri'}/>
                                <Friend name={'Saer El Masri'}/>
                                <Friend name={'Saer El Masri'}/>
                                <Friend name={'Saer El Masri'}/>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={activityInfoStyle.btnContainer}>
                        <Button title={'Register'}/>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const activityInfoStyle = StyleSheet.create({
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
    friendsContainer: {
        width: width,
        height: height / 2,
        display: 'flex',
        alignItems: 'flex-start',
        paddingBottom: '10%',
    },
    btnContainer: {
        width: width,
        height: width / 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    friends: {
        width: width / 1.3,
        height: height / 9,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    headerFriend: {
        width: width,
        height: height / 18,
        display: 'flex',
        justifyContent: 'center', 
        paddingLeft: '10%'
    },
    friendsSection: {
        width: width,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 20,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    addContainer: {
        height: '100%',
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
    
})


export default InviteFriends