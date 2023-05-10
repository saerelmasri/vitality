import * as React from "react";
import { Text, View, Image } from "react-native";
import { welcomeStyles } from "./WelcomeScreenStyling";
import Button from "../../Components/Button/Button";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const WelcomeScreen = ({navigation}) => {

  let [ fontsLoaded] = useFonts({
    'medium500': require('../../assets/fonts/static/Montserrat-Medium.ttf'),
    'medium600': require('../../assets/fonts/static/Montserrat-SemiBold.ttf'),
    'bold700': require('../../assets/fonts/static/Montserrat-SemiBold.ttf'),
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <View style={welcomeStyles.welcomeScreen}>
      <Text style={[welcomeStyles.youreAllSet, welcomeStyles.youreAllSetTypo, {fontFamily: 'medium500'}]}>
        You’re all set
      </Text>
      <Text style={[welcomeStyles.letsCreateYour, welcomeStyles.youreAllSetTypo, {fontFamily: 'medium500'}]}>
        Let’s create your account!
      </Text>
      <Image
        style={welcomeStyles.food}
        resizeMode="cover"
        source={require("../../assets/app-img/food.png")}
      />
      <Image
        style={welcomeStyles.dumbbels}
        resizeMode="cover"
        source={require("../../assets/app-img/man-with-dumbble.png")}
      />
      <View style={welcomeStyles.btnContainer}>
        <Button title={'Register'} action={() => navigation.navigate('Login')}/>  
      </View>
    </View>
  );
};


export default WelcomeScreen;