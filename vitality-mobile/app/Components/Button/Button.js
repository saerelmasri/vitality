import { View, TouchableOpacity, Text } from 'react-native'
import { ButtonStyles } from '../../Components/Button/ButtonStylings'

const Button = () => {
    return(
        <View style={ButtonStyles.btnContainer}>
            <TouchableOpacity style={ButtonStyles.btnComponent}>
                <Text style={ButtonStyles.btnText}>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button