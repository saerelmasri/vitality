import { View, StyleSheet, Text, TextInput } from "react-native";
import { Color, FontFamily } from "../../../globalStyling";
const Input = () => {
    return(
        <View style={loginStyles.loginScreen}>
            <Text style={loginStyles.placeholders}>Password</Text>
            <TextInput label='Password' value="" style={loginStyles.input}/>
        </View>

);
}

const loginStyles = StyleSheet.create({
    input: {
        width: 300,
        height: 57,
        backgroundColor:Color.white,
        borderRadius: 10,
    },
    placeholders: {
        fontSize: 15,
        marginRight:210,
        marginTop: 10
    }
});


export default Input