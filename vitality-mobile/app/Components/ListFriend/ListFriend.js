import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const FriendComponent = ({name}) => {
    return(
        <View style={activityInfoStyle.friends}>
            <View style={activityInfoStyle.photoContainer}>
                <View style={activityInfoStyle.photo}></View>
            </View>
            <View style={activityInfoStyle.nameContainer}>
                <Text style={{fontSize: 17}}>{name}</Text>
            </View>
        </View>
    );
}

const activityInfoStyle = StyleSheet.create({
    friends: {
        width: width / 1.3,
        height: height / 9,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 10
    },
    headerFriend: {
        width: width,
        height: height / 18,
        display: 'flex',
        justifyContent: 'center', 
        paddingLeft: '10%'
    },
    friendsSection: {
        width: width,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
        paddingTop: 20,
        paddingBottom: 20,
        
    },
    photoContainer: {
        width: '30%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo: {
        width: '80%',
        height: '80%',
        borderRadius: 100,
        backgroundColor: Color.grey
    },
    nameContainer:{
        width: '45%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    }
})


export default FriendComponent