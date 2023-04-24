import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
import CardComponent from "../../Components/Card/CardComponent";
const { height, width } = Dimensions.get('window')


const VideoListing = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={workoutDashboardStyling.container}>
                <ScrollView>
                    <View style={workoutDashboardStyling.backBtnContainer}>
                        <View style={workoutDashboardStyling.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={workoutDashboardStyling.header}>
                        <Text style={{fontSize: 25, fontWeight: 500, color: Color.white}}>
                            Routine List
                        </Text>
                    </View>

                    <View style={workoutDashboardStyling.videoContainer}>
                        <ScrollView>
                            <CardComponent text={'10 minutes'}/>
                            <CardComponent text={'10 minutes'}/>
                            <CardComponent text={'10 minutes'}/>
                            <CardComponent text={'10 minutes'}/>
                            <CardComponent text={'10 minutes'}/>
                            <CardComponent text={'10 minutes'}/>
                        </ScrollView>

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

const workoutDashboardStyling = StyleSheet.create({
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
        height: height / 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        paddingTop: '5%'
    },
    cardComponent: {
        width: width / 1.2,
        height: height / 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: '5%'
    },
    textCard: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'

    }

})


export default VideoListing