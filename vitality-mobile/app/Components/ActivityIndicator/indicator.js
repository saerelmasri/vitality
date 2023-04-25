import { View, ActivityIndicator, StyleSheet, Dimensions } from "react-native"
import { Color } from '../../../globalStyling'
const { height, width } = Dimensions.get('window')


const Indicator = () => {
    return(
        <View style={Styles.container}>
            <ActivityIndicator color='white' size='large'/>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
        flex: 1,
        overflow: "hidden",
        width: "100%",
    }
})

export default Indicator