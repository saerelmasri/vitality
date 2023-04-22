import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Color } from "../../../globalStyling"
import veganImage from '../../assets/app-img/vegan.png';
import vegetarianImage from '../../assets/app-img/vegetarian.png';
import keto from '../../assets/app-img/keto.png';
import normal from '../../assets/app-img/normal.png'

const TypeOfDiet = ({title, description, imageName, action}) => {
    let imageSource;
    switch (imageName) {
      case 'vegan':
        imageSource = veganImage;
        break;
      case 'vegetarian':
        imageSource = vegetarianImage;
        break;
      case 'keto':
        imageSource = keto;
        break;
      case 'normal':
        imageSource = normal;
        break;
      default:
        imageSource = null;
        break;
    }
    
    return(
        <TouchableOpacity style={typeDietStyling.diet} onPress={action}>
            <View style={typeDietStyling.dietInfo}>
                <Text style={typeDietStyling.dietTitle}>{title}</Text>
                <Text style={typeDietStyling.dietDescription}>{description}</Text>
            </View>
            <View style={typeDietStyling.dietImg}>
                <Image style={typeDietStyling.image} source={imageSource}/>

            </View>
        </TouchableOpacity>
    )
}

const typeDietStyling = StyleSheet.create({
    diet:{
        width: '90%',
        height: '23%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row'
    },
    dietInfo:{
        width: '65%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingLeft: 10
    },
    dietTitle: {
        fontSize: 25,
        fontWeight: 600
    },
    dietDescription: {
        fontSize: 17
    },
    dietImg: {
        width: '35%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100
    }
})
export default TypeOfDiet