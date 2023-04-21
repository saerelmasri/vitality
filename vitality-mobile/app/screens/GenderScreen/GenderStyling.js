import { StyleSheet } from "react-native"
import { Color } from '../../../globalStyling'

const genderStylings = StyleSheet.create({
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
        justifyContent: 'space-around'
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
    btnsContainer: {
        width: '70%',
        height: '55%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    genderBtn: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        backgroundColor: Color.darkGreen,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export { genderStylings }