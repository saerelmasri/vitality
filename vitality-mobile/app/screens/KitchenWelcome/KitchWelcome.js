import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, TouchableOpacity } from "react-native";
import { kitchenStyle } from "./KitchenWelcomeStyling";

const WelcomeKitchen = ({navigation}) => {

    return(
            <View style={kitchenStyle.container}>
                <ScrollView>
                    <View style={kitchenStyle.imgCover}>
                        <Image source={require('../../assets/app-img/kitchen.png')}/>
                    </View>
                    <View style={kitchenStyle.txt}>
                        <Text style={kitchenStyle.txtContent}>It's Cooking Time</Text>
                    </View>

                    <View style={kitchenStyle.btnContainer}>
                        <TouchableOpacity style={kitchenStyle.btn} onPress={() => {navigation.navigate('RecipeDashboard')}}>
                            <Text style={{fontSize: 20, fontWeight: 400}}>
                                Add Food
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

            </View>
    );
}

export default WelcomeKitchen