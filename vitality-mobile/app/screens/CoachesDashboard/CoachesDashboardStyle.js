import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const coachDashboardStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: width,
        height: height / 12,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    header2: {
        width: width,
        height: height / 14,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    text: {
        fontSize: 22,
        fontWeight: 500,
        color: Color.white,
    },
    aiBtn: {
        width: width,
        height: height / 4.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    chefTxt: {
        position: 'absolute',
        zIndex: 1,
        width: '40%',
        height: '100%',
        paddingLeft: '3%',
        display: 'flex',
        justifyContent: 'center',
        opacity: 1
    },
    coachesContainer: {
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: '10%'
    },
})

export {coachDashboardStyle}