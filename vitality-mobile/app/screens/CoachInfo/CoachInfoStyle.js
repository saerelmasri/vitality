import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const CoachInfoStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
    },
    mainContainer: {
        borderColor: Color.white,
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        width: width - 40,
        height: height / 1.5,
        backgroundColor: Color.grey,
        borderRadius: 10,
        marginTop: '40%',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%'
    },
    profile: {
        backgroundColor: Color.white,
        width: width / 2,
        height: height / 4,
        borderRadius: 100,
        borderWidth: 2,
        position: 'absolute',
        top: 90,
        zIndex: 1
    },
    nameContainer: {
        height: '15%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
    aboutContainer: {
        width: '100%', 
        height: height / 3.8,
        padding: '5%'
    },
    infoCardContainer:{
        width: '100%',
        height: height / 8,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardContainer: {
        height: height / 9,
        width: width - 210,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        padding: '1%'
    },
    contactContainer: {
        width: '100%',
        height: height / 18,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '2%'
    }
    
})

export {CoachInfoStyle}