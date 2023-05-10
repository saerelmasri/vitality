import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
const ButtonStyles = StyleSheet.create({
    btnContainer: {
      width: width - 100,
      height: height / 12,
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
      color: "#000",
    }
});

export {ButtonStyles}
