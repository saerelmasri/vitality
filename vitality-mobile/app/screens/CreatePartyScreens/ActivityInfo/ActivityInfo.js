import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../../globalStyling";
import Button from "../../../Components/Button/Button";
const { height, width } = Dimensions.get('window')

const ActivityInfo = () => {
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
                        <Text style={activityInfoStyle.txt}>Create Challenge</Text>
                    </View>
                    <View style={activityInfoStyle.inputContainer}>
                        <View style={activityInfoStyle.input}>
                            <Text>Challenge Type</Text>
                        </View>
                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Challenge Name</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Enter challenge Name"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                            />
                        </View>

                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Workout Name</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Enter your workout name"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={activityInfoStyle.inputs}>
                            <Text style={{color: Color.white}}>Your rule</Text>
                            <TextInput 
                                style={activityInfoStyle.input}
                                placeholder="Enter your rule"
                                underlineColorAndroid="transparent"
                                autoCapitalize='none'
                            />
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
    
    
    
})


export default ActivityInfo