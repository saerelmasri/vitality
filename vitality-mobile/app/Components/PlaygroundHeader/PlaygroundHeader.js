import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const Header = ({action1, action2, action3}) => {
    return(
        <View style={runningStyling.header}>
            <TouchableOpacity onPress={action1}>
                <Text style={{fontSize: 18,  fontWeight: 400, color: Color.white}}>Challenges</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={action2}>
                <Text style={{fontSize: 18, fontWeight: 400, color: Color.white}}>Leaderboard</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={action3}>
                <Text style={{fontSize: 18, fontWeight: 400, color: Color.white}}>Invitations</Text>
            </TouchableOpacity>
        </View>
    );
}

const runningStyling = StyleSheet.create({
    header: {
        width: width, 
        height: height / 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

export default Header