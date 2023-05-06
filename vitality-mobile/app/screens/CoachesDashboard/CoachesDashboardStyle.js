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
        paddingLeft: 10,
        paddingTop: 10
    },
    text: {
        fontSize: 18,
        fontWeight: 400,
        color: Color.white,
    },
    aiBtn: {
        width: width - 20,
        height: height / 6,
        marginLeft: 10,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        
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