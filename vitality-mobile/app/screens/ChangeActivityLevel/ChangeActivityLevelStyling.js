import { View, Alert, Pressable, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native"
import { Color } from "../../../globalStyling"
const { height, width } = Dimensions.get('window')

const activityLevelStyle = StyleSheet.create({
    mainContainer: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        alignItems: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    contentContainer: {
        width: width,
        height:  height,
        display: 'flex',
        alignItems: 'center'
    },
    headerContainer: {
        width: '100%',
        height: '9%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
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
    },
    descriptionText: {
        textAlign: 'center',
        paddingLeft: 55,
        paddingRight: 55,
    },
    activityContainer: {
        width: '100%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnContainer: {
        width: width,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    }
})

export { activityLevelStyle }