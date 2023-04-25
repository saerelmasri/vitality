import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
import Friend from "../../../Components/FriendComponent/Friend";
const { height, width } = Dimensions.get('window')

const Trophy = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={trophyStyle.container}>
                <ScrollView>
                    <View style={trophyStyle.backBtnContainer}>
                        <View style={trophyStyle.backBtn}>
                            <Pressable onPress={() => console.log('hello')}>
                                <Image source={require('../../../assets/app-img/close.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={trophyStyle.content}>
                        <View style={trophyStyle.trophyContent}>
                            <Image source={require('../../../assets/app-img/trophy.png')} style={{width: '100%', height: '100%'}}/>
                        </View>
                        <View style={trophyStyle.headerContainer}>
                            <Text style={{fontSize: 50, fontWeight: 500, color: Color.white}}>STRONG FINISH</Text>
                            <Text style={{fontSize: 30, fontWeight: 400, color: Color.white, textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>You complete the challenge!</Text>
                            <Text style={{fontSize: 20, color: Color.white}}>You earned 100pts</Text>

                        </View>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const trophyStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.darkGreen,
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
    content: {
        borderColor: 'white',
        height: height / 1.2
    },
    trophyContent: {
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        height: height / 2.4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    }

    
})


export default Trophy