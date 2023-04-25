import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const Header = () => {
    return(
        <View style={runningStyling.header}>
            <TouchableOpacity>
                <Text style={{fontSize: 18,  fontWeight: 400, color: Color.white}}>Challenges</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: 400, color: Color.white}}>Leaderboard</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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