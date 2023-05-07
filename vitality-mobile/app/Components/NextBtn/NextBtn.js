import { TouchableOpacity, Image } from 'react-native';
import { nextBtnStyling } from '../NextBtn/NextBtnStyling'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NextBtn = ({action}) => {
    return(
    <TouchableOpacity style={nextBtnStyling.nextBtn} onPress={action}>
        <MaterialCommunityIcons name="arrow-right" size={50} />
    </TouchableOpacity>)
}

export default NextBtn