import { StyleSheet, Dimensions } from "react-native";
import { Color } from '../../../globalStyling'
const { height, width } = Dimensions.get('window')


const nextBtnStyling = StyleSheet.create({
    nextBtn: {
        width: width - 200,
        height: height / 15,
        borderRadius: 50,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginBottom: 20
    }
})

export { nextBtnStyling }
