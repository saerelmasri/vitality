import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Text } from "react-native";
import { Color } from "../../../../globalStyling";
import { trophyStyle } from "./TrophyScreenStyling";
import { useRoute, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";

const Trophy = () => {
    const route = useRoute()
    const winnerOrLoser = route.params.title
    const navigation = useNavigation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate('Leaderboard')
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [navigation]);

    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
            <View style={trophyStyle.container}>
                <ScrollView>
                    {winnerOrLoser === 'winner' ? (
                        <View style={trophyStyle.content}>
                        <View style={trophyStyle.trophyContent}>
                            <Image source={require('../../../assets/app-img/trophy.png')} style={{width: '100%', height: '100%'}}/>
                        </View>
                        <View style={trophyStyle.headerContainer}>
                            <Text style={{fontSize: 50, fontWeight: 500, color: Color.white}}>STRONG FINISH</Text>
                            <Text style={{fontSize: 30, fontWeight: 400, color: Color.white, textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>You complete the challenge!</Text>
                            <Text style={{fontSize: 20, color: Color.white}}>You earned 150pts</Text>

                        </View>
                    </View>
                    ):(
                        <View style={trophyStyle.content}>
                        <View style={trophyStyle.trophyContent}>
                            <Image source={require('../../../assets/app-img/loser.png')} style={{width: '100%', height: '110%'}}/>
                        </View>
                        <View style={trophyStyle.headerContainer}>
                            <Text style={{fontSize: 30, fontWeight: 500, color: Color.white, textAlign: 'center'}}>KEEP UP. YOU GOT WHAT IT NEEDS FOR THE NEXT CHALLENGE</Text>
                            <Text style={{fontSize: 25, fontWeight: 300, color: Color.white, textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>NEVER GIVE UP</Text>
                        </View>
                    </View>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Trophy