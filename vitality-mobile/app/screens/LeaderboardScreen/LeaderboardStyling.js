import { View, ScrollView, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const leaderboardStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerContainer: {
        width: width,
        height: height / 5,
        display: 'flex',
        alignItems: 'center'
    },
    boardContainer: {
        width: ' 95%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boardPlace: {
        width: '35%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: '65%',
        height: '52%',
        borderRadius: 100,
        backgroundColor: Color.white,
        borderWidth: 2
    },
    profileFirst:{
        width: '77%',
        height: '62%',
        borderRadius: 100,
        backgroundColor: Color.white,
        borderWidth: 2
    },
    position: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '62%',
        left: '36%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    positionFirst: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '65%',
        left: '35%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    leaderboard: {
        width: width,
        height: height / 1.8,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
})

export { leaderboardStyle }