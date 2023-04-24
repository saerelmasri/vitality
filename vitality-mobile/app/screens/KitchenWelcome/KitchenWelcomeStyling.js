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
    backBtnContainer: {
        width: width,
        display: 'flex',
        justifyContent: 'center',
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
    imgCover: {
        width: width,
        height: height / 2.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        width: width / 1.5,
        height: height / 3.2,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20

    },
    txtContent:{
        fontSize: 60,
        fontWeight: 500,
        color: Color.white
    },
    btnContainer: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 20
    },
    btn: {
        width: '50%',
        height: '70%',
        borderRadius: 10,
        backgroundColor: Color.grey,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export {kitchenStyle}