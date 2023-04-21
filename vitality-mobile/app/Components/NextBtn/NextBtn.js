import { TouchableOpacity, Image } from 'react-native';
import { nextBtnStyling } from '../NextBtn/NextBtnStyling'

const NextBtn = () => {
    return(
    <TouchableOpacity style={nextBtnStyling.nextBtn} onPress={() => {console.log('Next Pressed');}}>
        <Image source={require('../../assets/app-img/nextBtn.png')}></Image>
    </TouchableOpacity>)
}

export default NextBtn