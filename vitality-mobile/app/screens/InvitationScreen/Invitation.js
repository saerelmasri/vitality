import { View, ScrollView, SafeAreaView, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Color } from "../../../globalStyling";
import Header from "../../Components/PlaygroundHeader/PlaygroundHeader";
import InvitationCard from "../../Components/InvitationComponent/Invitation";
const { height, width } = Dimensions.get('window')



const Invitation = ({navigation}) => {
    
    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={invitationStyle.container}>
                <ScrollView>
                    <Header action1={()=> navigation.navigate('PlaygroundDashboard')} action2={()=> {navigation.navigate('Leaderboard')}}/>
                    <View style={invitationStyle.headerTitle}>
                        <Text style={{fontSize: 30, fontWeight: 400, color: Color.white}}>
                            Check who invite you to a challenge!
                        </Text>
                    </View>
                    <View style={invitationStyle.disclaimerContent}>
                        <Text style={{fontSize: 15, color: Color.white, textAlign: 'center'}}>
                            Disclaimer: Once the challenge is accepted, it will start right away.   
                        </Text>
                    </View>
                    <View style={invitationStyle.invitationContainer}>
                        <ScrollView>
                            <InvitationCard/>
                            <InvitationCard/>
                            <InvitationCard/>
                            <InvitationCard/>
                            <InvitationCard/>
                            <InvitationCard/>
                        </ScrollView>
                        
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const invitationStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden",
        width: "100%",
    },
    headerTitle: {
        width: width,
        height: height / 10,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    disclaimerContent: {
        width: width,
        height: height / 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    invitationContainer: {
        width: width,
        height: height / 1.7,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5%'
    },
})
export default Invitation