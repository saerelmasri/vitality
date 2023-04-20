import { StyleSheet } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
const welcomeStyles = StyleSheet.create({
    youreAllSetTypo: {
      width: 360,
      textAlign: "left",
      color: Color.white,
      fontFamily: FontFamily.interSemibold,
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
      width: 300,
      height: 70,
      display:'flex',
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 42
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
      fontFamily: FontFamily.interMedium,
      color: "#000",
    },
    dumbbels: {
      top: 202,
      left: 40,
      width: 320,
      height: 429,
      position: "absolute",
    },
    food: {
      top: 170,
      left: 0,
      width: 200,
      height: 200,
      position: "absolute",
      transform: [{ rotate: '90deg' }]
    },
    welcomeScreen: {
      backgroundColor: Color.darkGreen,
      display: "flex",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: 932,
      overflow: "hidden",
      width: "100%",
    },
});

export {welcomeStyles}
