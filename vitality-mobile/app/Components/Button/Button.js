import { View, TouchableOpacity, Text } from 'react-native'
import { ButtonStyles } from '../../Components/Button/ButtonStylings'
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Button = ({action, title}) => {
    let [ fontsLoaded] = useFonts({
        'medium500': require('../../assets/fonts/static/Montserrat-Medium.ttf'),
        'medium600': require('../../assets/fonts/static/Montserrat-SemiBold.ttf'),
        'bold700': require('../../assets/fonts/static/Montserrat-SemiBold.ttf'),
    })
    if(!fontsLoaded){
    return <AppLoading/>
    }
    return(
        <View style={ButtonStyles.btnContainer}>
            <TouchableOpacity 
                style={ButtonStyles.btnComponent}
                onPress={action}
                >
                <Text style={[ButtonStyles.btnText, {fontFamily: 'bold700'}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button