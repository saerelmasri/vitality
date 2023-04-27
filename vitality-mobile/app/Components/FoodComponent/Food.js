import { View, Pressable, Image, Text, TouchableOpacity } from "react-native";
import { foodStyling } from "../../screens/FoodListingScreen/FoodListingStyling";


const Food = ({name, serving, action}) => {
    return(
        <TouchableOpacity style={foodStyling.foodItem} onPress={action}>
            <View style={foodStyling.foodInfo}>
                <Text style={foodStyling.foodTxt}>{name}</Text>
                <Text style={foodStyling.foodTxt}>{serving} gr</Text>
            </View>
        </TouchableOpacity>
    );
}
export default Food