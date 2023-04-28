import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";


const { height, width } = Dimensions.get('window')


const foodStyling = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
    },
    backBtnContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
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
    headerMeal: {
        width: width,
        height: height / 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 300,
        color: Color.white
    },
    detailContainer: {
        width: width - 40,
        marginLeft: 20,
        height: height / 4,
        display: 'flex',
        justifyContent: 'space-around', 
        marginTop: 20
    },
    detailStats: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 2,
        borderColor: Color.white
    },
    txtInput: {
        width: '30%',
        height: '70%',
        borderBottomWidth: 1
    },
    btnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: '50%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18, 
        color: Color.white
    },
    foodStats: {
        width: width,
        height: height / 2.2,
        display: 'flex',
    },
    top: {
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    calorieCounter:{
        borderWidth: 10,
        borderColor: Color.white,
        width:'50%',
        height: '90%',
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        height: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stats: {
        width: '90%',
        height: '80%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    statInfo: {
        width: '30%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberStyle: {
        fontSize: 24
    },
    textStyle: {
        fontSize: 18
    }
})

export {foodStyling}