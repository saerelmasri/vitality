import { StyleSheet, Dimensions } from "react-native"
import { Color } from "../../../globalStyling"
const { height, width } = Dimensions.get('window')


const dietStyling = StyleSheet.create({
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
        justifyContent: 'center'
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
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10
    },
    dietContainer: {
        width: '100%',
        height: '75%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnConteiner: {
        marginTop: 10, 
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export { dietStyling }