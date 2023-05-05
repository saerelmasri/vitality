import {  StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../../globalStyling";
const { height, width } = Dimensions.get('window')

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
        alignItems: 'center',
        paddingTop: '10%'
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


export { trophyStyle }