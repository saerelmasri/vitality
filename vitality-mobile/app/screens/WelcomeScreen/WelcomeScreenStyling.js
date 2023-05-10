import { StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";

const { height, width } = Dimensions.get('window')
const welcomeStyles = StyleSheet.create({
    youreAllSetTypo: {
      width: 360,
      textAlign: "left",
      color: Color.white,
      fontWeight: "500",
      left: 20,
      alignItems: "center",
      display: "flex",
      position: "absolute",
    },
    youreAllSet: {
      top: 80,
      fontSize: 20,
      height: 64,
    },
    letsCreateYour: {
      top: 100,
      fontSize: 40,
    },
    btnContainer: {
      width: '100%',
      height: '15%',
      display:'flex',
      justifyContent: "flex-start",
      alignItems: "center",
      position: 'absolute',
      marginTop: height - 90
    },
    btnComponent: {
      width: '100%',
      height: '100%',
      backgroundColor:Color.white,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    btnText: {
      fontSize: 25,
      textTransform: "capitalize",
      fontWeight: "500",
      color: "#000",
    },
    dumbbels: {
      width: '80%',
      height:'50%',
      marginRight: 0,
      right: 0,
      top: '35%',
      position: "absolute",
    },
    food: {
      width: '80%',
      height:'20%',
      marginRight: width - 150,
      marginTop: '55%',
      transform: [{ rotate: '90deg' }]
    },
    welcomeScreen: {
      backgroundColor: Color.darkGreen,
      display: "flex",
      flex: 1,
      alignItems: 'center',
      overflow: "hidden",
      width: "100%",
      height: height
    },
});

export {welcomeStyles}
