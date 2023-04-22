import { TouchableOpacity, Image } from 'react-native';
import { nextBtnStyling } from '../NextBtn/NextBtnStyling'

const NextBtn = ({action}) => {
    return(
    <TouchableOpacity style={nextBtnStyling.nextBtn} onPress={action}>
        <Image source={require('../../assets/app-img/nextBtn.png')}></Image>
    </TouchableOpacity>)
}

export default NextBtn