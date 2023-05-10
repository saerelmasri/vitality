import { View, TouchableOpacity, Text } from 'react-native'
import { ButtonStyles } from '../../Components/Button/ButtonStylings'

const Button = ({action, title}) => {
    return(
        <View style={ButtonStyles.btnContainer}>
            <TouchableOpacity 
                style={ButtonStyles.btnComponent}
                onPress={action}
                >
                <Text style={[ButtonStyles.btnText]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button