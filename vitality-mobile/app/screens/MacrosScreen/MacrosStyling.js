import { StyleSheet, Dimensions } from "react-native"
import { Color } from "../../../globalStyling"
const { height, width } = Dimensions.get('window')

const macrosStyling = StyleSheet.create({
    container: {
        display: "flex",
        flex:1,
        alignItems: 'center',
        overflow: "hidden",
        width: width,
    },
    headerContainer: {
        width: width ,
        height: height / 12 ,
        backgroundColor: Color.ligtGreen,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 500,
        color: Color.white
    },
    statsContainer: {
        width: width,
        height: height /5,
        backgroundColor: Color.ligtGreen
    },
    containerTitle: {
        width: width,
        height: height / 19,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    TitleTxt: {
        fontSize: 20,
        color: Color.white
    },
    contentContainer: {
        width: '100%',
        height: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    goalContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTop: {
        fontSize: 30,
        fontWeight: 400,
        color: Color.white
    },
    textBottom: {
        fontSize: 20,
        fontWeight: 400,
        color: Color.white
    },
    signContainer: {
        width: '10%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    foodContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    remainsContainer:{
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealHeader: {
        width: width,
        height: height / 12,
        backgroundColor: Color.ligtGreen,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    mealType: {
        fontSize: 25,
        fontWeight: 300,
        color: Color.white
    },
    addFood:{
        fontSize: 20,
        fontWeight: 300,
        color: Color.white
    },
    foodContainerList: {
        borderWidth: 1,
        width: width,
        height: height / 3,
        backgroundColor: Color.ligtGreen
    },
    listItem: {
        borderWidth: 1,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemHeader: {
        borderWidth: 1,
        width: '30%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    food: {
        fontSize: 22,
        fontWeight: 300,
        color: Color.white,
        display: 'flex',
    },
    foodDefault: {
        fontSize: 16,
        fontWeight: 300,
        color: Color.white
    },
    foodCal: {
        fontSize: 16,
        fontWeight: 300,
        color: Color.white
    },
    backBtnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: Color.ligtGreen
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
    
})

export { macrosStyling }

