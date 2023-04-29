import { View, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { macrosStyling } from "../../screens/MacrosScreen/MacrosStyling"

const FoodIntake = ({name, calories}) => {
    return(
        <View style={macrosStyling.listItem}>
            <View style={macrosStyling.itemHeader}>
                <Text style={macrosStyling.food}>{name}</Text>
            </View>
            <View style={macrosStyling.itemHeader}>
                <Text style={macrosStyling.foodCal}>{calories}</Text>
            </View>
        </View>
    )
}

export default FoodIntake