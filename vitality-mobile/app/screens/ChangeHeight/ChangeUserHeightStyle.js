import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const statsStyling = StyleSheet.create({
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
    headerContent: {
        width: width,
        height: height / 22,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: '12%',
        width: width,
        height: height / 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    heightContainer: {
        height: '50%',
        display: 'flex',
        flexDirection: 'row'
    },
    TitleContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '5%'
    },
    statsContainer: {
        width: '25%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '10%'
    },
    inputTextContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        height: '50%',
        width: '80%',
        borderRadius: 10,
        backgroundColor: Color.white,
        textAlign: 'center',
        fontSize: 40
    },
    btnContainer: {
        width: width,
        height: height / 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export {statsStyling}