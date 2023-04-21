import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Color } from "../../../globalStyling"

const TypeOfDiet = ({title, description, imageName}) => {
    const URL = `../../assets/app-img/${imageName}.png`
    console.log(URL);
    return(
        <TouchableOpacity style={typeDietStyling.diet} onPress={() => {console.log('Hola');}}>
            <View style={typeDietStyling.dietInfo}>
                <Text style={typeDietStyling.dietTitle}>{title}</Text>
                <Text style={typeDietStyling.dietDescription}>{description}</Text>
            </View>
            <View style={typeDietStyling.dietImg}>
                <Image style={typeDietStyling.image} source={{uri: URL}}/>

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