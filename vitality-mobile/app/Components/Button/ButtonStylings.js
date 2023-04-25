import { StyleSheet } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
const ButtonStyles = StyleSheet.create({
    btnContainer: {
      width: 300,
      height: 70,
      display:'flex',
      justifyContent: "center",
      alignItems: "center",
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
      fontWeight: "500",
      fontFamily: FontFamily.interMedium,
      color: "#000",
    }
});

export {ButtonStyles}
