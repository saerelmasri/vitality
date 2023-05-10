import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";

const { height, width } = Dimensions.get('window')


const kitchenStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
        width: "100%",
        height: height
    },
    imgCover: {
        width: width,
        height: height / 2.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%'
    },
    txt: {
        width: width / 1.5,
        height: height / 3.2,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20

    },
    txtContent:{
        fontSize: 62,
        fontWeight: 600,
        color: Color.white
    },
    btnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    btn: {
        width: '50%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export {kitchenStyle}