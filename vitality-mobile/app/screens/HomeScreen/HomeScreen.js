import { View, ScrollView, Text, TouchableOpacity, ImageBackground } from "react-native";
import { homeScreenStyle } from "./HomeScreenStyle";
import { Color } from "../../../globalStyling";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return(
            <View style={homeScreenStyle.container}>
                <ScrollView>
                    <View style={homeScreenStyle.header}>
                        <Text style={homeScreenStyle.txt}>You don’t know what to cook today?</Text>
                        <Text style={{fontSize: 20, color: Color.white, fontWeight: 300}}>Check out our library of healthy recipes!</Text>
                    </View>
                    <View style={homeScreenStyle.caloriesContainer}>
                        <ImageBackground style={homeScreenStyle.kitchen} source={require('../../assets/app-img/foodImg.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={homeScreenStyle.containerBtn} onPress={() => navigation.navigate('Nutrition', { screen: 'RecipeDashboard' })}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 600, textAlign: 'center'}}>Check out recipes</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={homeScreenStyle.header}>
                        <Text style={homeScreenStyle.txt}>Compete and win!</Text>
                        <Text style={{fontSize: 20, color: Color.white, fontWeight: 300}}>Compete with your friends and workout to stat active!</Text>
                    </View>
                    <View style={homeScreenStyle.caloriesContainer}>
                        <ImageBackground style={homeScreenStyle.kitchen} source={require('../../assets/app-img/friendsImg.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={homeScreenStyle.containerBtn} onPress={() => navigation.navigate('Playground', { screen: 'PlaygroundDashboard'})}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 600, textAlign: 'center'}}>Check out our playground</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <View style={homeScreenStyle.header}>
                        <Text style={homeScreenStyle.txt}>Connect with friends!</Text>
                        <Text style={{fontSize: 20, color: Color.white, fontWeight: 300}}>Add your friends to workout together!</Text>
                    </View>
                    <View style={homeScreenStyle.caloriesContainer}>
                        <ImageBackground style={homeScreenStyle.kitchen} source={require('../../assets/app-img/friendInvite.jpg')} imageStyle={{borderRadius: 10}}>
                            <TouchableOpacity style={homeScreenStyle.containerBtn} onPress={() => navigation.navigate('Profile', { screen: 'FriendList' })}>
                                <Text style={{fontSize: 17, color: Color.black, fontWeight: 600, textAlign: 'center'}}>Invite friend</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
    );
}
export default HomeScreen