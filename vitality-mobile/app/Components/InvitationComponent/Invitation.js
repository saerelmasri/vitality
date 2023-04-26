import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')

const InvitationCard = () => {
    
    return(
        <View style={invitationStyle.invitationCard}>
            <View style={invitationStyle.top}>
                <View style={invitationStyle.profileContainer}>
                    <ImageBackground style={invitationStyle.profile}></ImageBackground>
                </View>
                <View style={invitationStyle.nameContainer}>
                    <Text style={{fontSize: 19, fontWeight: 500,}}>
                        Saer El Masri challenged you!
                    </Text>
                </View>
            </View>
            <View style={invitationStyle.bottom}>
                <View style={invitationStyle.btnContainer}>
                    <TouchableOpacity style={invitationStyle.btn}>
                        <Text style={invitationStyle.btnText}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={invitationStyle.btnContainer}>
                <TouchableOpacity style={invitationStyle.btn}>
                        <Text style={invitationStyle.btnText}>
                            Declined
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const invitationStyle = StyleSheet.create({
    invitationCard: {
        width: width / 1.2,
        height: height / 5,
        borderRadius: 10,
        backgroundColor: Color.grey,
        paddingBottom: '2%',
        marginBottom: 10
    },
    top: {
        height: '60%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    bottom: {
        height: '40%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    profileContainer: {
        width: '35%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile: {
        width: '72%',
        height: '85%',
        borderRadius: 100,
        backgroundColor: Color.white
    },
    nameContainer: {
        width: '65%',
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    btnContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width: '90%',
        height: '90%',
        borderRadius: 10,
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 25,
        fontWeight: 500
    }
})

export default InvitationCard