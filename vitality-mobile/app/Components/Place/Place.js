import { View, Text, StyleSheet, Image } from "react-native";
import { Color } from "../../../globalStyling";

const Place = ({avatar, position}) => {
    return(
        <View style={leaderboardStyle.boardPlace}>
            { avatar !== null && avatar !== undefined ? (
                <Image style={leaderboardStyle.profile} source={{ uri: `${avatar}`}}/>
            ) : (
                <Image style={leaderboardStyle.profile} source={require('../../assets/app-img/default.jpg')}/>
            )}
            <View style={leaderboardStyle.position}>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                    {position}
                </Text>
            </View>
        </View>
    );
}

const leaderboardStyle = StyleSheet.create({
    boardPlace: {
        width: '35%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: '65%',
        height: '52%',
        borderRadius: 100,
        backgroundColor: Color.white,
        borderWidth: 2
    },
    position: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '62%',
        left: '36%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default Place