import { StyleSheet } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";

const registerStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.grey,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignItems: 'center',
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    header: {
        width: 250,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 35,
        fontWeight: 800,
        textAlign: 'center'
    },
    description: {
        width: 320,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionText: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center'
    },
    inputs:{
        width: 310,
        height: 75, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
    },
    span: {
        fontWeight:600
    }
})

export {registerStyle}