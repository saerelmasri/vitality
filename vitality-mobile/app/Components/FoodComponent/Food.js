import { View, Pressable, Image, Text } from "react-native";
import { foodStyling } from "../../screens/FoodListingScreen/FoodListingStyling";


const Food = ({name, serving}) => {
    return(
        <View style={foodStyling.foodItem}>
            <View style={foodStyling.foodInfo}>
                <Text style={foodStyling.foodTxt}>{name}</Text>
                <Text style={foodStyling.foodTxt}>{serving} gr</Text>
            </View>
            <View style={foodStyling.addContainer}>
                <Pressable onPress={() => {Alert.alert('Press')}}>
                    <Image source={require('../../assets/app-img/addBtn.png')}/>
                </Pressable>
            </View>
        </View>
    );
}
export default Food