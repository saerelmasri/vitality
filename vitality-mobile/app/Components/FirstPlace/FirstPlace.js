import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { Color } from "../../../globalStyling";

const FirstPlace = ({avatar}) => {
    return(
        <View style={leaderboardStyle.boardPlace}>
            {
                avatar !== null && avatar !== undefined ? (
                    <Image style={leaderboardStyle.profileFirst} source={{ uri: `${avatar}`}}/>
                ) : (
                    <Image style={leaderboardStyle.profileFirst} source={require('../../assets/app-img/default.jpg')}/>
                )
            }
            <View style={leaderboardStyle.positionFirst}>
                <Text style={{fontSize: 15, fontWeight: 500}}>
                    1
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
    profileFirst:{
        width: '77%',
        height: '62%',
        borderRadius: 100,
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
    positionFirst: {
        width: '32%',
        height: '25%',
        borderRadius: 100,
        backgroundColor: Color.white,
        position: 'absolute',
        top: '65%',
        left: '35%',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export default FirstPlace