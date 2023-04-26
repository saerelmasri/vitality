import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import FriendComponent from "../../Components/ListFriend/ListFriend";
const { height, width } = Dimensions.get('window')

const FriendList = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1,}}>
            <View style={friendStyle.container}>
                <ScrollView>
                    <View style={friendStyle.headerContainer}>
                        <View style={friendStyle.header}>
                            <Text style={{fontSize: 18, fontWeight: 500, marginBottom: 5}}>
                                Invite to workout with
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: 400}}>
                                You can surely invite your friends to workout together 
                                virtually and compete to increase motivation
                            </Text>
                        </View>
                    </View>
                    <View style={friendStyle.listFriendTxtContainer}>
                        <Text style={{fontSize: 25, color: Color.white}}>
                            Workout Friends
                        </Text>
                        <Pressable onPress={() => navigation.navigate('AddFriend')}>
                            <Text style={{fontSize: 16, color: Color.white, fontWeight: 500}}>
                                Add Friend
                            </Text>
                        </Pressable>
                    </View>
                    <View style={friendStyle.friendListConteiner}>
                        <ScrollView>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                            <FriendComponent name={'Saer El Masri'}/>
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const friendStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerContainer: {
        width: width,
        height: height / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        height: height / 6,
        width: width / 1.2,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    listFriendTxtContainer: {
        width: width,
        height: height / 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    friendListConteiner: {
        width: width,
        height: height / 1.6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%'
    }
})


export default FriendList