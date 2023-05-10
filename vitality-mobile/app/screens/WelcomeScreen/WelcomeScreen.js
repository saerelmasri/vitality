import * as React from "react";
import { Text, View, Image } from "react-native";
import { welcomeStyles } from "./WelcomeScreenStyling";
import Button from "../../Components/Button/Button";

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={welcomeStyles.welcomeScreen}>
      <Text style={[welcomeStyles.youreAllSet, welcomeStyles.youreAllSetTypo]}>
        You’re all set
      </Text>
      <Text style={[welcomeStyles.letsCreateYour, welcomeStyles.youreAllSetTypo]}>
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