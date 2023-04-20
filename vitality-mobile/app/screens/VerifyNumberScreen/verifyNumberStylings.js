import { StyleSheet } from "react-native";
import { Color } from "../../../globalStyling"

const verifyNumberStyling = StyleSheet.create({
    flex: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
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
    container: {
        width: '100%',
        height: '95%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerContainer: {
        height: '20%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 700,
        color: Color.white,
        textAlign: 'center'
    },
    descriptionContainer: {
        height: '10%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        fontSize: 15,
        fontWeight: 400,
        color: Color.white,
        textAlign: 'center'
    },
    span: {
        fontWeight: 700
    },
    codeContainer: {
        height: 150,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        gap: 2
    },
    code:{
        borderWidth: 1,
        flex: 1,
        height: '60%',
        width: 20,
        borderRadius: 10,
        backgroundColor: Color.white,
        textAlign: 'center',
        fontSize: 30,
        borderBottomWidth: 0,
    },
    expiredContainer:{
        height: '5%',
        width: '90%',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    expiredText: {
        fontSize: 15,
        color: Color.white,
    }
    
})

export {verifyNumberStyling}