import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const NoFriends = () => {

    return(
        <View style={activityInfoStyle.friends}>
            <Image source={require('../../assets/app-img/nofriend.png')} style={activityInfoStyle.img}/>
            <Text style={activityInfoStyle.text1}>No friends</Text>
            <Text style={activityInfoStyle.text2}>Add your friends now!</Text>
        </View>
    );
}

const activityInfoStyle = StyleSheet.create({
    friends: {
        width: width / 1.3,
        height: height / 2,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    text1: {
        fontSize: 40,
        fontWeight: 500,
        color: Color.white
    },
    text2: {
        fontSize: 25,
        fontWeight: 400,
        color: Color.white
    },
    img: {
        width: '100%',
        height: '70%'
    }
})


export default NoFriends