import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { nutritionStyle } from "./NutritionStyle";
import MealContainer from "../../Components/MealCalories/MealCalories";
import Macro from "../../Components/MacrosTracker/MacrosTracker";

const Nutrition = ({navigation}) => {
    return(
        <View style={nutritionStyle.container}>
            <ScrollView style={{display: "flex",flex: 1,}}>
                <View style={nutritionStyle.headerBtnContainer}>
                    <TouchableOpacity style={nutritionStyle.btn} onPress={() => navigation.navigate('Nutrition')}>
                        <Text style={nutritionStyle.btnText}>
                            Nutrition
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nutritionStyle.btn} onPress={() => navigation.navigate('Macros')}>
                        <Text style={nutritionStyle.btnText}>
                            Macros
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={nutritionStyle.btn} onPress={() => navigation.navigate('WelcomeKitchen')}>
                        <Text style={nutritionStyle.btnText}>
                            Kitchen
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={nutritionStyle.caloriesStats}>
                    <View style={nutritionStyle.textContainer}>
                        <Text style={nutritionStyle.text}>
                            Calories
                        </Text>
                    </View>
                    <MealContainer/>
                </View>
                <View style={nutritionStyle.caloriesStats}>
                    <View style={nutritionStyle.textContainer}>
                        <Text style={nutritionStyle.text}>
                            Macros
                        </Text>
                    </View>
                    <Macro/>
                    
                </View>
            </ScrollView>
        </View>
            
    )
}

export default Nutrition