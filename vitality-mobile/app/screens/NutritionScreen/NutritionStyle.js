import { StyleSheet } from "react-native";
import { Color } from "../../../globalStyling";

const nutritionStyle = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: 360,
    },
    headerBtnContainer: {
        width: 360,
        height: 60,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        width: '30%',
        height: '70%',
        backgroundColor: Color.grey,
        borderRadius: 10,
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 500
    },
    bar: {
        borderWidth: 1, 
        width: 360,
        height: 70,
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        borderRightWidth: 1,
        width: '20%',
    },
    center: {
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        borderLeftWidth: 1,
        width: '20%',
    },
    centerTxt: {
        fontSize: 30,
        fontWeight: 500
    },
    caloriesStats: {
        width: 360,
        height: 450,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        alignItems: 'center'
    },
    textContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    text: {
        fontSize: 30,
        fontWeight: 500,
        color: Color.white,
        paddingLeft: 10
    }    
})

export { nutritionStyle}