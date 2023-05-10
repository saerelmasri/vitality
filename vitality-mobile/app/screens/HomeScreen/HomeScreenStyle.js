import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const homeScreenStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
    },
    header: {
        height: height / 9,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    txt: {
        fontSize: 23,
        fontWeight: 500,
        color: Color.white
    },
    caloriesContainer: {
        width: width,
        height: height / 2.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    kitchen: {
        width: width - 50,
        height: height / 2.7,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '5%',
        paddingBottom: '5%'
    },
    containerBtn: {
        width: '40%',
        height: '20%',
        borderRadius: 10, 
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%'
    }
})

export { homeScreenStyle }