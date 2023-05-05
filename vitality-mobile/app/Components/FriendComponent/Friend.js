import { View, Pressable, Image, Alert, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const Friend = ({name, action, photo}) => {
    return(
        <View style={activityInfoStyle.friends}>
            <View style={activityInfoStyle.photoContainer}>
                {photo !== null  ? (
                        <View style={activityInfoStyle.photo}>
                            <Image source={{uri: `${photo}`}} style={{width: '100%', height: '100%', borderRadius: 100}}/>
                        </View>
                    ) : (
                    <View style={activityInfoStyle.photo}>
                        <Image source={require('../../assets/app-img/default.jpg')} style={{width: '100%', height: '100%', borderRadius: 100}}/>
                    </View>
                )}
            </View>
            <View style={activityInfoStyle.nameContainer}>
                <Text style={{fontSize: 17}}>{name}</Text>
            </View>
            <View style={activityInfoStyle.addContainer}>
                <Pressable onPress={action}>
                    <Image source={require('../../assets/app-img/addBtn.png')}/>
                </Pressable>
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
        borderWidth: 1,
    },
    nameContainer:{
        width: '45%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 10
    },
    addContainer: {
        height: '100%',
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Friend