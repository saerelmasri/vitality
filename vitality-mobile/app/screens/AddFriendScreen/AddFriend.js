import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import Friend from "../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')

const AddFriend = ({navigation}) => {
    
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={addFriendStyling.container}>
                <ScrollView>
                <View style={addFriendStyling.backBtnContainer}>
                        <View style={addFriendStyling.backBtn}>
                            <Pressable onPress={() => navigation.goBack()}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={addFriendStyling.headerContainer}>
                        <View style={addFriendStyling.header}>
                            <Text style={{fontSize: 18, fontWeight: 500, marginBottom: 5}}>
                                Invite to workout with
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: 400}}>
                                You can surely invite your friends to workout together 
                                virtually and compete to increase motivation
                            </Text>
                        </View>
                    </View>
                    <View style={addFriendStyling.searchContainer}>
                        <TextInput 
                            style={addFriendStyling.findFriend}
                            placeholder="Search for a friend"

                        />

                    </View>
                    <View style={addFriendStyling.friendListConteiner}>
                        <ScrollView>
                            <Friend name={'Saer El Masri '}/>
                            <Friend name={'Saer El Masri '}/>
                            <Friend name={'Saer El Masri '}/>
                            <Friend name={'Saer El Masri '}/>
                            <Friend name={'Saer El Masri '}/>
                            <Friend name={'Saer El Masri '}/>
                        </ScrollView>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const addFriendStyling = StyleSheet.create({
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
    searchContainer: {
        width: width,
        height: height / 9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        height: height / 1.9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    findFriend: {
        width: width / 1.2,
        height: height / 14,
        borderRadius: 10,
        backgroundColor: Color.white,
        paddingLeft: '5%'
    }
})


export default AddFriend