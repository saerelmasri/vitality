import { View, ActivityIndicator, StyleSheet } from "react-native"
import { Color } from '../../../globalStyling'

const Indicator = () => {
    return(
        <View style={Styles.container}>
            <ActivityIndicator color='white' size='large'/>
        </View>
    )
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
    }
})

export default Indicator