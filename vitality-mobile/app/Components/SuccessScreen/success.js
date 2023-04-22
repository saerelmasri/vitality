import { View, StyleSheet, Pressable, Image, Text, ActivityIndicator } from "react-native"
import { Color } from '../../../globalStyling'
import { useRoute } from "@react-navigation/native"

const Success = () => {
    const route = useRoute()
    const title = route.params.title
    return(
        <View style={Styles.container}>
            <Image source={require('../../assets/app-img/done.png')}></Image>
            <Text style={Styles.text}>{title}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Color.grey,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 932,
        overflow: "hidden",
        width: "100%",
    },
    text: {
        fontSize: 40,
        fontWeight: 500,
        color: Color.white
    }
})

export default Success