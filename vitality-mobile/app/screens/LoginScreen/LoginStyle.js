import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const loginStyles = StyleSheet.create({
    loginScreen: {
      backgroundColor: Color.grey,
      display: "flex",
      flex: 1,
      alignItems: 'center',
      height: height + 50,
      overflow: "hidden",
      width: "100%",
    },
    loginImg: {
        width: '100%',
        height: '30%',
    },  
    header: {
        width: width,
        height: height / 8,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '7%'
    },  
    txtTile: {
        fontSize: 30,
        fontWeight: 600,
    },
    txt: {
        fontSize: 20,
        fontWeight: 400,
    },
    inputs:{
        width: width - 40,
        height: height / 7, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 10
    },
    input: {
        width: '100%',
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
        fontSize: 20,
        paddingLeft: 10
    },
    btnConteiner:{
        width: width,
        height: height / 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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