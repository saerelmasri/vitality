import { View, ScrollView, SafeAreaView, Pressable, Image, StatusBar, Platform, Alert, Text, Dimensions, TextInput } from "react-native";
import { foodStyling } from "./FoodListingStyling";


const FoodListing = () => {
    return(
        <SafeAreaView style={{flex:1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, }}>
            <View style={foodStyling.container}>
                <ScrollView>
                    <View style={foodStyling.backBtnContainer}>
                        <View style={foodStyling.backBtn}>
                            <Pressable onPress={() => Alert.alert('image clicked')}>
                                <Image source={require('../../assets/app-img/back-btn.png')}></Image>
                            </Pressable>
                        </View>
                    </View>

                    <View style={foodStyling.headerMeal}>
                        <Text style={foodStyling.headerTitle}>
                            Breakfast
                        </Text>
                    </View>

                    <View style={foodStyling.searchContainer}>
                        <View style={foodStyling.searchIconContainer}>

                        </View>
                        <TextInput style={foodStyling.searchInput} placeholder="Search food"></TextInput>
                    </View>

                    <View style={foodStyling.foodItemList}>
                        <View style={foodStyling.foodItem}>
                            <View style={foodStyling.foodInfo}>
                                <Text style={foodStyling.foodTxt}>Banana</Text>
                                <Text style={foodStyling.foodTxt}>105 cal, 1 medium</Text>
                            </View>
                            <View style={foodStyling.addContainer}>
                                <Pressable onPress={() => {Alert.alert('Press')}}>
                                    <Image source={require('../../assets/app-img/addBtn.png')}/>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    );
}
export default FoodListing