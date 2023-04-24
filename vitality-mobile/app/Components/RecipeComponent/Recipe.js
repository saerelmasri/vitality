import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";

const RecipeComponent = ({level, name}) => {
    return(
        <TouchableOpacity style={recipesComponentStyling.recipeComponent}>
            <ImageBackground  style={{resizeMode: 'cover', height: 220, width: 320, borderRadius: 10, display: 'flex', justifyContent: 'space-between'}} source={require('../../assets/app-img/test.jpg')} imageStyle={{borderRadius: 10, opacity: 0.5}}>
                <View style={recipesComponentStyling.level}>
                    <Text style={recipesComponentStyling.levelTxt}>
                        {level}
                    </Text>
                </View>
                <View style={recipesComponentStyling.recipeName}>
                    <Text style={recipesComponentStyling.recipeTxt}>
                        {name}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const recipesComponentStyling = StyleSheet.create({
    recipeComponent: {
        width: '90%',
        height: '30%',  
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5%'
    },
    level: {
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    levelTxt: {
        fontSize: 20,
        fontWeight: 500,
        color: Color.white
    },
    recipeName: {
        width: '100%',
        height: '35%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        bottom: 0
    },
    recipeTxt: {
        fontSize: 25,
        fontWeight: 500,
        color: Color.white
    }
})

export default RecipeComponent