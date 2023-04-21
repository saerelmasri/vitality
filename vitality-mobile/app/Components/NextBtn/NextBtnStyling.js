import { StyleSheet } from "react-native";
import { Color } from '../../../globalStyling'

const nextBtnStyling = StyleSheet.create({
    nextBtn: {
        width: '50%',
        height: '10%',
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
