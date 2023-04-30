import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const LeaderboardItem = ({position, name, level}) => {
    return(
        <View style={leaderboardStyle.leaderboardItem}>
            <View style={leaderboardStyle.itemPosition}>
                <Text style={leaderboardStyle.itemText}>{position}.</Text>
            </View>
            <View style={leaderboardStyle.itemName}>
                <Text style={leaderboardStyle.itemText}>
                    {name}
                </Text>
            </View>
            <View style={leaderboardStyle.itemLevel}>
                <Text style={leaderboardStyle.itemText}>
                    {level}
                </Text>
            </View>
        </View>
    );
}

const leaderboardStyle = StyleSheet.create({
    leaderboardItem: {
        width: width - 50,
        height: height / 13,
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    itemPosition: {
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 17,
        fontWeight: 500
    },
    itemName: {
        width: '55%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: 5
    },
    itemLevel: {
        width: '25%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})


export default LeaderboardItem