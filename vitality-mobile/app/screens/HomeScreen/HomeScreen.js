import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Color } from "../../../globalStyling";
const { height, width } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return(
            <View style={activityInfoStyle.container}>
                <ScrollView>
                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>You don’t know what to cook today?</Text>
                        <Text style={{fontSize: 17, color: Color.white, fontWeight: 300}}>Check out our library of healthy recipes!</Text>
                    </View>
                    <View style={activityInfoStyle.caloriesContainer}>
                        <ImageBackground style={activityInfoStyle.kitchen} source={require('../../assets/app-img/foodImg.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={activityInfoStyle.containerBtn} onPress={() => navigation.navigate('Nutrition', { screen: 'RecipeDashboard' })}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 300, textAlign: 'center'}}>Check out recipes</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>Compete and win!</Text>
                        <Text style={{fontSize: 17, color: Color.white, fontWeight: 300}}>Compete with your friends and workout to stat active!</Text>
                    </View>
                    <View style={activityInfoStyle.caloriesContainer}>
                        <ImageBackground style={activityInfoStyle.kitchen} source={require('../../assets/app-img/friendsImg.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={activityInfoStyle.containerBtn} onPress={() => navigation.navigate('Playground', { screen: 'PlaygroundDashboard' })}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 300, textAlign: 'center'}}>Check out our playground</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={activityInfoStyle.header}>
                        <Text style={activityInfoStyle.txt}>Connect with friends!</Text>
                        <Text style={{fontSize: 17, color: Color.white, fontWeight: 300}}>Add your friends to workout together!</Text>
                    </View>
                    <View style={activityInfoStyle.caloriesContainer}>
                        <ImageBackground style={activityInfoStyle.kitchen} source={require('../../assets/app-img/friendInvite.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={activityInfoStyle.containerBtn} onPress={() => navigation.navigate('Profile', { screen: 'FriendList' })}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 300, textAlign: 'center'}}>Invite friend</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    
                </ScrollView>
            </View>
        
    );
}

const activityInfoStyle = StyleSheet.create({
    container: {
        backgroundColor: Color.ligtGreen,
        display: "flex",
        flex: 1,
        alignItems: 'center',
        overflow: "hidden",
    },
    header: {
        height: height / 9,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '5%'
    },
    txt: {
        fontSize: 20,
        fontWeight: 500,
        color: Color.white
    },
    caloriesContainer: {
        width: width,
        height: height / 2.2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '10%',
    },
    kitchen: {
        width: width - 50,
        height: height / 2.7,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        paddingLeft: '5%',
        paddingBottom: '5%'
    },
    containerBtn: {
        width: '40%',
        height: '20%',
        borderRadius: 10, 
        backgroundColor: Color.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%'
    }
    
    
    
})


export default HomeScreen