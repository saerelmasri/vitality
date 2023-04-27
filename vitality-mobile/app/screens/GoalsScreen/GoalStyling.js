import {  StyleSheet } from "react-native"
import { Color } from "../../../globalStyling"

const goalStyling = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        alignItems: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    backBtnContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 10
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
    contentContainer: {
        width: '100%',
        height: '90%',
        display: 'flex',
        alignItems: 'center',
    },
    headerContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    span: {
        fontWeight: 600
    },
    descriptionContainer: {
        width: '100%',
        height: '7%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    goalContainer: {
        width: '80%',
        height: '65%',
        display: 'flex',
        justifyContent: 'space-around'
    }
})

export { goalStyling }