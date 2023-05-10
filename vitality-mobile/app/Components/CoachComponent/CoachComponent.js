import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CoachComponent = ({name, gym, experience, avatar, action}) => {
    return(
        <TouchableOpacity style={coachDashboardStyle.coachComponent} onPress={action}>
            <View style={coachDashboardStyle.profileContainer}>
                {
                avatar !== null && avatar !== undefined ? (
                    <Image style={coachDashboardStyle.profile} source={{ uri: `${avatar}`}}/>
                ) : (
                    <Image style={coachDashboardStyle.profile} source={require('../../assets/app-img/default.jpg')}/>
                )
            }
            </View>
            <View style={coachDashboardStyle.infoContainer}>
                <View style={coachDashboardStyle.button}>
                <MaterialCommunityIcons name="arrow-right" size={30} />
                </View>
                <View style={coachDashboardStyle.info}>
                    <Text style={{fontSize: 25, fontWeight: 500}}>{name}</Text>
                    <Text style={{fontSize: 18, fontWeight: 400}}>Professional Coach at {gym}</Text>
                    <Text style={{fontSize: 18, fontWeight: 400}}>Experience coaching: {experience}</Text>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const coachDashboardStyle = StyleSheet.create({
    coachComponent: {
        width: '90%',
        height: height / 4.2,
        borderRadius: 10,
        backgroundColor: Color.white,
        display:'flex',
        flexDirection: 'row',
        marginBottom: 20
    },
    profileContainer:{
        width: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profile:{
        borderWidth:1,
        width: '95%',
        height: ' 70%',
        borderRadius: 100
    },
    infoContainer:{
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
    },
    button: {
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    info: {
        height: '80%',
        display:'flex',
        justifyContent: 'center',
        paddingLeft: '2%'
    }
})

export default CoachComponent