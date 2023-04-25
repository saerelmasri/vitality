import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')


const CardComponent = ({text, target, image}) => {
    return(
        <TouchableOpacity>
            <ImageBackground style={workoutDashboardStyling.cardComponent} source={{uri: image}} imageStyle={{borderRadius: 20, opacity: 0.5}}>
                <View style={workoutDashboardStyling.textCard}>
                    <Text style={{fontSize: 20, fontWeight: 500, color: Color.white}}>
                        {target}
                    </Text>
                </View>
                <View style={workoutDashboardStyling.textCard}>
                    <Text style={{fontSize: 20, fontWeight: 500, color: Color.white}}>
                        {text}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
                        
    );
}

const workoutDashboardStyling = StyleSheet.create({
    cardComponent: {
        width: width / 1.2,
        height: height / 5,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '5%'
    },
    textCard: {
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'

    }

})


export default CardComponent