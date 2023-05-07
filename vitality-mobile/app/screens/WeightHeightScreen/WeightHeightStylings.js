import { StyleSheet, Dimensions } from "react-native";
import { Color } from '../../../globalStyling'
const { height, width } = Dimensions.get('window')


const weightHeightStylings = StyleSheet.create({
    flex: {
        flex: 1
    },
    mainContainer: {
        backgroundColor: Color.grey,
        display: "flex",
        flex: 1,
        height: 770,
        overflow: "hidden",
        width: "100%",
        alignItems: 'center'
    },
    backContainer:{
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent:'center'
    },
    container: {
        width: '100%',
        height: '100%',
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
        marginBottom: 10
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
        width: '100%',
        height: '55%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: 'center',
    },
    heightContainer: {
        borderWidth: 1,
        width: '100%',
        height: '70%',
        backgroundColor: Color.darkGreen,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        top: 230,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center'
    },
    Title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 400,
        color: Color.white,
    },
    buttonsContainer: {
        width: '60%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    },
    leftButton: {
        width: '100%',
        height: height / 15,
        backgroundColor: Color.white,
        borderRadius: 30,
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
        height: '20%',
        textAlign: 'center',
        fontSize: 35,
        color: Color.white,
        borderBottomWidth: 5,
        borderBottomColor: Color.white,
        marginTop: 5
    }
})

export { weightHeightStylings }