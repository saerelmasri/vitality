import { View, SafeAreaView, StatusBar, Platform, Text, Pressable, Alert, ScrollView, Image } from "react-native"
import { macrosStyling } from "./MacrosStyling"

const Macros = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={macrosStyling.container}>
                <ScrollView style={{display: "flex",flex: 1,}}>
                    <View  style={macrosStyling.backBtnContainer}>
                        <View style={macrosStyling.backBtn}>
                            <Pressable onPress={() => navigation.navigate('Nutrition')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>
                    <View style={macrosStyling.headerContainer}>
                        <Text style={macrosStyling.headerTitle}>
                            Diary
                        </Text>
                    </View>
                    <View style={macrosStyling.statsContainer}>
                        <View style={macrosStyling.containerTitle}>
                            <Text style={macrosStyling.TitleTxt}>
                                Calories Remaining
                            </Text>
                        </View>
                        <View style={macrosStyling.contentContainer}>
                            <View style={macrosStyling.goalContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Goal</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>-</Text>
                            </View>
                            <View style={macrosStyling.foodContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Food</Text>
                            </View>
                            <View style={macrosStyling.signContainer}>
                                <Text style={macrosStyling.textTop}>=</Text>
                            </View>
                            <View style={macrosStyling.remainsContainer}>
                                <Text style={macrosStyling.textTop}>2,100</Text>
                                <Text style={macrosStyling.textBottom}>Remaining</Text>
                            </View>
                        </View>
                    </View>
                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Breakfast</Text>
                        <Text style={macrosStyling.addFood}>406</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Breakfast'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Lunch</Text>
                        <Text style={macrosStyling.addFood}>325</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Lunch'})}>
                            <Text style={macrosStyling.addFood}>Add Food</Text>
                        </Pressable>
                    </View>

                    <View style={macrosStyling.mealHeader}>
                        <Text style={macrosStyling.mealType}>Dinner</Text>
                        <Text style={macrosStyling.addFood}>725</Text>
                    </View>

                    <View style={macrosStyling.foodContainerList}>
                        <View style={macrosStyling.listItem}>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.food}>Banana</Text>
                                <Text style={macrosStyling.foodDefault}>1 medium</Text>
                            </View>
                            <View style={macrosStyling.itemHeader}>
                                <Text style={macrosStyling.foodCal}>105</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={macrosStyling.mealHeader}>
                        <Pressable onPress={() => navigation.navigate('FoodListing', {mealType: 'Dinner'})}>
                            <Text style={macrosStyling.addFood}>Add Dinner</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    )
}

export default Macros