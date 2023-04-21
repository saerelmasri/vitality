import { StyleSheet } from "react-native";
import { Color } from '../../../globalStyling'

const weightHeightStylings = StyleSheet.create({
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
        paddingLeft: 20,
        paddingRight: 20,
    },
    weightHeightContainer:{
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column'
    },
    weightContainer: {
        borderWidth: 1,
        width: '100%',
        height: '50%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: 'center'
    },
    heightContainer: {
        borderWidth: 1,
        width: '100%',
        height: '50%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        top: 250,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    Title: {
        fontSize: 30,
        fontWeight: 400,
        color: Color.white,
        marginTop: 20
    },
    buttonsContainer: {
        width: '60%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    leftButton: {
        width: '50%',
        height: '100%',
        backgroundColor: Color.white,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButton: {
        width: '50%',
        height: '100%',
        backgroundColor: Color.white,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 25,
        fontWeight: 600
    },
    input: {
        width: '30%',
        height: '30%',
        textAlign: 'center',
        fontSize: 35,
        color: Color.white,
        borderBottomWidth: 5,
        borderBottomColor: Color.white,
        marginTop: 5
    }
})

export { weightHeightStylings }