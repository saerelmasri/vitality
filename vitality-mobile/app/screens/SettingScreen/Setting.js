import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const Settings = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={settingStyle.container}>
                <ScrollView>
                <View style={settingStyle.backBtnContainer}>
                    <View style={settingStyle.backBtn}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                        </Pressable>
                    </View>
                </View>
                <View style={settingStyle.headerContent}>
                    <Text style={{fontSize: 25}}>Settings</Text>
                </View>
                <View style={settingStyle.profileContainer}>
                    <View style={settingStyle.avatarContent}>
                        <View style={settingStyle.picture}></View>
                    </View>
                    <View style={settingStyle.name}>
                        <Text style={{fontSize: 22, fontWeight: 500}}>
                            Saer El Masri
                        </Text>
                    </View>
                    <View style={settingStyle.actionBtn}>
                        <Pressable onPress={() => Alert.alert('Hola')}>
                            <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                        </Pressable>
                    </View>
                </View>

                <View style={settingStyle.optionsContainer}>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeHeight')}>
                        <Text style={settingStyle.optionTxt}>Change Height</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option} onPress={() => navigation.navigate('ChangeHeight')}>
                        <Text style={settingStyle.optionTxt}>Change Weight</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option}>
                        <Text style={settingStyle.optionTxt}>Change goal</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={settingStyle.option}>
                        <Text style={settingStyle.optionTxt}>Change activity level</Text>
                        <Image source={require('../../assets/app-img/back-btn.png')} style={{ transform: [{ rotateY: '180deg' }] }}/>
                    </TouchableOpacity>

                </View>

                   

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const settingStyle = StyleSheet.create({
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
        backgroundColor: Color.grey
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
    headerContent: {
        width: width,
        height: height / 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.grey
    },
    profileContainer: {
        width: width,
        height: height / 7,
        backgroundColor: Color.grey,
        display: 'flex',
        flexDirection: 'row'
    },
    avatarContent: {
        width: width / 4,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture:{
        width: '80%',
        height: '65%',
        borderRadius: 100,
        backgroundColor: Color.white
    },
    name: {
        width: width / 1.8,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    actionBtn: {
        width: width / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsContainer: {
        width: width,
        height: height / 3,
        backgroundColor: Color.grey,
        marginTop: ' 20%'
    },
    option: {
        height: height / 12,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: ' 10%',
        paddingRight: ' 10%',
    },
    optionTxt: {
        fontSize: 22
    }
    
})


export default Settings