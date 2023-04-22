import { StyleSheet } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";

const loginStyles = StyleSheet.create({
    loginScreen: {
      backgroundColor: Color.grey,
      display: "flex",
      flex: 1,
      alignItems: 'center',
      height: 932,
      overflow: "hidden",
      width: "100%",
    },
    loginImg: {
        width: '100%',
        height: '30%',
    },  
    txtTile: {
        fontSize: 30,
        fontWeight: 600,
        height: 36,
        marginTop: 40,
        marginRight: 100 
    },
    txt: {
        fontSize: 20,
        fontWeight: 400,
        height: 36,
        marginRight: 100 
    },
    inputs:{
        width: 310,
        height: 100, 
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
    forgotPassword:{
        fontSize: 15,
        fontWeight: 500,
        height: 18,
        marginRight: 200,
        marginTop: 10,
        marginBottom: 10
    },
    actions: {
        fontSize: 15,
        marginRight: 150,
        marginTop: 20
    },
    span: {
        fontSize: 15,
        fontWeight: 600
    },
});

export { loginStyles }